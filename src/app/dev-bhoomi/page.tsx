import Image from "next/image";
import type { Metadata } from "next";
import { Suspense } from "react";
import { Header } from "@/components/Header";
import { ThemedLeadForm } from "@/components/college/ThemedLeadForm";
import { HomeLeadPopup } from "@/components/HomeLeadPopup";
import { PAGE_CONTACTS } from "@/lib/site";
import "./dbuu.css";

export const metadata: Metadata = {
  title: "Dev Bhoomi University Admission Counselling 2026 | admissiondesk",
  description:
    "Get free admission counselling for Dev Bhoomi Uttarakhand University (DBUU) — Uttarakhand's most affordable NAAC A+ university. Programme shortlisting, DBUU-CET guidance, scholarship support, and application assistance from admissiondesk.",
  alternates: { canonical: "/dev-bhoomi" },
};

const SUBNAV = [
  { label: "Overview", href: "#overview" },
  { label: "Admission Process", href: "#process" },
  { label: "Scholarship", href: "#scholarship" },
  { label: "DBUU-CET", href: "#dbuucet" },
  { label: "Programmes", href: "#programmes" },
  { label: "FAQs", href: "#faqs" },
  { label: "Apply Now", href: "#apply" },
];

const HIGHLIGHTS = [
  {
    title: "Most Affordable NAAC A+",
    note: "Fees starting at ₹75,000/yr — the lowest among all NAAC A+ universities in Uttarakhand.",
  },
  {
    title: "850+ Campus Recruiters",
    note: "Over 850 companies visited DBUU campus in 2025 for placement drives. Highest offer: ₹43 LPA.",
  },
  {
    title: "120+ Programmes",
    note: "UG, PG and Doctoral programmes across 12 schools including Engineering, Pharmacy, Law, Agriculture and more.",
  },
  {
    title: "Merit Scholarships",
    note: "Tuition fee waivers up to 100% awarded on 12th board merit — valid for the entire programme duration.",
  },
  {
    title: "Flexible Admissions",
    note: "DBUU-CET with multiple windows through the year. JEE Main, CUET, GATE, MAT and CAT scores accepted.",
  },
  {
    title: "Modern Campus",
    note: "42-acre campus in Dehradun with smart classrooms, research labs, separate hostels and sports facilities.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Choose Your Programme",
    body: "With 170+ programmes across Engineering, Pharmacy, Law, Management, Computer Applications, Agriculture and more, our counsellors help you match your aptitude, marks and career goal to the right course at DBUU.",
  },
  {
    n: "02",
    title: "Check Eligibility & Apply Online",
    body: "Each programme has defined eligibility based on qualifying exam marks. Fill the application form on this page — our team guides you through document requirements for 10th, 12th and any entrance scores.",
  },
  {
    n: "03",
    title: "Appear for DBUU-CET / Submit Score",
    body: "Most UG programmes admit via DBUU-CET (Dev Bhoomi Common Entrance Test), conducted in multiple windows. JEE Main, CUET, GATE, MAT and CAT scores are also accepted for relevant streams.",
  },
  {
    n: "04",
    title: "Counselling & Provisional Offer",
    body: "Shortlisted candidates receive a counselling call. The provisional offer letter along with fee structure and scholarship slab is issued within 48 hours of counselling completion.",
  },
];

const PROGRAM_GRID = [
  {
    head: "Engineering & Technology",
    items: [
      "B.Tech CSE",
      "B.Tech CSE (AI & ML)",
      "B.Tech CSE (Data Science)",
      "B.Tech ECE",
      "B.Tech Mechanical",
      "B.Tech Civil",
      "M.Tech CSE",
    ],
  },
  {
    head: "Pharmacy & Health Sciences",
    items: [
      "B.Pharm",
      "Pharm.D",
      "M.Pharm (Pharmaceutics)",
      "M.Pharm (Pharmacology)",
      "D.Pharm",
      "B.Sc Nursing",
      "BMLT",
    ],
  },
  {
    head: "Management & Commerce",
    items: [
      "BBA",
      "MBA",
      "MBA (Healthcare Management)",
      "B.Com (Hons.)",
      "M.Com",
    ],
  },
  {
    head: "Computer Applications & IT",
    items: [
      "BCA",
      "BCA (AI & Data Science)",
      "MCA",
      "B.Sc (IT)",
    ],
  },
  {
    head: "Law & Liberal Arts",
    items: [
      "BA LLB (Hons.) — 5 yr",
      "LLB — 3 yr",
      "BA (Hons.) English / Pol. Sc. / Eco.",
      "MA English / Education",
    ],
  },
  {
    head: "Agriculture & Life Sciences",
    items: [
      "B.Sc Agriculture",
      "B.Sc Horticulture",
      "B.V.Sc & Animal Husbandry",
      "B.Sc (Hons.) Maths / Physics / Chem.",
    ],
  },
];

const SCHOLARSHIP_TIERS = [
  { tier: "100% Tuition Waiver", criteria: "≥ 90% in 12th board / DBUU-CET top rankers" },
  { tier: "75% Tuition Waiver", criteria: "≥ 85% in 12th board" },
  { tier: "50% Tuition Waiver", criteria: "≥ 80% in 12th board" },
  { tier: "25% Tuition Waiver", criteria: "≥ 75% in 12th board / merit basis" },
];

const RECRUITERS = [
  "Wipro", "HCL", "Tech Mahindra", "Cognizant", "Capgemini",
  "Apollo", "Hero MotoCorp", "Berger Paints", "ICICI Bank", "Axis Bank",
  "Infosys", "TCS", "Deloitte", "HDFC Bank", "Sun Pharma",
];

const FAQS = [
  {
    q: "Is Dev Bhoomi Uttarakhand University recognised by UGC?",
    a: "Yes. DBUU is a UGC-recognised State Private University established under the Uttarakhand Universities Act 2017. It is NAAC A+ accredited, AICTE approved for technical programmes, PCI approved for pharmacy, and BCI approved for law.",
  },
  {
    q: "Who manages this counselling page?",
    a: "This page is managed by admissiondesk as an authorised counselling partner for DBUU. We guide students on programme selection, eligibility, DBUU-CET, scholarship slabs, and application steps. Final admission decisions rest with the university.",
  },
  {
    q: "What entrance exams are accepted at DBUU?",
    a: "DBUU-CET (Dev Bhoomi Common Entrance Test) is the primary entrance test, conducted in multiple windows through the year. JEE Main and CUET are accepted for B.Tech and UG programmes respectively; GATE for M.Tech; MAT and CAT for MBA. Some programmes admit on qualifying-exam merit.",
  },
  {
    q: "Is DBUU really the most affordable NAAC A+ university in Uttarakhand?",
    a: "Yes. DBUU's fee structure starts at ₹75,000/yr for several programmes — significantly lower than other NAAC A+ institutions in the state. With merit scholarships up to 100%, the effective cost can be further reduced.",
  },
  {
    q: "Are hostels available at DBUU?",
    a: "Yes — separate, secure hostels for boys and girls are available on or near campus, with mess facilities, laundry, 24×7 security, and medical support. Hostel allotment details are shared post fee confirmation.",
  },
];

const WHY_POINTS = [
  "Lowest fees among NAAC A+ universities in Uttarakhand",
  "Multiple intakes through the year — no missing out",
  "Strong pharmacy & law schools — rare combo at this price",
  "Agriculture & veterinary — unique programmes in Dehradun",
  "Active industry MoUs with IT and pharma majors",
  "DBUU-CET scholarships — exam your way to a fee waiver",
  "Separate boys & girls hostels, 24×7 security",
  "42-acre campus with modern labs and sports grounds",
];

const SCHOOLS = [
  "School of Engineering & Technology",
  "School of Pharmacy",
  "School of Law",
  "School of Management & Commerce",
  "School of Computer Science & IT",
  "School of Agriculture & Veterinary Sciences",
  "School of Liberal Arts & Humanities",
  "School of Education",
  "School of Architecture & Planning",
  "School of Paramedical & Allied Health",
  "School of Hotel Management & Tourism",
  "School of Media & Communication",
];

const ACCREDITATIONS = ["UGC Recognised", "NAAC A+", "AICTE Approved", "PCI Approved", "BCI Approved"];

const CET_DATES: [string, string][] = [
  ["Registration opens", "10 Jan 2026"],
  ["Window 1 test", "15 Feb 2026"],
  ["Window 2 test", "20 Mar 2026"],
  ["Window 3 test", "15 May 2026"],
  ["Window 4 test", "05 Jul 2026"],
  ["Counselling", "Rolling · within 14 days of test"],
];

const CET_POINTS = [
  "Multiple test windows — Jan, Mar, May and Jul 2026",
  "Online, 60-minute test — no travel required",
  "High score = higher scholarship slab at admission",
  "JEE Main, CUET, GATE, MAT, CAT accepted in lieu of DBUU-CET",
  "Direct merit admission also available for qualifying exam toppers",
];

export default function DevBhoomiPage() {
  return (
    <div className="dbuu-root">
      <Header
        phone={PAGE_CONTACTS.devBhoomi.phone}
        whatsapp={PAGE_CONTACTS.devBhoomi.whatsapp}
        applyLabel="Apply Now"
        navLinks={[]}
      />

      {/* ── Campus Hero — matches UU uu2-campus-hero structure ── */}
      <section className="dbuu-campus-hero" aria-label="Dev Bhoomi Uttarakhand University">
        <Image
          src="/colleges/dbuu/dbuu-campus copy.webp"
          alt="Dev Bhoomi Uttarakhand University campus, Dehradun"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
        />

        {/* Top-center: identity card + admissions badge */}
        <div className="dbuu-hero-identity">
          <div className="dbuu-hero-id-card">
            <Image
              src="/colleges/dbuu/dbuu-logo-png.webp"
              alt="Dev Bhoomi Uttarakhand University"
              width={180}
              height={56}
              style={{ width: "180px", height: "auto" }}
              className="dbuu-hero-id-logo"
            />
          </div>
          <div className="dbuu-hero-id-badge">
            <span className="dbuu-hero-id-dot" />
            Admissions Open 2026–27
          </div>
        </div>

        {/* Center: headline */}
        <div className="dbuu-campus-hero-center" aria-hidden>
          <h1 className="dbuu-campus-hero-headline">
            Uttarakhand&rsquo;s Most Affordable<br />
            <span>NAAC A+ University</span>
          </h1>
          <p className="dbuu-campus-hero-subline">
            UGC Recognised · AICTE Approved · Established 2004 · 120+ Programmes · Fees from ₹75K/yr
          </p>
        </div>

        {/* Bottom: stats + programme tags */}
        <div className="dbuu-campus-hero-footer" aria-hidden>
          <div className="dbuu-campus-hero-stats">
            <span>NAAC A+ <em>Accredited</em></span>
            <span className="dbuu-campus-hero-sep">·</span>
            <span>120+ Programmes</span>
            <span className="dbuu-campus-hero-sep">·</span>
            <span>12 Schools</span>
            <span className="dbuu-campus-hero-sep">·</span>
            <span>850+ Placement Companies</span>
            <span className="dbuu-campus-hero-sep">·</span>
            <span>22,000+ Alumni</span>
          </div>
          <div className="dbuu-campus-hero-tags">
            <span>Engineering</span>
            <span>Pharmacy</span>
            <span>Law</span>
            <span>Management</span>
            <span>Agriculture</span>
            <span>Computer Science</span>
            <span>Nursing</span>
          </div>
        </div>
      </section>

      {/* ── Apply / About ── */}
      <section id="apply" className="dbuu-section dbuu-section-form">
        <div className="dbuu-container">
          <div style={{ display: "grid", gap: "3rem", alignItems: "start" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", alignItems: "start" }}>
              {/* About column */}
              <div>
                <span className="dbuu-eyebrow">Free Counselling</span>
                <h2 className="dbuu-h2" style={{ marginTop: "0.75rem" }}>
                  About Dev Bhoomi Uttarakhand University
                </h2>
                <p className="dbuu-body" style={{ marginTop: "1.25rem" }}>
                  Dev Bhoomi Uttarakhand University (DBUU), Dehradun, is
                  Uttarakhand&apos;s most affordable NAAC A+ accredited private
                  university. With 120+ UG, PG and Doctoral programmes across 12
                  schools — Engineering, Pharmacy, Law, Management, Agriculture,
                  Computer Applications and more — DBUU offers exceptional academic
                  value at fees starting from just ₹75,000 per year.
                </p>
                <p className="dbuu-body" style={{ marginTop: "0.85rem" }}>
                  DBUU&apos;s latest placement season saw 850+ companies recruit
                  15,500+ students, with a highest package of ₹44.4 LPA and an
                  average of ₹6 LPA. Ranked #1 in Uttarakhand by Education World
                  2025-26 and 7th in North India by THE WEEK. Merit scholarships of
                  up to 100% make DBUU one of the most accessible quality
                  universities in North India.
                </p>

                <div className="dbuu-rankings">
                  <div className="dbuu-ranking">
                    <p className="dbuu-ranking-rank">A+</p>
                    <p className="dbuu-ranking-title">NAAC Grade</p>
                    <p className="dbuu-ranking-note">Score 3.22 · First Cycle</p>
                  </div>
                  <div className="dbuu-ranking">
                    <p className="dbuu-ranking-rank">2008</p>
                    <p className="dbuu-ranking-title">Established</p>
                    <p className="dbuu-ranking-note">15+ years of excellence</p>
                  </div>
                  <div className="dbuu-ranking">
                    <p className="dbuu-ranking-rank">80%+</p>
                    <p className="dbuu-ranking-title">Placement Rate</p>
                    <p className="dbuu-ranking-note">Consistent year-on-year</p>
                  </div>
                  <div className="dbuu-ranking">
                    <p className="dbuu-ranking-rank">12</p>
                    <p className="dbuu-ranking-title">Schools</p>
                    <p className="dbuu-ranking-note">120+ programmes offered</p>
                  </div>
                </div>

                <div className="dbuu-accred">
                  <p className="dbuu-accred-head">Recognitions & Approvals</p>
                  <div className="dbuu-accred-row">
                    {ACCREDITATIONS.map((r) => (
                      <span key={r} className="dbuu-accred-pill">{r}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Form column */}
              <div className="dbuu-form-card">
                <span className="dbuu-form-eyebrow">100% Free · No Obligation</span>
                <h3 className="dbuu-form-title">Talk to an Admissions Counsellor</h3>
                <Suspense fallback={null}>
                  <ThemedLeadForm
                    university="Dev Bhoomi Uttarakhand University"
                    buttonLabel="Submit Application"
                    successText="An admissiondesk counsellor will reach out within 24 hours with your DBUU eligibility, DBUU-CET guidance, scholarship slab and document checklist."
                    classes={{
                      form: "space-y-4",
                      field: "block",
                      label: "field-label",
                      select: "field-select",
                      button: "dbuu-submit-btn w-full py-3.5 text-base",
                      consent: "flex gap-3 items-start text-sm text-[color:var(--ink-soft)]",
                      error: "field-error",
                      success: "p-5 rounded-lg bg-[color:var(--cream)] border border-[color:var(--rule-soft)]",
                      successTitle: "font-semibold text-lg text-[color:var(--forest-deep)]",
                    }}
                  />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Subnav ── */}
      <nav className="dbuu-nav" aria-label="Page sections">
        <div className="dbuu-container" style={{ overflowX: "auto" }}>
          <div style={{ display: "flex", gap: "1.75rem", padding: "0.75rem 0", minWidth: "max-content" }}>
            {SUBNAV.map((s) => (
              <a key={s.href} href={s.href} style={{ fontSize: "0.9rem", fontWeight: 600, padding: "0.4rem 0", whiteSpace: "nowrap" }}>
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── Overview ── */}
      <section id="overview" className="dbuu-section">
        <div className="dbuu-container">
          <span className="dbuu-eyebrow">Why DBUU?</span>
          <h2 className="dbuu-h2" style={{ marginTop: "0.75rem" }}>
            Quality Education at Accessible Fees
          </h2>
          <p className="dbuu-body" style={{ marginTop: "1.25rem", maxWidth: "48rem" }}>
            At a time when quality higher education often comes with a steep price tag,
            Dev Bhoomi Uttarakhand University offers NAAC A+ accredited programmes
            across 12 schools — all at fees starting from ₹75,000 per year. Ranked
            #1 in Uttarakhand by Education World 2025-26, DBUU delivers the ideal
            balance of academic credibility, affordability, placement outcomes, and
            campus life for students from Uttarakhand and across North India.
          </p>

          <div className="dbuu-why-grid">
            {WHY_POINTS.map((point, i) => (
              <div key={point} className="dbuu-why-card">
                <span className="dbuu-why-num">{String(i + 1).padStart(2, "0")}</span>
                <p>{point}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "3rem" }}>
            <div className="dbuu-side-img" style={{ maxWidth: "100%" }}>
              <Image
                src="/colleges/dbuu/campus.jpg"
                alt="Dev Bhoomi Uttarakhand University campus"
                width={1200}
                height={600}
                className="dbuu-img-fill"
              />
            </div>
          </div>

          <div style={{ marginTop: "3rem" }}>
            <h3 className="dbuu-h2" style={{ marginBottom: "1.5rem" }}>Schools at DBUU</h3>
            <div className="dbuu-schools-grid">
              {SCHOOLS.map((s) => (
                <div key={s} className="dbuu-school-card">{s}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Highlights ── */}
      <section className="dbuu-section dbuu-section-cream">
        <div className="dbuu-container">
          <span className="dbuu-eyebrow dbuu-eyebrow-light">Key Highlights</span>
          <h2 className="dbuu-h2" style={{ marginTop: "0.75rem" }}>What Makes DBUU Stand Out</h2>
          <div style={{ marginTop: "2.5rem", display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: "1.25rem" }}>
            {HIGHLIGHTS.map((h) => (
              <div key={h.title} style={{ background: "#fff", borderRadius: "14px", padding: "1.6rem 1.5rem", borderLeft: "5px solid #c1272d", boxShadow: "0 4px 16px -8px rgba(12,39,74,0.08)" }}>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--dbuu-navy)", marginBottom: "0.6rem" }}>{h.title}</h3>
                <p style={{ fontSize: "0.93rem", lineHeight: 1.6, color: "var(--dbuu-text)" }}>{h.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Admission Process ── */}
      <section id="process" className="dbuu-section dbuu-section-navy">
        <div className="dbuu-container">
          <span className="dbuu-eyebrow dbuu-eyebrow-light">Step by Step</span>
          <h2 className="dbuu-h2 dbuu-h2-light" style={{ marginTop: "0.75rem" }}>
            Admission Process at DBUU
          </h2>
          <p className="dbuu-body" style={{ marginTop: "1rem", maxWidth: "42rem" }}>
            From choosing a programme to confirming your seat — most candidates
            complete the full process in 7–10 working days.
          </p>
          <div className="dbuu-steps">
            {STEPS.map((s) => (
              <div key={s.n} className="dbuu-step">
                <span className="dbuu-step-n">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Scholarship ── */}
      <section id="scholarship" className="dbuu-section dbuu-section-cream">
        <div className="dbuu-container">
          <span className="dbuu-eyebrow">Scholarship</span>
          <h2 className="dbuu-h2" style={{ marginTop: "0.75rem" }}>Merit Scholarships at DBUU</h2>
          <p className="dbuu-body" style={{ marginTop: "1rem", maxWidth: "42rem" }}>
            DBUU awards merit-based tuition fee waivers at the time of admission.
            Scholarships continue for the full programme duration, subject to
            maintaining the minimum CGPA threshold each year.
          </p>
          <div style={{ marginTop: "2rem", borderRadius: "14px", overflow: "hidden", border: "1px solid #e2e8f0" }}>
            {SCHOLARSHIP_TIERS.map((s, i) => (
              <div
                key={s.tier}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  padding: "1.1rem 1.5rem",
                  background: i % 2 === 0 ? "#fff" : "#f8f5ef",
                  borderBottom: i < SCHOLARSHIP_TIERS.length - 1 ? "1px solid #e2e8f0" : "none",
                }}
              >
                <span style={{ fontWeight: 800, fontSize: "1.05rem", color: "#c1272d" }}>{s.tier}</span>
                <span style={{ fontSize: "0.95rem", color: "#0c274a", fontWeight: 600 }}>{s.criteria}</span>
              </div>
            ))}
          </div>
          <p style={{ marginTop: "1rem", fontSize: "0.85rem", color: "var(--dbuu-muted)" }}>
            Additional scholarships for single girl child · Defence personnel children · Sports excellence · Alumni wards. Full details shared during counselling.
          </p>
        </div>
      </section>

      {/* ── DBUU-CET ── */}
      <section id="dbuucet" className="dbuu-section">
        <div className="dbuu-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2.5rem" }}>
            <div>
              <span className="dbuu-eyebrow">Entrance Test</span>
              <h2 className="dbuu-h2" style={{ marginTop: "0.75rem" }}>DBUU-CET 2026</h2>
              <p className="dbuu-body" style={{ marginTop: "1.25rem" }}>
                The Dev Bhoomi Common Entrance Test (DBUU-CET) is the university&apos;s
                own online aptitude test, conducted in multiple windows through 2026.
                High DBUU-CET scores directly unlock higher merit scholarship slabs —
                the exam is your opportunity to reduce your fee substantially.
              </p>
              <ul style={{ marginTop: "1.25rem", listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {CET_POINTS.map((item) => (
                  <li key={item} style={{ fontSize: "0.95rem", color: "var(--dbuu-text)", paddingLeft: "1.5rem", position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: "#c1272d", fontWeight: 700 }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: "#0c274a", borderRadius: "14px", padding: "2rem", color: "#fff" }}>
              <p style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.18em", color: "#ffc107", fontWeight: 800, marginBottom: "1.2rem" }}>
                DBUU-CET — Important Dates 2026
              </p>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {CET_DATES.map(([label, date]) => (
                  <li key={label} style={{ display: "flex", justifyContent: "space-between", padding: "0.75rem 0", borderBottom: "1px solid rgba(255,255,255,0.1)", fontSize: "0.92rem" }}>
                    <span style={{ color: "rgba(255,255,255,0.75)" }}>{label}</span>
                    <span style={{ fontWeight: 700, color: "#fff" }}>{date}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Programmes ── */}
      <section id="programmes" className="dbuu-section dbuu-section-cream">
        <div className="dbuu-container">
          <div style={{ position: "relative", borderRadius: "16px", overflow: "hidden", height: "200px", marginBottom: "2.5rem" }}>
            <Image
              src="/colleges/dbuu/students.jpg"
              alt="Students at Dev Bhoomi Uttarakhand University"
              fill
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg,rgba(12,39,74,0.9) 0%,rgba(12,39,74,0.6) 60%,transparent 100%)", display: "flex", alignItems: "center", padding: "2rem" }}>
              <div>
                <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.16em", color: "#ffc107", fontWeight: 800 }}>170+ Programmes · 17 Streams</p>
                <h3 style={{ fontSize: "clamp(1.2rem,3vw,2rem)", fontWeight: 800, color: "#fff", marginTop: "0.4rem", lineHeight: 1.15 }}>Engineering · Pharmacy · Law · Management · Agriculture · and more</h3>
              </div>
            </div>
          </div>

          <span className="dbuu-eyebrow">Academics</span>
          <h2 className="dbuu-h2" style={{ marginTop: "0.75rem" }}>Programmes at Dev Bhoomi University</h2>
          <p className="dbuu-body" style={{ marginTop: "0.75rem", maxWidth: "42rem" }}>
            120+ UG, PG and Doctoral programmes across 12 schools. Our counsellors
            help you compare curricula, fees and placement records for each.
          </p>
          <div className="dbuu-program-tabs">
            {PROGRAM_GRID.map((g) => (
              <article key={g.head}>
                <h3 className="dbuu-program-head">{g.head}</h3>
                <ul>
                  {g.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Placements ── */}
      <section className="dbuu-section">
        <div className="dbuu-container">
          <span className="dbuu-eyebrow">Placements</span>
          <h2 className="dbuu-h2" style={{ marginTop: "0.75rem" }}>Placements at Dev Bhoomi University</h2>
          <p className="dbuu-body" style={{ marginTop: "0.75rem", maxWidth: "42rem" }}>
            DBUU&apos;s latest placement season saw 850+ companies recruit
            <strong> 15,500+ students</strong> campus-wide, with a highest package
            of <strong>₹44.4 LPA</strong> and a consistent 80%+ overall placement rate.
          </p>

          <div className="dbuu-place-stats">
            <div>
              <p className="dbuu-place-stat">₹44.4 LPA</p>
              <p>Highest Package</p>
            </div>
            <div>
              <p className="dbuu-place-stat">₹6 LPA</p>
              <p>Average Package</p>
            </div>
            <div>
              <p className="dbuu-place-stat">15,500+</p>
              <p>Placement Offers</p>
            </div>
            <div>
              <p className="dbuu-place-stat">850+</p>
              <p>Recruiting Companies</p>
            </div>
          </div>

          <div className="dbuu-recruiters">
            {RECRUITERS.map((r) => (
              <span key={r}>{r}</span>
            ))}
          </div>

          <div style={{ marginTop: "2.5rem", position: "relative", borderRadius: "14px", overflow: "hidden", height: "200px" }}>
            <Image
              src="/colleges/dbuu/group.jpg"
              alt="DBUU students on campus"
              fill
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center 50%" }}
            />
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section id="faqs" className="dbuu-section dbuu-section-cream">
        <div className="dbuu-container">
          <span className="dbuu-eyebrow">FAQs</span>
          <h2 className="dbuu-h2" style={{ marginTop: "0.75rem" }}>Frequently Asked Questions</h2>
          <div className="dbuu-faqs">
            {FAQS.map((f) => (
              <details key={f.q} className="dbuu-faq">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="dbuu-footer">
        <div className="dbuu-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2.5rem" }}>
            <div>
              <p className="dbuu-footer-name">admissiondesk</p>
              <p className="dbuu-footer-tag">AUTHORISED COUNSELLING PARTNER · DEV BHOOMI UTTARAKHAND UNIVERSITY · 2026–27</p>
              <p className="dbuu-footer-line" style={{ marginTop: "1rem" }}>
                admissiondesk is an authorised counselling partner for Dev Bhoomi
                Uttarakhand University, Dehradun. Students who connect through
                admissiondesk receive direct admission support, DBUU-CET guidance,
                scholarship slab information, and zero-cost counselling.
              </p>
            </div>
            <div>
              <p className="dbuu-footer-head">Speak to a Counsellor</p>
              <p className="dbuu-footer-line" style={{ marginTop: "0.75rem" }}>
                <a href={`tel:${PAGE_CONTACTS.devBhoomi.phone.replace(/\s/g, "")}`}>
                  {PAGE_CONTACTS.devBhoomi.phone}
                </a>
              </p>
              <p className="dbuu-footer-line">
                <a href="mailto:support@admissiondesk.info">support@admissiondesk.info</a>
              </p>
            </div>
          </div>
          <div className="dbuu-footer-bar">
            <p>
              © {new Date().getFullYear()} admissiondesk — Authorised Counselling Partner for Dev Bhoomi Uttarakhand University. This counselling page is operated by admissiondesk, not by the university.
            </p>
            <p>DBUU: NAAC A+ · UGC Recognised · State Private University, Uttarakhand</p>
          </div>
        </div>
      </footer>

      <HomeLeadPopup university="Dev Bhoomi Uttarakhand University" />
    </div>
  );
}
