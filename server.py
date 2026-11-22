"""Serve this static presentation from its project root."""

from __future__ import annotations

import argparse
import sys
import webbrowser
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


PROJECT_ROOT = Path(__file__).resolve().parent
HOST = "127.0.0.1"


class ProjectRequestHandler(SimpleHTTPRequestHandler):
    """Static file handler confined to PROJECT_ROOT, including through symlinks."""

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(PROJECT_ROOT), **kwargs)

    def translate_path(self, path: str) -> str:
        candidate = Path(super().translate_path(path)).resolve()
        try:
            candidate.relative_to(PROJECT_ROOT)
        except ValueError:
            self._outside_project_root = True
            return str(PROJECT_ROOT)
        return str(candidate)

    def send_head(self):
        self._outside_project_root = False
        self.translate_path(self.path)
        if self._outside_project_root:
            self.send_error(403, "Requested path is outside the project root")
            return None
        return super().send_head()


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Run the static jewelry presentation locally.")
    parser.add_argument("--port", type=int, default=8000, help="Local port (default: 8000)")
    parser.add_argument("--open", action="store_true", help="Open the presentation in a browser")
    args = parser.parse_args()
    if not 1 <= args.port <= 65535:
        parser.error("--port must be between 1 and 65535")
    return args


def main() -> int:
    args = parse_args()
    url = f"http://{HOST}:{args.port}"
    try:
        server = ThreadingHTTPServer((HOST, args.port), ProjectRequestHandler)
    except OSError as exc:
        print(f"Could not start server at {url}: {exc}", file=sys.stderr, flush=True)
        return 1

    print(f"Serving project root: {PROJECT_ROOT}", flush=True)
    print(f"Presentation: {url}", flush=True)
    print("Press Ctrl+C to stop the server.", flush=True)
    if args.open:
        webbrowser.open(url)

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.", flush=True)
    finally:
        server.server_close()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
