import logo from "@/assets/logo.jpeg.asset.json";
import p1 from "@/assets/p1.jpeg.asset.json";
import p2 from "@/assets/p2.jpeg.asset.json";
import p3 from "@/assets/p3.jpeg.asset.json";
import p4 from "@/assets/p4.jpeg.asset.json";
import p5 from "@/assets/p5.jpeg.asset.json";
import p6 from "@/assets/p6.jpeg.asset.json";
import p7 from "@/assets/p7.jpeg.asset.json";
import p8 from "@/assets/p8.jpeg.asset.json";
import p9 from "@/assets/p9.jpeg.asset.json";
import p10 from "@/assets/p10.jpeg.asset.json";
import p11 from "@/assets/p11.jpeg.asset.json";
import p12 from "@/assets/p12.jpeg.asset.json";
import p13 from "@/assets/p13.jpeg.asset.json";
import p14 from "@/assets/p14.jpeg.asset.json";
import p15 from "@/assets/p15.jpeg.asset.json";
import p16 from "@/assets/p16.jpeg.asset.json";
import p17 from "@/assets/p17.jpeg.asset.json";
import p18 from "@/assets/p18.jpeg.asset.json";
import p19 from "@/assets/p19.jpeg.asset.json";
import certIncorporation from "@/assets/cert-incorporation.jpeg.asset.json";
import certTin from "@/assets/cert-tin.jpeg.asset.json";
import certVat from "@/assets/cert-vat.jpeg.asset.json";
import certCrbBuilding from "@/assets/cert-crb-building.jpeg.asset.json";
import certCrbCivil from "@/assets/cert-crb-civil.jpeg.asset.json";
import certBizBuilding from "@/assets/cert-business-license-building.jpeg.asset.json";
import certBizSupply from "@/assets/cert-business-license-supply.jpeg.asset.json";

export const CERTIFICATES = [
  { image: certIncorporation.url, title: "Certificate of Incorporation", issuer: "BRELA — Tanzania", ref: "No. 163511177", date: "21 February 2023" },
  { image: certCrbBuilding.url, title: "Contractors Registration — Building Contractor", issuer: "Contractors Registration Board (CRB)", ref: "B6/1844/03/2024 · Class Six · Local", date: "11 March 2024" },
  { image: certCrbCivil.url, title: "Contractors Registration — Civil Works Contractor", issuer: "Contractors Registration Board (CRB)", ref: "C6/2905/03/2024 · Class Six · Local", date: "11 March 2024" },
  { image: certTin.url, title: "Taxpayer Identification Number (TIN)", issuer: "Tanzania Revenue Authority", ref: "TIN 163-511-177", date: "Effective 21 February 2023" },
  { image: certVat.url, title: "VAT Registration Certificate", issuer: "Tanzania Revenue Authority", ref: "VRN 40-316627-L", date: "Effective 4 June 2024" },
  { image: certBizBuilding.url, title: "Business License — Building Contractor", issuer: "Masasi Town Council", ref: "BL01414862025-2600001592", date: "Valid 2025 – 2026" },
  { image: certBizSupply.url, title: "Business License — Supply of Building Materials", issuer: "Masasi Town Council", ref: "BL01414862025-2600001692", date: "Valid 2026 – 2027" },
];

export const TEAM = [
  { role: "Engineers", count: 5 },
  { role: "Quantity Surveyor", count: 1 },
  { role: "Technicians", count: 4 },
  { role: "Operators", count: 5 },
  { role: "Skilled Workers", count: 30 },
];

export const IMG = {
  logo: logo.url,
  districtOffice: p1.url,
  yellowBuilding: p2.url,
  concreteClose: p3.url,
  concretePier: p4.url,
  foundationCrew: p5.url,
  waterTower: p6.url,
  scaffoldBuilding: p7.url,
  hallExterior: p8.url,
  excavation: p9.url,
  crewSlab: p10.url,
  excavator: p11.url,
  interiorColumns: p12.url,
  roofTrusses: p13.url,
  waterTowerScaffold: p14.url,
  scaffoldFacade: p15.url,
  slabRebar: p16.url,
  earthmoving: p17.url,
  twoStoreyShell: p18.url,
  blueRoofComplex: p19.url,
};

export const CONTACT = {
  companyShort: "ECCL",
  companyFull: "EF. IMER Construction Company Limited",
  address: "Kunduchi Road, Kilongawima, Dar es Salaam, Tanzania",
  postal: "P.O. Box 78977, Dar es Salaam, Tanzania",
  phones: ["+255 715 932 709", "+255 757 843 489"],
  email: "efimerconstr@outlook.com",
  whatsapp: "255715932709",
};

export type ServiceCategory = {
  slug: string;
  title: string;
  short: string;
  image: string;
  items: string[];
};

export const SERVICES: ServiceCategory[] = [
  {
    slug: "building-construction",
    title: "Building Construction",
    short: "Residential, commercial and renovation projects delivered end-to-end.",
    image: IMG.yellowBuilding,
    items: ["Residential building construction", "Commercial building construction", "Renovation works"],
  },
  {
    slug: "civil-engineering",
    title: "Civil Engineering",
    short: "Full civil works including labour-based road engineering.",
    image: IMG.concretePier,
    items: ["Civil engineering construction", "Specialist civil works (Labour-Based Road Works)"],
  },
  {
    slug: "road-construction",
    title: "Road Construction",
    short: "Durable gravel and tarmac roads with proper drainage & marking.",
    image: IMG.excavation,
    items: ["Gravel roads", "Tarmac roads", "Stormwater drainage systems", "Road marking"],
  },
  {
    slug: "water-supply",
    title: "Water Supply Projects",
    short: "Boreholes, pipelines, storage tanks and solar-powered systems.",
    image: IMG.waterTower,
    items: [
      "Borehole drilling",
      "Water pipeline supply and installation",
      "Transmission mains installation",
      "Gravity line installation",
      "Distribution network installation",
      "Water storage tanks",
      "Booster stations",
      "Solar-powered water supply systems",
      "Pump installation",
    ],
  },
  {
    slug: "building-materials",
    title: "Building Materials",
    short: "Reliable supply of building materials to sites across Tanzania.",
    image: IMG.concreteClose,
    items: ["Supply of building materials"],
  },
  {
    slug: "specialized-works",
    title: "Specialized Construction",
    short: "Healthcare, agricultural and water infrastructure specialists.",
    image: IMG.districtOffice,
    items: [
      "Emergency medical facilities",
      "Maternity ward construction",
      "Water infrastructure projects",
      "Agricultural infrastructure projects",
    ],
  },
];

export const PORTFOLIO = [
  { image: IMG.districtOffice, title: "District Administrative Complex", location: "Tanzania", category: "Commercial Building" },
  { image: IMG.yellowBuilding, title: "Two-Storey Institutional Block", location: "Tanzania", category: "Institutional" },
  { image: IMG.hallExterior, title: "Large Assembly Hall", location: "Tanzania", category: "Public Works" },
  { image: IMG.waterTower, title: "Elevated Water Storage Tank", location: "Tanzania", category: "Water Supply" },
  { image: IMG.concretePier, title: "Reinforced Concrete Pier", location: "Tanzania", category: "Civil Engineering" },
  { image: IMG.foundationCrew, title: "Deep Foundation Works", location: "Tanzania", category: "Civil Engineering" },
  { image: IMG.excavation, title: "Site Preparation & Excavation", location: "Tanzania", category: "Earthworks" },
  { image: IMG.scaffoldBuilding, title: "Facade & Finishing Works", location: "Tanzania", category: "Building Construction" },
  { image: IMG.concreteClose, title: "Structural Concrete Elements", location: "Tanzania", category: "Civil Engineering" },
];

export const TESTIMONIALS = [
  {
    name: "Amina Hassan",
    role: "District Engineer, Coast Region",
    quote: "ECCL delivered our administrative complex on time and to a standard beyond what we expected. Their site discipline is exceptional.",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop&crop=faces&q=80",
  },
  {
    name: "Joseph Mwakalinga",
    role: "Project Manager, Water Authority",
    quote: "From boreholes to elevated tanks, the team handled every stage of our rural water project with real technical depth.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces&q=80",
  },
  {
    name: "Grace Kimario",
    role: "Facilities Director, Private Hospital",
    quote: "Our maternity ward was completed with zero downtime to the running clinic. Communication was clear from day one.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=faces&q=80",
  },
  {
    name: "Baraka Nyerere",
    role: "Council Chairperson",
    quote: "Roads and drainage in our ward have transformed daily life. ECCL involved the community from the start.",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=faces&q=80",
  },
  {
    name: "Neema Mushi",
    role: "Farm Owner",
    quote: "The solar-powered water system ECCL installed on our farm has been running flawlessly for two seasons.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces&q=80",
  },
  {
    name: "Emmanuel Kileo",
    role: "Regional Contractor",
    quote: "A rare combination of technical rigor and honest pricing. We now sub-contract them on our largest jobs.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=faces&q=80",
  },
];

export const BLOG = [
  {
    slug: "choosing-right-foundation",
    title: "Choosing the Right Foundation for Tanzanian Soils",
    excerpt: "From red clay to coastal sand — how ECCL matches foundation systems to local ground conditions.",
    image: IMG.foundationCrew,
    date: "March 2026",
    readTime: "6 min read",
  },
  {
    slug: "solar-water-systems",
    title: "Why Solar-Powered Water Systems Are Winning in Rural Tanzania",
    excerpt: "Lower running costs and higher uptime are making solar pumping the default for new borehole projects.",
    image: IMG.waterTower,
    date: "February 2026",
    readTime: "5 min read",
  },
  {
    slug: "labour-based-roads",
    title: "Labour-Based Road Works: Building Roads and Livelihoods",
    excerpt: "How specialist labour-based methods deliver durable rural roads while creating meaningful local employment.",
    image: IMG.excavation,
    date: "January 2026",
    readTime: "7 min read",
  },
  {
    slug: "renovation-checklist",
    title: "A Practical Renovation Checklist for Commercial Buildings",
    excerpt: "Ten site-tested checks every facility manager should run before signing off on a renovation contract.",
    image: IMG.scaffoldBuilding,
    date: "December 2025",
    readTime: "4 min read",
  },
];

export const STATS = [
  { value: "2+", label: "Years Registered" },
  { value: "45+", label: "Team Members" },
  { value: "26", label: "Regions Served" },
  { value: "98%", label: "On-Time Completion" },
];

export const PARTNERS = [
  "Ministry of Works",
  "TARURA",
  "RUWASA",
  "PO-RALG",
  "TANROADS",
  "Rural Water Agency",
];
