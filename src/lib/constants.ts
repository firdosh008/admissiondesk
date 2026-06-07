export type College = {
  slug: string;
  name: string;
  shortName: string;
  city: string;
  established: string;
  accreditation: string;
  feesRange: string;
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
    feesRange: "₹3L–₹5L/yr",
    highestPackage: "₹52 LPA",
    averagePackage: "₹9 LPA",
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
      "Fees ₹3L–₹5L/yr · merit scholarships up to 100% available",
      "92% placement rate · avg ₹9 LPA · 2,444 students placed in 2025 across 800+ companies",
      "NAAC A · India's only energy-sector-focused university · NIRF top-100",
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
    name: "Graphic Era (Hill University , Deemed-to-be-University)",
    shortName: "Graphic Era",
    city: "Dehradun",
    established: "1993",
    accreditation: "NAAC A+ · UGC Deemed University",
    feesRange: "₹3L–₹4.4L/yr",
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
      "Fees ₹3L–₹4.4L/yr · merit waivers and category scholarships available",
      "5,700+ placement offers in 2025 · avg ₹23.26 LPA for CSE batch",
      "NAAC A+ · NIRF rank 48 · 7 NBA-accredited programmes · Google, Adobe on campus",
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
    feesRange: "₹1.5L–₹2.7L/yr",
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
      "Fees ₹1.5L–₹2.7L/yr · 30+ scholarship slabs including merit waivers",
      "80%+ placement rate · 2,356+ students placed in 2025 · 750+ companies",
      "NAAC A+ (first cycle) · 143 programmes across 12 schools · AI/ML, Law, Pharmacy & more",
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
    accreditation: "UGC Recognised",
    feesRange: "₹75K–₹1.65L/yr",
    highestPackage: "₹43 LPA",
    averagePackage: "₹6 LPA",
    placementRate: "80%+",
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
      "Fees ₹75K–₹1.65L/yr — among the most affordable private universities in Uttarakhand",
      "80%+ placement · avg ₹6 LPA · 850+ companies visited campus in 2025",
      "170 programmes across 17 streams · multiple intakes · DBUU-CET flexible windows",
    ],
    flagshipPrograms: ["B.Tech CSE", "B.Pharm · Pharm.D", "MBA · BBA", "BCA"],
    monogram: "DB",
  },
];

export const VISIBLE_COLLEGES = COLLEGES.filter((college) =>
  ["uttaranchal-university", "graphic-era"].includes(college.slug)
);

export type CollegeStat = { desc: string; feesRange: string; avgPackage: string; placement: string; naac: string };

export const COUNSELLING_COLLEGE_INFO: Record<string, CollegeStat> = {
  "Uttaranchal University":                  { desc: "NAAC A+ university, first in Uttarakhand to earn it in the very first accreditation cycle.",         feesRange: "₹1.5L–₹2.7L/yr",  avgPackage: "₹4.9 LPA",          placement: "80%+", naac: "A+" },
  "Graphic Era (Deemed to be University)":   { desc: "NIRF rank 48 deemed university with 30+ years of engineering excellence and global industry tie-ups.", feesRange: "₹3L–₹4.4L/yr",    avgPackage: "₹23.26 LPA (CSE)",  placement: "85%+", naac: "A+" },
  "Graphic Era Hill University":             { desc: "Sister campus of Graphic Era, spread across Dehradun, Bhimtal & Clement Town with 80+ programmes.",    feesRange: "₹2L–₹4.3L/yr",    avgPackage: "₹6–8 LPA",          placement: "75%+", naac: "A+" },
  "UPES Dehradun":                           { desc: "India's only energy-sector university, ranked 9th in QS Asia and top-100 by NIRF in Engineering.",     feesRange: "₹3L–₹5L/yr",      avgPackage: "₹9 LPA",            placement: "92%",  naac: "A"  },
  "DIT University":                          { desc: "One of Uttarakhand's oldest private engineering institutions (est. 1998), highest placement ₹58 LPA.",  feesRange: "₹2.1L–₹2.4L/yr",  avgPackage: "₹6–8 LPA",          placement: "69%+", naac: "A"  },
  "IMS Unison University":                   { desc: "Known for media, management and law; 204 companies visited campus in 2025 with 95% placement claims.",  feesRange: "₹1.68L–₹4L/yr",   avgPackage: "₹5.86 LPA",         placement: "95%",  naac: "A"  },
  "Dev Bhoomi Uttarakhand University":       { desc: "One of the most affordable private universities in Uttarakhand, with 850+ campus recruiters and strong IT linkages.", feesRange: "₹75K–₹1.65L/yr",  avgPackage: "₹6 LPA",            placement: "80%+", naac: "—"  },
  "Doon University":                         { desc: "State university with very affordable fees, focused on liberal arts, science and social sciences.",       feesRange: "₹25K–₹50K/yr",    avgPackage: "₹3.5 LPA",          placement: "65%+", naac: "B+" },
"Doon Business School":                    { desc: "AMBA-accredited business school, now a full university; strong MBA/PGDM with avg ₹8.15 LPA placements.", feesRange: "₹1.8L–₹2.65L/yr", avgPackage: "₹8.15 LPA",         placement: "80%+", naac: "A+" },
  "SGRR University":                         { desc: "Backed by Shri Mahant Indiresh Hospital trust; excellent for medical, paramedical and clinical training.", feesRange: "₹60K–₹1.1L/yr",   avgPackage: "₹4–6 LPA",          placement: "75%",  naac: "A"  },
  "Shivalik College":                        { desc: "Affordable Dehradun college offering engineering and management programmes with campus placement support.", feesRange: "₹40K–₹75K/yr",    avgPackage: "₹2.8 LPA",          placement: "60%+", naac: "B"  },
  "Tula's Institute":                        { desc: "AICTE-approved private engineering college with active industry collaborations and multi-discipline programmes.", feesRange: "₹75K–₹1.2L/yr",  avgPackage: "₹3.5 LPA",         placement: "65%+", naac: "B+" },
  "Himalayan Institute of Technology":       { desc: "Technical institute serving hill-region students with B.Tech and diploma programmes at accessible fees.",  feesRange: "₹70K–₹1.1L/yr",   avgPackage: "₹3 LPA",            placement: "62%+", naac: "B"  },
  "Government Doon Medical College":         { desc: "State-run medical college offering MBBS and allied health programmes with attached hospital training.",    feesRange: "Govt. rates",      avgPackage: "Clinical",          placement: "~85%", naac: "—"  },
  "Institute of Hotel Management, Dehradun": { desc: "NCHMCT-affiliated IHM offering hospitality management programmes with strong industry internship placement.", feesRange: "₹1L–₹1.8L/yr",   avgPackage: "₹4 LPA",            placement: "78%+", naac: "—"  },
};

export const DEHRADUN_COUNSELLING_COLLEGES = [
  "Uttaranchal University",
  "Graphic Era (Deemed to be University)",
  "Graphic Era Hill University",
  "UPES Dehradun",
  "DIT University",
  "IMS Unison University",
  "Dev Bhoomi Uttarakhand University",
  "Doon University",
  "Doon Business School",
  "SGRR University",
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
    a: "We are an independent education consultancy and not affiliated with any college or university. We are not owned by, or a part of, any university listed on this site.",
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

export type Testimonial = {
  quote: string;
  name: string;
  city: string;
  program: string;
  university: string;
  outcome: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "I was confused between 4 colleges and 3 streams. My counsellor laid out fees, placements, and scholarship options for each one on a single call. I picked Graphic Era CSE and got a merit waiver I didn't even know existed.",
    name: "Rohit Sharma",
    city: "Lucknow",
    program: "B.Tech CSE",
    university: "Graphic Era",
    outcome: "Secured ₹40K merit waiver",
  },
  {
    quote: "I'm the first in my family to go to college. The counsellor spoke to my father in Hindi, explained everything — fees, hostel, safety, placement records. No pressure, just facts. We decided together.",
    name: "Priya Mehta",
    city: "Delhi",
    program: "BBA",
    university: "Uttaranchal University",
    outcome: "First-gen student, full support",
  },
  {
    quote: "I had 58% in 12th and thought good colleges wouldn't take me. My counsellor showed me accredited programmes that fit my profile, helped with the application, and I got in within 10 days.",
    name: "Imran Javed",
    city: "Haldwani",
    program: "B.Pharm",
    university: "Graphic Era",
    outcome: "Admitted in 10 days",
  },
  {
    quote: "The scholarship mapping alone saved us ₹1.2L across 4 years. Every category slab, every merit waiver — things we would have missed if we'd applied directly.",
    name: "Mansi Agarwal",
    city: "Roorkee",
    program: "B.Tech AI & ML",
    university: "Uttaranchal University",
    outcome: "₹1.2L scholarship saved",
  },
  {
    quote: "I was working a part-time job and couldn't visit campuses. My counsellor did video walkthroughs of hostels, labs, and libraries on WhatsApp. I chose without ever stepping foot in Dehradun.",
    name: "Sunil Bisht",
    city: "Almora",
    program: "BCA",
    university: "Graphic Era",
    outcome: "Remote counselling, full admit",
  },
  {
    quote: "Everyone in my family wanted me to do B.Tech but I wanted design. The counsellor showed my parents placement data for B.Des graduates and they finally agreed. Best decision ever.",
    name: "Ananya Rawat",
    city: "Haridwar",
    program: "B.Des",
    university: "Uttaranchal University",
    outcome: "Pursued passion, parents convinced",
  },
];

export const PARTNER_LOGOS = [
  { name: "Uttaranchal University", short: "UU" },
  { name: "Graphic Era University", short: "GEU" },
  { name: "UPES Dehradun", short: "UPES" },
  { name: "Dev Bhoomi University", short: "DBUU" },
  { name: "DIT University", short: "DIT" },
  { name: "IMS Unison University", short: "IMS" },
];
