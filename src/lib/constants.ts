export type College = {
  slug: string;
  name: string;
  shortName: string;
  city: string;
  established: string;
  accreditation: string;
  highestPackage: string;
  averagePackage?: string;
  placementRate?: string;
  programs: number;
  schools?: number;
  url: string;
  topRecruiters: string[];
  highlights: string[];
  flagshipPrograms: string[];
  monogram: string;
};

export const COLLEGES: College[] = [
  {
    slug: "upes",
    name: "University of Petroleum & Energy Studies",
    shortName: "UPES",
    city: "Dehradun",
    established: "2003",
    accreditation: "NAAC A · UGC Recognised",
    highestPackage: "₹52 LPA",
    placementRate: "92%",
    programs: 121,
    schools: 8,
    url: "https://www.upes.ac.in/",
    topRecruiters: [
      "Amazon",
      "Microsoft",
      "Deloitte",
      "Accenture",
      "ONGC",
      "Boeing",
      "Siemens",
      "Hyundai",
      "Adani",
      "Maruti Suzuki",
    ],
    highlights: [
      "8 schools — Engineering, CS, Business, Law, Health, Design, Media, Liberal Studies",
      "2,444 students placed in 2025 across 800 visiting companies",
      "Industry-integrated curriculum with global immersion options",
    ],
    flagshipPrograms: [
      "B.Tech Computer Science",
      "BBA · MBA",
      "BA LLB",
    ],
    monogram: "UPES",
  },
  {
    slug: "graphic-era",
    name: "Graphic Era (Deemed-to-be-University)",
    shortName: "Graphic Era",
    city: "Dehradun",
    established: "1993",
    accreditation: "NAAC A+ · UGC Deemed University",
    highestPackage: "₹61.99 LPA",
    averagePackage: "₹23.26 LPA (CSE)",
    programs: 85,
    url: "https://geu.ac.in/",
    topRecruiters: [
      "Google",
      "Adobe",
      "Amazon",
      "Morgan Stanley",
      "Goldman Sachs",
      "Flipkart",
      "SAP",
      "Infosys",
      "TCS",
      "Wipro",
    ],
    highlights: [
      "5,700+ placement offers in 2025 from 444+ recruiters",
      "85+ UG, PG and doctoral programmes",
      "Strong engineering, management and applied sciences ecosystem",
    ],
    flagshipPrograms: ["B.Tech CSE", "MBA", "BCA · MCA", "B.Pharm"],
    monogram: "GE",
  },
  {
    slug: "uttaranchal-university",
    name: "Uttaranchal University",
    shortName: "Uttaranchal University",
    city: "Dehradun",
    established: "2013",
    accreditation: "NAAC A+ · UGC Recognised",
    highestPackage: "₹1.5 Cr",
    averagePackage: "₹4.9 LPA",
    placementRate: "80%+",
    programs: 143,
    schools: 12,
    url: "https://uttaranchaluniversity.ac.in/",
    topRecruiters: [
      "Google",
      "Amazon",
      "Accenture",
      "Wipro",
      "Cognizant",
      "HCL",
      "TCS",
      "Tech Mahindra",
      "Capgemini",
      "Infosys",
    ],
    highlights: [
      "12 streams · 143 programmes including AI/ML, Cybersecurity, Cloud",
      "NAAC A+ accreditation — among Uttarakhand's highest",
      "Approved by UGC, AICTE, BCI, PCI and other regulators",
    ],
    flagshipPrograms: ["B.Tech CSE (AI/ML)", "BBA · MBA", "BA LLB", "B.Pharm"],
    monogram: "UU",
  },
  {
    slug: "dev-bhoomi",
    name: "Dev Bhoomi Uttarakhand University",
    shortName: "Dev Bhoomi",
    city: "Dehradun",
    established: "2008",
    accreditation: "UGC Recognised · State Private University",
    highestPackage: "₹24 LPA",
    programs: 170,
    schools: 10,
    url: "https://www.dbuu.ac.in/",
    topRecruiters: [
      "Wipro",
      "HCL",
      "Tech Mahindra",
      "Cognizant",
      "Capgemini",
      "Apollo",
      "Hero MotoCorp",
      "Berger Paints",
      "ICICI",
      "Axis Bank",
    ],
    highlights: [
      "170 programmes across 17 streams — UG, PG, Diploma & PhD",
      "Industry-aligned curriculum with strong applied focus",
      "Multiple intakes and DBUU-CET — flexible for late applicants",
    ],
    flagshipPrograms: ["B.Tech CSE", "B.Pharm · Pharm.D", "MBA · BBA", "BCA"],
    monogram: "DB",
  },
];

export const VISIBLE_COLLEGES = COLLEGES.filter((college) =>
  ["uttaranchal-university", "graphic-era"].includes(college.slug)
);

export const DEHRADUN_COUNSELLING_COLLEGES = [
  "Uttaranchal University",
  "Graphic Era (Deemed to be University)",
  "Graphic Era Hill University",
  "UPES Dehradun",
  "DIT University",
  "IMS Unison University",
  "Dev Bhoomi Uttarakhand University",
  "Doon University",
  "ICFAI University Dehradun",
  "Doon Business School",
  "Shivalik College",
  "Tula's Institute",
  "Himalayan Institute of Technology",
  "Government Doon Medical College",
  "Institute of Hotel Management, Dehradun",
];

export type ProgramFamily = {
  slug: string;
  title: string;
  description: string;
  durations: string;
  examples: string[];
};

export const PROGRAMS: ProgramFamily[] = [
  {
    slug: "engineering",
    title: "Engineering & Technology",
    description:
      "B.Tech and M.Tech in CSE, AI/ML, Cybersecurity, Cloud, Mechanical and Civil across active counselling pages.",
    durations: "4 yrs · 2 yrs",
    examples: ["B.Tech CSE", "B.Tech AI/ML", "M.Tech Cyber Security"],
  },
  {
    slug: "management",
    title: "Management & Commerce",
    description:
      "BBA, MBA and integrated commerce programmes with specialisations in Finance, Marketing, HR and Business Analytics.",
    durations: "3 yrs · 2 yrs",
    examples: ["BBA", "MBA (Finance)", "B.Com (Hons.)"],
  },
  {
    slug: "computer-applications",
    title: "Computer Applications",
    description:
      "BCA and MCA tracks with electives in Data Science, Full-Stack Development and Cloud Engineering.",
    durations: "3 yrs · 2 yrs",
    examples: ["BCA", "MCA", "BCA Data Science"],
  },
  {
    slug: "law",
    title: "Law",
    description:
      "Five-year integrated BA LLB and BBA LLB, plus LLM specialisations approved by the Bar Council of India.",
    durations: "5 yrs · 1 yr",
    examples: ["BA LLB", "BBA LLB", "LLM"],
  },
  {
    slug: "pharmacy-health",
    title: "Pharmacy & Health Sciences",
    description:
      "PCI-approved B.Pharm, Pharm.D, M.Pharm, plus BPT, B.Sc Nursing and allied paramedical streams.",
    durations: "4 yrs · 6 yrs",
    examples: ["B.Pharm", "Pharm.D", "B.Sc Nursing"],
  },
  {
    slug: "design-media",
    title: "Design, Media & Liberal Studies",
    description:
      "B.Des, BA Journalism, BA Liberal Arts and Mass Communication — programmes built for India's creative economy.",
    durations: "3-4 yrs",
    examples: ["B.Des", "BA Journalism", "BA Liberal Arts"],
  },
];

export const STATS = [
  { value: "₹61.99 L", label: "Highest package across partner campuses (2025)" },
  { value: "800+", label: "Recruiters visited partner universities last year" },
  { value: "92%", label: "Placement rate at flagship programmes" },
  { value: "200+", label: "Programmes across active counselling pages" },
];

export const TOP_RECRUITERS = [
  "Google",
  "Amazon",
  "Microsoft",
  "Adobe",
  "Goldman Sachs",
  "Morgan Stanley",
  "Deloitte",
  "Accenture",
  "TCS",
  "Infosys",
  "Wipro",
  "ONGC",
  "Boeing",
  "Siemens",
  "Hyundai",
  "PwC",
  "EY",
  "KPMG",
  "Maruti Suzuki",
  "HCL",
];

export type Step = {
  number: string;
  title: string;
  description: string;
  duration: string;
};

export const PROCESS: Step[] = [
  {
    number: "01",
    title: "Share your details",
    description:
      "Tell us your scores, interests and any constraints — budget, location, family preferences. Two minutes, one form.",
    duration: "2 min",
  },
  {
    number: "02",
    title: "1-on-1 counselling",
    description:
      "A senior counsellor walks you through active university pages, programme fit, fees, scholarships and career outcomes.",
    duration: "30 min call",
  },
  {
    number: "03",
    title: "Shortlist & apply",
    description:
      "We help you shortlist 2-3 programmes that genuinely fit you and guide every step of the application — forms, documents, interview prep.",
    duration: "1-2 weeks",
  },
  {
    number: "04",
    title: "Admit, scholarship, onboarding",
    description:
      "We negotiate the best scholarship slab you qualify for and stay with you through fee deposit, hostel allotment and orientation.",
    duration: "Until day-zero",
  },
];

export const FAQS = [
  {
    q: "Is the counselling actually free for students?",
    a: "Yes — students pay nothing. admissiondesk is compensated directly by partner institutions once a candidate enrols. There are no hidden charges, success fees, or paywalls during the counselling itself.",
  },
  {
    q: "Are you affiliated with these universities?",
    a: "We are an independent admission-counselling partner working with active partner institutions under formal arrangements. We are not owned by, or a part of, any university listed on this site.",
  },
  {
    q: "What kind of programmes can you help me with?",
    a: "Engineering & Technology, Management (BBA/MBA), Computer Applications (BCA/MCA), Law, Pharmacy & Allied Health, Design, Media and Liberal Arts — across UG, PG and Diploma levels.",
  },
  {
    q: "What are the placement records of these universities?",
    a: "Highest packages reported in 2025 include Graphic Era ₹61.99 LPA and Uttaranchal University ₹1.5 Cr highest with 80%+ placement. Outcomes vary by programme and individual candidate.",
  },
  {
    q: "Can you help with scholarships and merit waivers?",
    a: "Yes. Each partner university offers merit and category-based scholarships; our counsellors map your eligibility to every relevant slab so you don't leave money on the table.",
  },
  {
    q: "I don't have an entrance score yet. Can I still apply?",
    a: "Many programmes accept JEE Main, CAT, MAT, CUET, CLAT or 12th marks. A few have university-specific tests (e.g. DBUU-CET) with multiple windows. Tell us your situation and we'll map a path that works.",
  },
  {
    q: "How long does the full admission process take?",
    a: "From the first counselling call to a confirmed seat, most students wrap up in 2-4 weeks. Last-mile applicants close in days when seats are still open.",
  },
  {
    q: "What if I'm not sure which programme or city is right for me?",
    a: "That's exactly when counselling helps most. We discuss your career goals, budget and lifestyle, then narrow active university pages and dozens of programmes down to the options that genuinely fit you.",
  },
];

export const ADMITS = [
  { initials: "R.S.", city: "Lucknow", program: "MBA Finance", university: "Graphic Era" },
  { initials: "P.M.", city: "Delhi", program: "BBA", university: "Uttaranchal" },
  { initials: "I.J.", city: "Haldwani", program: "B.Pharm", university: "Graphic Era" },
  { initials: "M.A.", city: "Roorkee", program: "B.Tech AI/ML", university: "Uttaranchal" },
];
