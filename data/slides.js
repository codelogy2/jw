import { protectedFlowcharts } from './protected-flowcharts.js';
import { openingSlides, technicalSlides, bibliographySlides } from './technical-slides.js';

export const siteConfig = {
  title: 'فرایند تولید در صنعت طلا و جواهر',
  titleEn: 'Gold and Jewellery Manufacturing Processes',
  publicUrl: 'https://www.google.com',
  durationMinutes: 47,
  instructor: 'استاد شیری',
  collectorDeveloper: 'مهدی پورذهبی',
  presenters: ['محمدرضا میناهنگ', 'امیرمحمد اسدی‌راد'],
  speakerPlan: [
    {name:'محمدرضا میناهنگ',role:'مقدمه، فلوچارت‌ها، متالورژی، ریخته‌گری، مبانی فینیشینگ و بخشی از کنترل کیفیت',time:'۲۳ دقیقه و ۳۰ ثانیه'},
    {name:'امیرمحمد اسدی‌راد',role:'الکتروفرمینگ، AAS، PVD، فناوری‌های نوین فینیشینگ، پایداری و جمع‌بندی',time:'۲۳ دقیقه و ۳۰ ثانیه'},
  ],
  notesAccess: {
    username: 'SP',
    passwordSalt: '876770d0916007fb44c2d9807a6a28c0',
    passwordHash: '1ba818f7414a5295db168d5ca19dc5151e31c313edacccf42556e6601d2a0b42',
    iterations: 310000
  }
};

export const sources = [
  {id:'ASM-EF',year:'1994',title:'Electroforming',publisher:'ASM Handbook, Surface Engineering, Vol. 5',supports:'ماندریل، توزیع رسوب، تنش داخلی و زبری در الکتروفرمینگ',url:'https://doi.org/10.31399/asm.hb.v05.a0001263'},
  {id:'STRATH-EF',year:'پژوهش دانشگاهی',title:'Electrochemical deposition and dissolution of nickel',publisher:'University of Strathclyde',supports:'تفاوت قطعهٔ خودایستا در الکتروفرمینگ با پوشش آبکاری و کنترل تنش',url:'https://stax.strath.ac.uk/downloads/zg64tm548?locale=en'},
  {id:'AGILENT-AAS',year:'راهنمای فنی',title:'How does AAS work? Atomic absorption spectroscopy FAQs',publisher:'Agilent Technologies',supports:'اصل AAS، شعله، کورهٔ گرافیتی و مراحل اتم‌سازی',url:'https://www.agilent.com/en/support/atomic-spectroscopy/atomic-absorption/flame-atomic-absorption-instruments/how-does-aas-work-aas-faqs'},
  {id:'EPA-7010',year:'SW-846',title:'Method 7010: Graphite Furnace Atomic Absorption Spectrophotometry',publisher:'U.S. Environmental Protection Agency',supports:'تداخل‌های ماتریسی، کنترل زمینه و ملاحظات روش گرافیتی',url:'https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P1015C92.txt'},
  {id:'JEW-CAST',year:'2004',title:'Does Investment Permeability Impact Jewelry Castings?',publisher:'Santa Fe Symposium on Jewelry Manufacturing Technology',supports:'نفوذپذیری قالب و تفاوت مسیرهای ریخته‌گری جواهر',url:'https://www.santafesymposium.org/2004-santa-fe-symposium-papers-1/2004-does-investment-permeability-impact-jewelry-castings'},
  {id:'CAST-POROSITY',year:'2019',title:'Technological Measures of Preventing Shrinkage Porosity in Jewelry Castings',publisher:'Special Casting & Nonferrous Alloys, 39(7), 761–764',supports:'تخلخل انقباضی، تغذیه و اثر آلیاژ، هندسه و سامانهٔ راهگاهی',url:'https://doi.org/10.15980/j.tzzz.2019.07.017'},
  {id:'GOLD-18K',year:'2008',title:'On the strengthening mechanisms of 18 carat yellow gold and its mechanical behaviour',publisher:'Materials Science and Engineering: A, 488, 50–54',supports:'کارسختی، بازپخت، اندازهٔ دانه و خواص آلیاژ طلای ۱۸ عیار',url:'https://doi.org/10.1016/j.msea.2007.10.054'},
  {id:'IONBOND-PVD',year:'راهنمای فنی',title:'PVD coating technology',publisher:'Ionbond',supports:'تبخیر، کندوپاش، آماده‌سازی قطعه و خانواده‌های پوشش PVD',url:'https://www.ionbond.com/en-us/technologies/pvd/'},
  {id:'OERLIKON-PVD',year:'2024',title:'Oerlikon Balzers presents new PVD coating system with Advanced Arc Technology',publisher:'Oerlikon Balzers',supports:'منبع قوسی، ساختار لایه و یکنواختی پوشش',url:'https://www.oerlikon.com/ecoma/files/EN20240912_NewsRelease_Oerlikon_Balzers_presents_new_PVD_coating_system_INVENTA.pdf?download=1'},
  {id:'PEP-CIRP',year:'2016',title:'Plasma Electrolytic Polishing – An Overview of Applied Technologies and Current Challenges',publisher:'Procedia CIRP, 42, 503–507',supports:'سازوکار، مواد آزموده‌شده و محدودیت تعمیم PEP',url:'https://doi.org/10.1016/j.procir.2016.02.240'},
  {id:'PEP-REVIEW',year:'2020',title:'Mechanism and technological opportunity of plasma electrolytic polishing of metals and alloys surfaces',publisher:'Applied Surface Science Advances, 1, 100016',supports:'اثر ترکیب الکترولیت، شرایط فرایند و جنس بر PEP',url:'https://doi.org/10.1016/j.apsadv.2020.100016'},
  {id:'LASER-REVIEW',year:'2022',title:'Laser polishing of additively manufactured metal parts: a review',publisher:'Surface Engineering, 38(3)',supports:'ذوب سطحی، کاهش زبری و وابستگی پرداخت لیزری به ماده و فرایند',url:'https://doi.org/10.1080/02670844.2022.2072080'},
  {id:'MAF-REVIEW',year:'2021',title:'A review on magnetic abrasive finishing',publisher:'The International Journal of Advanced Manufacturing Technology, 112, 619',supports:'سازوکار MAF، محیط ساینده و کاربرد سطوح پیچیده',url:'https://doi.org/10.1007/s00170-020-06363-x'},
  {id:'ISO-21920',year:'2021',title:'ISO 21920-1: Geometrical product specifications — Surface texture: Profile',publisher:'International Organization for Standardization',supports:'نحوهٔ مشخص‌کردن بافت سطح به روش پروفیل و مرجع سنجش',url:'https://www.iso.org/standard/72196.html'},
  {id:'RJC-GUIDANCE',year:'2019',title:'Chain of Custody Standard Guidance',publisher:'Responsible Jewellery Council',supports:'تفکیک ضایعات فلزات گران‌بها و بازگرداندن ضایعات تولید به بازیابی',url:'https://www.responsiblejewellery.com/files/RJC-CoC-Guidance-2019-web.pdf'},
  {id:'UMICORE-REFINING',year:'راهنمای خدمات',title:'Precious metals refining services',publisher:'Umicore Jewelry & Industrial Metals',supports:'نمونه‌های جریان‌های غبار پولیش، فیلتر، پارچه و ضایعات دارای فلز',url:'https://jim-ca.umicore.com/en/services/refining'}
];

const productFlow = protectedFlowcharts.find(slide => slide.id === 'product-flow');
const factoryArchitecture = protectedFlowcharts.find(slide => slide.id === 'factory-architecture');
const [coverSlide, ...orientationSlides] = openingSlides;
const technicalOrder = ['electroforming', 'aas', 'pvd', 'casting', 'metallurgy', 'finishing'];
const technicalTopic = slide => {
  if (slide.id.startsWith('electroforming-')) return 'electroforming';
  if (slide.id.startsWith('aas-')) return 'aas';
  if (slide.id.startsWith('pvd-')) return 'pvd';
  if (slide.id.startsWith('casting-') || slide.id === 'vacuum-centrifugal') return 'casting';
  if (['metallurgy-structure', 'work-hardening', 'alloy-design'].includes(slide.id)) return 'metallurgy';
  return 'finishing';
};
const orderedTechnicalSlides = [...technicalSlides].sort((a, b) => technicalOrder.indexOf(technicalTopic(a)) - technicalOrder.indexOf(technicalTopic(b)));

export const slides = [
  coverSlide,
  productFlow,
  factoryArchitecture,
  ...orientationSlides,
  ...orderedTechnicalSlides,
  ...bibliographySlides
];
