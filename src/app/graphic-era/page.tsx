
/* ─────────────────────────────────────────────────────────────────────────
   Graphic Era landing page — temporarily disabled. Re-enable when needed
   by removing the redirect above and unwrapping the comment block.
   ────────────────────────────────────────────────────────────────────── */

import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Suspense } from "react";
import { Header } from "@/components/Header";
import { ThemedLeadForm } from "@/components/college/ThemedLeadForm";
import { HomeLeadPopup } from "@/components/HomeLeadPopup";
import { ADMISSION_DECISION_DISCLAIMER, CTA_BOOK_COUNSELLING, INDEPENDENCE_DISCLAIMER, PAGE_CONTACTS, SITE } from "@/lib/site";
import "./geu.css";

export const metadata: Metadata = {
  title: "Graphic Era Admission Counselling 2026 | admissiondesk",
  description:
    "Get free admission counselling for Graphic Era (Deemed-to-be University) and Graphic Era Hill University — programme shortlisting, GECET guidance, scholarship support, and application assistance from admissiondesk.",
  alternates: { canonical: "/graphic-era" },
};

const SUBNAV = [
  { label: "Overview", href: "#overview" },
  { label: "Admission Process", href: "#process" },
  { label: "Scholarship", href: "#scholarship" },
  { label: "GECET", href: "#gecet" },
  { label: "Programmes", href: "#programmes" },
  { label: "FAQs", href: "#faqs" },
  { label: "Submit Now", href: "#apply" },
];

const HIGHLIGHTS = [
  {
    title: "Top Placements",
    note: "Consistently high placements at top MNCs like Amazon, Adobe, Microsoft and Google.",
  },
  {
    title: "Merit-Based Scholarships",
    note: "Merit scholarships in all courses for the entire duration of the course.",
  },
  {
    title: "Additional Scholarships",
    note: "10% additional scholarship for siblings, alumni wards and defence personnel children.",
  },
  {
    title: "Global Exchange",
    note: "Active student exchange tie-ups with universities in the US, UK, Germany and Singapore.",
  },
  {
    title: "85+ Programmes",
    note: "UG, PG and Doctoral programmes across Engineering, Management, Sciences and Humanities.",
  },
  {
    title: "Industry-Aligned Curriculum",
    note: "Curriculum reviewed annually with industry experts. Capstone projects and live internships.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Choose your Course of Interest",
    body: "This is the most important step of your application process since there are more than 85 programmes to choose from at UG, PG and PhD level. Considering your core skills, aptitude, passion and career goals, talk to our counsellor and choose the right programme.",
  },
  {
    n: "02",
    title: "Check Eligibility & Get Guidance",
    body: "Each programme has a defined eligibility criterion based on the qualifying examination. Fill the application form on this page — you will be guided through the upload of your 10th, 12th and qualifying-exam mark sheets.",
  },
  {
    n: "03",
    title: "Appear for GECET / Submit Score",
    body: "Most undergraduate engineering programmes require GECET (Graphic Era Common Entrance Test) — a 90-minute online test. JEE Main, CUET, GATE, MAT and CAT scores are also accepted for relevant programmes.",
  },
  {
    n: "04",
    title: "Counselling & Provisional Offer",
    body: "Shortlisted candidates are invited for counselling. The provisional offer letter is sent within 48 hours of counselling along with the fee schedule and scholarship slab.",
  },
  {
    n: "05",
    title: "Pay Fee & Confirm Seat",
    body: "Pay the first-instalment tuition fee online to confirm your seat. Hostel allotment and orientation schedule are shared once the fee is received.",
  },
];

const PROGRAM_GRID = [
  {
    head: "Engineering & Technology",
    items: [
      "B.Tech CSE",
      "B.Tech CSE (AI/ML)",
      "B.Tech CSE (Data Science)",
      "B.Tech ECE",
      "B.Tech Mechanical",
      "B.Tech Civil",
      "M.Tech CSE / VLSI",
    ],
  },
  {
    head: "Management & Commerce",
    items: ["BBA", "BBA (Hons.)", "B.Com (Hons.)", "MBA", "MBA Analytics"],
  },
  {
    head: "Computer Applications",
    items: ["BCA", "BCA AI", "MCA", "MCA Cloud Computing"],
  },
  {
    head: "Pharmacy & Health",
    items: [
      "B.Pharm",
      "M.Pharm (Pharmaceutics / Pharmacology)",
      "B.Sc. Nursing",
      "BPT",
    ],
  },
  {
    head: "Sciences & Humanities",
    items: [
      "B.Sc. (Hons.) Maths / Physics / Chem.",
      "BA Eng. / Pol. Sc. / Eco. (Hons.)",
      "M.Sc. Maths / Physics / Chem.",
      "MA English / Eco.",
    ],
  },
  {
    head: "Hospitality & Food Tech",
    items: [
      "BHMCT (Hotel Management)",
      "B.Sc. Hospitality",
      "B.Tech Food Tech.",
      "M.Tech Food Tech.",
    ],
  },
];

const SCHOLARSHIP_TIERS = [
  { tier: "100% Tuition Waiver", criteria: "≥ 95% in 12th board / GECET top 100" },
  { tier: "75% Tuition Waiver", criteria: "≥ 90% in 12th board / GECET top 500" },
  { tier: "50% Tuition Waiver", criteria: "≥ 85% in 12th board / GECET top 1000" },
  { tier: "25% Tuition Waiver", criteria: "≥ 80% in 12th board / merit basis" },
];

const PLACEMENT_LOGOS = [
  "Google",
  "Adobe",
  "Amazon",
  "Microsoft",
  "Morgan Stanley",
  "Goldman Sachs",
  "Flipkart",
  "SAP",
  "Infosys",
  "TCS",
  "Wipro",
  "Deloitte",
];

const FAQS = [
  {
    q: "Is Graphic Era recognised by UGC?",
    a: "Yes. Graphic Era (Deemed-to-be-University) is recognised by the UGC under Section 3 of the UGC Act, 1956 and is accredited NAAC A+. Graphic Era Hill University is a State Private University established under the Uttarakhand Universities Act and is UGC-recognised.",
  },
  {
    q: "Who manages this counselling page?",
    a: "This page is managed by admissiondesk for counselling and application assistance. We guide eligible students and coordinate next steps; final admission decisions remain with the university.",
  },
  {
    q: "What entrance exams are accepted?",
    a: "GECET (Graphic Era Common Entrance Test) for most engineering programmes. JEE Main, CUET, GATE, MAT and CAT are accepted for the relevant streams. Some PG programmes admit on qualifying-exam merit.",
  },
  {
    q: "Are hostels available?",
    a: "Yes — separate, secure hostel accommodation is available for boys and girls within walking distance of the campus, with mess, gym, laundry and 24×7 medical support.",
  },
];

export default function GraphicEraPage() {
  return (
    <div className="geu-root">
      <Header
        phone={PAGE_CONTACTS.graphicEra.phone}
        whatsapp={PAGE_CONTACTS.graphicEra.whatsapp}
        applyLabel={CTA_BOOK_COUNSELLING}
        navLinks={[]}
      />
      {false ? (
        <header className="hidden">
        <div className="geu-strip">
          <div className="geu-container flex items-center justify-between">
            <p className="geu-strip-text">
              Admissions 2026 are now open · GECET registration live
            </p>
            <a href="#apply" className="geu-strip-cta">
              {CTA_BOOK_COUNSELLING} →
            </a>
          </div>
        </div>
        <div className="geu-container py-4 flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3">
            <span className="geu-logo-mark" aria-hidden>
              GE
            </span>
            <span className="geu-logo-text">
              <span className="block geu-logo-name">Graphic Era</span>
              <span className="block geu-logo-tag">deemed to be University</span>
            </span>
          </Link>
          <nav className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-[#1a1718]">
            <a href="#programmes">Academics</a>
            <a href="#programmes">Programmes</a>
            <a href="#campus">Campus Life</a>
            <a href="#research">Research</a>
            <a href="#apply" className="geu-nav-active">
              Admissions
            </a>
          </nav>
          <a href="#apply" className="geu-cta">
            {CTA_BOOK_COUNSELLING}
          </a>
        </div>
        </header>
      ) : null}

      {/* Campus hero — full-width building image with identity overlay */}
      <section className="geu-campus-hero" aria-label="Graphic Era University campus">
        <Image
          src="/colleges/geu/hero.webp"
          alt="Graphic Era University campus, Dehradun"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
        />
        <div className="geu-campus-hero-grad" aria-hidden />

        {/* Center: headline */}
        <div className="geu-campus-hero-center" aria-hidden>
          <h2 className="geu-campus-hero-headline">
            Top Placements<br />
            <span>Start With the Right Choice</span>
          </h2>
          <p className="geu-campus-hero-subline">
            NAAC A+ Accredited · UGC Recognised · 30+ Years of Excellence · Two Campuses · Hires at Google, Amazon &amp; more
          </p>
        </div>

        {/* Bottom: stats + programme tags */}
        <div className="geu-campus-hero-footer" aria-hidden>
          <div className="geu-campus-hero-stats">
            <span>NAAC A+ <em>Accredited</em></span>
            <span className="geu-campus-hero-sep">·</span>
            <span>85+ Programmes</span>
            <span className="geu-campus-hero-sep">·</span>
            <span>UG · PG · Doctoral</span>
            <span className="geu-campus-hero-sep">·</span>
            <span>Merit Scholarships up to <em>100%</em></span>
            <span className="geu-campus-hero-sep">·</span>
            <span>Global Exchange Programmes</span>
          </div>
          <div className="geu-campus-hero-tags">
            <span>Engineering</span>
            <span>Management</span>
            <span>Computer Applications</span>
            <span>Pharmacy &amp; Health</span>
            <span>Sciences &amp; Humanities</span>
            <span>Hospitality</span>
            <span>Food Technology</span>
          </div>
        </div>
      </section>
      <section id="apply" className="geu-section geu-section-apply">
        <div className="geu-apply-grid">
          {/* Left — college info */}
          <div className="geu-apply-info">
            <div className="geu-apply-about">
              <h2 className="geu-apply-about-title">
                About Graphic Era, Dehradun
                <br />
                <span>NAAC A+ · UGC Recognised · 30+ Years</span>
              </h2>
              <p className="geu-apply-about-body">
                Graphic Era (Deemed-to-be-University) and Graphic Era Hill
                University together form one of Uttarakhand&rsquo;s most
                recognised university groups. UGC-approved, NAAC A+ accredited,
                and home to 85+ programmes across Engineering, Management,
                Computer Applications, Pharmacy, Sciences, Hospitality and more
                — with top placements at Google, Amazon, Microsoft and 440+
                other companies.
              </p>
            </div>
          </div>

          {/* Right — form */}
          <aside className="geu-apply-form-aside">
            <div className="geu-form-card">
              <h3 className="geu-form-title">
                Talk to an Admissions Counsellor
              </h3>
              <Suspense fallback={null}>
                <ThemedLeadForm
                  university="Graphic Era"
                  buttonLabel="Submit Now"
                  successText="An admissiondesk counsellor will reach out within 24 hours with your Graphic Era eligibility, GECET guidance, scholarship slab and document checklist."
                  classes={{
                    form: "space-y-4",
                    field: "block",
                    label: "field-label",
                    select: "field-select",
                    button: "btn-primary w-full py-3.5 text-base",
                    consent: "flex gap-3 items-start text-sm text-[color:var(--ink-soft)]",
                    error: "field-error",
                    success: "p-5 rounded-lg bg-[color:var(--cream)] border border-[color:var(--rule-soft)]",
                    successTitle: "font-semibold text-lg text-[color:var(--forest-deep)]",
                  }}
                />
              </Suspense>
            </div>
          </aside>
        </div>
      </section>

      <section className="geu-pageheading">
        <div className="geu-container">
          <h1 className="geu-h1">Admissions</h1>
          <div className="geu-h1-rule">
            <span />
            <span />
            <span />
          </div>
          <nav className="geu-breadcrumb">
            Home <span aria-hidden>›</span> Admissions{" "}
            <span aria-hidden>›</span>{" "}
            <span className="geu-breadcrumb-current">Overview</span>
          </nav>
        </div>
      </section>

      <nav className="geu-subnav">
        <div className="geu-container flex flex-wrap gap-x-7 gap-y-3">
          {SUBNAV.map((s) => (
            <a key={s.href} href={s.href}>
              {s.label}
            </a>
          ))}
        </div>
      </nav>

      <section id="overview" className="geu-section">
        <div className="geu-container grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <h2 className="geu-h2">Take your First Step towards success!</h2>
            <p className="geu-body mt-6">
              Choosing the right university is an important decision for any
              student, for the professional success one aspires for in their
              lives, depends on this very decision. Graphic Era
              (Deemed-to-be-University) and Graphic Era Hill University together
              offer more than 85 UG, PG and Doctoral programmes to choose from,
              spread across various domains such as Engineering, Computer
              Application, Management, Commerce, Life Sciences, Food Technology,
              Hospitality, Paramedical, Humanities and Social Sciences, and more.
            </p>
            <div className="geu-callout">
              <strong>Note:</strong> This counselling page is managed by
              admissiondesk. We help students understand Graphic Era
              programmes, eligibility and application steps; final admission
              decisions remain with the university.
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="geu-side-img">
              <Image
                src="/colleges/geu/bg-geu.webp"
                alt="Graphic Era University campus, Dehradun"
                width={1200}
                height={800}
                className="geu-img-fill"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="geu-section geu-section-soft">
        <div className="geu-container">
          <div className="geu-highlights">
            {HIGHLIGHTS.map((h) => (
              <article key={h.title} className="geu-highlight">
                <span className="geu-highlight-mark" aria-hidden />
                <h3 className="geu-highlight-title">{h.title}</h3>
                <p className="geu-highlight-note">{h.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="geu-section">
        <div className="geu-container">
          <h2 className="geu-h2">
            Complete Admission process by Paying the fee
          </h2>
          <p className="geu-body mt-4 max-w-3xl">
            Five steps from interest to confirmed seat. Most candidates
            complete the entire flow in 7–10 working days.
          </p>
          <ol className="geu-steps">
            {STEPS.map((s) => (
              <li key={s.n} className="geu-step">
                <span className="geu-step-number">{s.n}</span>
                <div className="geu-step-body">
                  <h3 className="geu-step-title">{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="scholarship" className="geu-section geu-section-yellow">
        <div className="geu-container">
          <h2 className="geu-h2">Scholarship</h2>
          <p className="geu-body mt-4 max-w-3xl">
            Merit-based scholarships are offered for the entire duration of the
            programme. The slab is awarded at the time of admission and
            continues year-on-year, subject to maintaining the minimum CGPA
            threshold.
          </p>
          <div className="geu-scholar-table">
            {SCHOLARSHIP_TIERS.map((s) => (
              <div key={s.tier} className="geu-scholar-row">
                <span className="geu-scholar-tier">{s.tier}</span>
                <span className="geu-scholar-criteria">{s.criteria}</span>
              </div>
            ))}
          </div>
          <p className="geu-fineprint">
            Additional 10% sibling waiver · Defence personnel children waiver ·
            Single girl-child scholarship · Sports excellence waiver. Full
            details shared during counselling.
          </p>
        </div>
      </section>

      <section id="gecet" className="geu-section">
        <div className="geu-container grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <h2 className="geu-h2">GECET 2026</h2>
            <p className="geu-body mt-5">
              Graphic Era Common Entrance Test (GECET) is the university&apos;s
              own online aptitude test, conducted in multiple windows between
              February and July 2026. The test covers Mathematics, Physics,
              Chemistry, Logical Reasoning and English. 90 minutes, 75
              questions, conducted online.
            </p>
            <ul className="geu-bullets mt-5">
              <li>Three test windows: Feb, May and July 2026</li>
              <li>Negative marking · 4 marks per correct answer, −1 wrong</li>
              <li>Result declared within 7 days · counselling within 14 days</li>
              <li>JEE Main, CUET, GATE, MAT, CAT scores accepted in lieu</li>
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="geu-gecet-card">
              <p className="geu-gecet-eyebrow">GECET — Important Dates</p>
              <ul>
                <li>
                  <span>Registration opens</span>
                  <span>15 Jan 2026</span>
                </li>
                <li>
                  <span>Window 1 test</span>
                  <span>22 Feb 2026</span>
                </li>
                <li>
                  <span>Window 2 test</span>
                  <span>10 May 2026</span>
                </li>
                <li>
                  <span>Window 3 test</span>
                  <span>05 Jul 2026</span>
                </li>
                <li>
                  <span>Counselling</span>
                  <span>Rolling · within 14 days</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="programmes" className="geu-section geu-section-soft">
        <div className="geu-container">
          <div className="geu-banner">
            <Image
              src="/colleges/geu/library.jpg"
              alt="Library / classroom at Graphic Era"
              width={2000}
              height={700}
              className="geu-img-fill"
            />
            <div className="geu-banner-overlay">
              <p className="geu-banner-eyebrow">85+ Programmes · 6 Domains</p>
              <h3>Engineering · Management · Sciences · Pharmacy · Hospitality · Humanities</h3>
            </div>
          </div>
          <h2 className="geu-h2">Programmes at Graphic Era</h2>
          <p className="geu-body mt-4 max-w-3xl">
            85+ UG, PG and Doctoral programmes spread across six broad
            domains. Click any programme during counselling to see the full
            curriculum, fee structure and scholarship eligibility.
          </p>
          <div className="geu-program-grid">
            {PROGRAM_GRID.map((g) => (
              <article key={g.head} className="geu-program-card">
                <h3 className="geu-program-head">{g.head}</h3>
                <ul>
                  {g.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="geu-section">
        <div className="geu-container">
          <h2 className="geu-h2">Placements at Graphic Era</h2>
          <p className="geu-body mt-4 max-w-3xl">
            Graphic Era recorded its highest-ever package of{" "}
            <strong>₹61.99 LPA</strong> in 2025 with{" "}
            <strong>5,700+ placement offers</strong> from{" "}
            <strong>444+ recruiters</strong>. Average package for the CSE 2025
            batch was ₹23.26 LPA.
          </p>
          <div className="geu-placement-grid">
            <div>
              <p className="geu-placement-stat">₹61.99 L</p>
              <p>Highest Package · 2025</p>
            </div>
            <div>
              <p className="geu-placement-stat">₹23.26 L</p>
              <p>Avg. CSE Package · 2025</p>
            </div>
            <div>
              <p className="geu-placement-stat">5,700+</p>
              <p>Offers · 2025</p>
            </div>
            <div>
              <p className="geu-placement-stat">444+</p>
              <p>Recruiters Visiting</p>
            </div>
          </div>
          <div className="geu-logo-strip">
            {PLACEMENT_LOGOS.map((l) => (
              <span key={l} className="geu-logo-pill">
                {l}
              </span>
            ))}
          </div>
        </div>
      </section>

      

      <section id="faqs" className="geu-section geu-section-soft">
        <div className="geu-container">
          <h2 className="geu-h2">Frequently Asked Questions</h2>
          <div className="geu-faqs">
            {FAQS.map((f) => (
              <details key={f.q} className="geu-faq">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="geu-footer">
        <div className="geu-container">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-7">
              <p className="geu-footer-name">admissiondesk</p>
              <p className="geu-footer-tag">ADMISSION GUIDANCE · GRAPHIC ERA GROUP · 2026–27</p>
              <p className="geu-footer-line mt-4">
                We provide admission guidance and counselling support for Graphic
                Era (Deemed-to-be-University) and Graphic Era Hill University,
                Dehradun. Students who connect with admissiondesk receive
                admission assistance, scholarship guidance, and zero-cost
                counselling.
              </p>
              <p className="geu-footer-line mt-3 opacity-90">
                {INDEPENDENCE_DISCLAIMER}
              </p>
              <p className="geu-footer-line mt-2 opacity-90">
                {ADMISSION_DECISION_DISCLAIMER}
              </p>
            </div>
            <div className="md:col-span-5">
              <p className="geu-footer-head">Speak to a Counsellor</p>
              <p className="geu-footer-line mt-3">
                <a href="tel:+917037149086">+91 70371 49086</a>
              </p>
              <p className="geu-footer-line">
                <a href="mailto:support@admissiondesk.info">support@admissiondesk.info</a>
              </p>
              <p className="geu-footer-line mt-3">{SITE.address.formatted}</p>
              <p className="geu-footer-line">Proprietor: {SITE.proprietor}</p>
            </div>
          </div>
          <div className="geu-footer-bar">
            <p>
              © {new Date().getFullYear()} admissiondesk — Independent education consultancy.
              This counselling page is operated by admissiondesk, not by the university.
            </p>
            <p>GEU: NAAC A+ · UGC Section 3 · Deemed-to-be University &amp; Hill University</p>
            <p>GST: {SITE.gstNumber}</p>
          </div>
        </div>
      </footer>
      <HomeLeadPopup university="Graphic Era" />
    </div>
  );
}
