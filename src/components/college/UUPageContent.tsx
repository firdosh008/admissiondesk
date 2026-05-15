import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { Header } from "@/components/Header";
import { UULeadForm } from "@/components/college/UULeadForm";
import { UUCountUp } from "@/components/college/UUCountUp";
import { UUImageHero } from "@/components/college/UUImageHero";
import { UUAboutModal } from "@/components/college/UUAboutModal";
import { UUAccredMarquee } from "@/components/college/UUAccredMarquee";
import { UUProgramSidebar } from "@/components/college/UUProgramSidebar";
import { UUIntellectualCarousel } from "@/components/college/UUIntellectualCarousel";
import { UUPhotoCarousel } from "@/components/college/UUPhotoCarousel";
import { UUStickyCTA } from "@/components/college/UUStickyCTA";
import { HomeLeadPopup } from "@/components/HomeLeadPopup";
import { UUApplyTrigger } from "@/components/college/UUApplyTrigger";
import { PAGE_CONTACTS } from "@/lib/site";

const TOP_COUNTERS = [
  { to: 23, suffix: "+", label: "Years of Educational Experience" },
  { to: 100, suffix: "+", label: "Multidisciplinary Programs" },
  { to: 750, suffix: "+", label: "Companies Visited For Placement" },
  { to: 15, suffix: "K+", label: "Glorious Alumni" },
];

const BENTO = [
  {
    img: "/uu-new/bento/naac.jpg",
    badge: "01",
    title: "NAAC A+ Accreditation",
    body: "With NAAC A+ Grade, Uttaranchal University stands tall in the league of top universities in the country.",
    accent: "accent-green",
  },
  {
    img: "/uu-new/bento/cif.jpg",
    badge: "02",
    title: "World Class Central Instrumentation Facilities (CIF)",
    body: "The University's Division of Research & Innovation hosts a state-of-the-art Central Instrumentation Centre with sophisticated research and analytical instruments under the supervision of well-versed researchers and scientists.",
    accent: "accent-orange",
  },
  {
    img: "/uu-new/bento/personality.jpg",
    badge: "03",
    title: "Personality Development Program",
    body: "UU focuses on 360° personality development through structured programs and extracurricular activities — from public speaking and professional grooming to aptitude and leadership training.",
    accent: "accent-green",
  },
  {
    img: "/uu-new/bento/diversity.jpg",
    badge: "04",
    title: "Industry-Collaborated Academic Curriculum",
    body: "Collaboration between industry and academia is the key to catalyse the success of students in the professional world with hands-on, real-client experience from year two.",
    accent: "accent-orange",
  },
];

const SUCCESS = [
  {
    name: "Deepa Pandey",
    note: "B.Tech CSE · Batch 2021–25",
    photo: "/uu-new/success/deepa.png",
  },
  {
    name: "Ankita",
    note: "Judicial Services, Uttar Pradesh",
    photo: "/uu-new/success/ankita.png",
  },
  {
    name: "Siddhartha Kumar",
    note: "Judicial Services, Madhya Pradesh",
    photo: "/uu-new/success/siddhartha.png",
    featured: true,
  },
  {
    name: "Ayush Thapa",
    note: "₹45 LPA Placement at Hyatt Regency",
    photo: "/uu-new/success/ayush.png",
  },
  {
    name: "Gulnaaz",
    note: "MCA — ₹19.5 Lac offer from Zscaler",
    photo: "/uu-new/success/gulnaaz.png",
  },
];

const COMPANIES = [
  { src: "/uu-new/companies/google.jpg", alt: "Google" },
  { src: "/uu-new/companies/adobe.jpg", alt: "Adobe" },
  { src: "/uu-new/companies/atlassian.jpg", alt: "Atlassian" },
  { src: "/uu-new/companies/amazon.jpg", alt: "Amazon" },
  { src: "/uu-new/companies/autodesk.jpg", alt: "Autodesk" },
  { src: "/uu-new/companies/deloitte.jpg", alt: "Deloitte" },
  { src: "/uu-new/companies/ericsson.jpg", alt: "Ericsson" },
  { src: "/uu-new/companies/nvidia.jpg", alt: "NVIDIA" },
  { src: "/uu-new/companies/accenture.jpg", alt: "Accenture" },
  { src: "/uu-new/companies/zscaler.jpg", alt: "Zscaler" },
  { src: "/uu-new/companies/ibm.jpg", alt: "IBM" },
  { src: "/uu-new/companies/schneider.jpg", alt: "Schneider Electric" },
  { src: "/uu-new/companies/citi.jpg", alt: "Citibank" },
  { src: "/uu-new/companies/pepsico.jpg", alt: "PepsiCo" },
];

export function UUPageContent() {
  return (
    <div className="uu-root uu2-root">
      <Header
        phone={PAGE_CONTACTS.uttaranchal.phone}
        whatsapp={PAGE_CONTACTS.uttaranchal.whatsapp}
        applyLabel="Apply Now"
        navLinks={[]}
      />
      {/* Header */}
      {false ? (
        <header className="hidden">
        <div className="uu2-header-inner">
          <Link href="/" className="uu2-brand">
            <Image
              src="/colleges/uu/UU-Logo-Naac-Nirf.png"
              alt="Uttaranchal University · NAAC Grade A+"
              width={599}
              height={176}
              className="uu2-brand-img"
              priority
            />
          </Link>
          <nav className="uu2-nav">
            <a href="#about">About UU</a>
            <a href="#programs">Programs</a>
            <a href="#success">Placements</a>
            <a href="#recruiters">Recruiters</a>
          </nav>
          <div className="uu2-header-right">
            <div className="uu2-phones">
              <a href="tel:8273625802">
                <span aria-hidden>☎</span> +91 82736 25802
              </a>
            </div>
            <UUApplyTrigger className="uu2-apply-btn">
              Apply Now <span aria-hidden>→</span>
            </UUApplyTrigger>
            <div className="uu2-badge25" aria-hidden>
              <span className="uu2-badge25-big">25+</span>
              <span className="uu2-badge25-small">Years of Excellence</span>
            </div>
          </div>
        </div>
        </header>
      ) : null}

      {/* Hero — wide picture carousel */}
      <section className="uu2-hero-wrap" id="hero">
        <UUImageHero />
      </section>

      {/* Stats + form section */}
      <section className="uu2-stats" id="apply">
        <div className="uu2-stats-bg" aria-hidden />
        <div className="uu2-stats-grid">
          <div className="uu2-stats-copy">
            <div className="uu2-stats-cards">
              {TOP_COUNTERS.map((c) => (
                <div className="uu2-stat-card" key={c.label}>
                  <p className="uu2-stat-val">
                    <UUCountUp to={c.to} suffix={c.suffix} />
                  </p>
                  <p className="uu2-stat-lbl">{c.label}</p>
                </div>
              ))}
            </div>
            <div className="uu2-stats-about" id="about">
              <h2 className="uu2-about-title">
                About Uttaranchal University, Dehradun
                <br />
                <span>NAAC A+ · UGC Recognised · Est. 2003</span>
              </h2>
              <p>
                Uttaranchal University (UU), Dehradun is recognised by the UGC
                under sections 2(f) and 12(B) of the UGC Act, 1956, and
                approved by AICTE, BCI, PCI, and INC. It holds the prestigious
                NAAC A+ Grade — the first university in Uttarakhand to achieve
                this in the first cycle. With 100+ multidisciplinary programmes,
                750+ placement companies, and a 25-year legacy,
                UU is a top private university choice for students in
                Uttarakhand and beyond.
              </p>
              <div className="uu2-cta-row">
                <UUAboutModal label="Know More" />
              </div>
            </div>
          </div>
          <aside className="uu2-form-aside">
            <div className="uu2-form-card">
              <p className="uu2-form-eyebrow">Authorised Partner · UU Admissions 2026–27</p>
              <h3 className="uu2-form-title">Apply via admissiondesk — Authorised UU Admission Partner</h3>
              <p className="mt-2 text-sm leading-6 text-[#4b5563]">
                As an MOU-authorised partner of Uttaranchal University, admissiondesk
                helps you secure admission with programme guidance, scholarship
                matching, and document support — completely free for students.
              </p>
              <Suspense fallback={null}>
                <UULeadForm
                  university="Uttaranchal University"
                  buttonLabel="Submit"
                  successText="A senior admissiondesk counsellor will reach out shortly with Uttaranchal University eligibility, scholarship guidance and document checklist."
                  classes={{
                    form: "uu2-ff",
                    field: "uu2-ff-field",
                    label: "uu2-ff-label",
                    select: "uu2-ff-input",
                    button: "uu2-ff-button",
                    consent: "uu2-ff-consent",
                    error: "uu2-ff-error",
                    success: "uu2-ff-success",
                    successTitle: "uu2-ff-success-title",
                  }}
                />
              </Suspense>
            </div>
          </aside>
        </div>
      </section>

      {/* Accreditation marquee */}
      <section className="uu2-accred-section">
        <h2 className="uu2-section-h">
          Approvals · Accreditation · <span>Memberships &amp; Rankings</span>
        </h2>
        <UUAccredMarquee />
      </section>

      {/* Why UU + Bento */}
      <section className="uu2-bento-section" id="why">
        <div className="uu2-bento-head">
          <h2 className="uu2-section-h">
            Why Choose <span>Uttaranchal University?</span>
          </h2>
          <p>
            Uttaranchal University is among the top-ranked private universities
            in Uttarakhand, recognised for its NAAC A+ accreditation,
            industry-aligned curriculum, and strong placement record.
            Students considering UU for 2026-27 admissions benefit from
            100+ programmes, dedicated research facilities, and a proven
            campus-to-career pathway.
          </p>
        </div>
        <div className="uu2-bento-grid">
          {BENTO.map((b, i) => (
            <article
              key={b.title}
              className={`uu2-bento-card uu2-bento-${i + 1} ${b.accent}`}
            >
              <div className="uu2-bento-img">
                <Image
                  src={b.img}
                  alt={b.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
                <span className="uu2-bento-num" aria-hidden>
                  {b.badge}
                </span>
              </div>
              <div className="uu2-bento-body">
                <h3>{b.title}</h3>
                <p>{b.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Find a Program */}
      <section className="uu2-finder-section" id="programs">
        <UUProgramSidebar />
      </section>

      {/* Student Success Stories */}
      <section className="uu2-success-section" id="success">
        <h2 className="uu2-section-h">
          Uttaranchal University <span>Placement Success Stories</span>
        </h2>
        <p className="uu2-success-intro">
          As an authorised admission partner, admissiondesk has helped hundreds
          of students get into Uttaranchal University programmes that matched
          their goals. UU&apos;s Corporate Resource Centre then takes over —
          placing graduates in top companies across India and abroad. These are
          the kind of outcomes you can work toward when you apply through the
          right channel.
        </p>
        <div className="uu2-success-grid">
          {SUCCESS.map((s) => (
            <article
              key={s.name}
              className={`uu2-success-card ${s.featured ? "is-feature" : ""}`}
            >
              <div className="uu2-success-photo">
                <Image
                  src={s.photo}
                  alt={s.name}
                  fill
                  sizes="(max-width: 1024px) 50vw, 20vw"
                  style={{ objectFit: "cover", objectPosition: "top center" }}
                />
              </div>
              <h3>{s.name}</h3>
              <p>{s.note}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Our Intellectual Assets */}
      <section className="uu2-intel-section" id="intellectual">
        <h2 className="uu2-section-h">
          UU&apos;s <span>Faculty &amp; Intellectual Assets</span>
        </h2>
        <p className="uu2-intel-intro">
          Uttaranchal University&apos;s faculty includes IITians, NITians, and
          Post-Doctoral Scholars from across India and the world. This academic
          depth is one of the key reasons admissiondesk — as an authorised
          admission partner — actively recommends UU to students who want
          research-backed, industry-aligned education in Dehradun.
        </p>
        <UUIntellectualCarousel />
      </section>

      {/* Industry-Top Recruiters */}
      <section className="uu2-recruiters-section" id="recruiters">
        <h2 className="uu2-section-h">
          Industry-Top <span>Recruiters</span>
        </h2>
        <div className="uu2-companies-grid">
          {COMPANIES.map((c) => (
            <div className="uu2-company" key={c.src}>
              <Image
                src={c.src}
                alt={c.alt}
                width={240}
                height={120}
                sizes="200px"
                style={{ objectFit: "contain", width: "auto", height: "100%" }}
              />
            </div>
          ))}
        </div>
      </section>

      <footer className="uu-footer">
        <div className="uu-container">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-7">
              <p className="uu-footer-name">admissiondesk</p>
              <p className="uu-footer-tag">AUTHORISED ADMISSION PARTNER · UTTARANCHAL UNIVERSITY · 2026–27</p>
              <p className="uu-footer-line mt-4">
                admissiondesk is an MOU-authorised admission and counselling
                partner of Uttaranchal University, Dehradun. Students who apply
                through admissiondesk receive direct admission support,
                scholarship guidance, and zero-cost counselling.
              </p>
            </div>
            <div className="md:col-span-5">
              <p className="uu-footer-tag">SPEAK TO A COUNSELLOR</p>
              <p className="uu-footer-line mt-3">
                <a href="tel:+918273625802" style={{ opacity: 0.85 }}>+91 82736 25802</a>
              </p>
              <p className="uu-footer-line">
                <a href="mailto:admissions@admission-desk.online" style={{ opacity: 0.85 }}>
                  admissions@admission-desk.online
                </a>
              </p>
            </div>
          </div>
          <div className="uu-footer-bar">
            <p>
              © {new Date().getFullYear()} admissiondesk — Authorised Admission Partner for Uttaranchal University.
              This counselling page is operated by admissiondesk, not by the university.
            </p>
            <p>UU: NAAC A+ · UGC · AICTE · BCI · PCI · INC</p>
          </div>
        </div>
      </footer>

      <UUStickyCTA />
      <HomeLeadPopup university="Uttaranchal University" />
    </div>
  );
}
