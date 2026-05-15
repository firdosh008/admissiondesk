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
import { UULeadPopup } from "@/components/college/UULeadPopup";
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
    body: "We focus on 360° personality development of students through various programs and extracurricular activities — from public speaking to professional grooming and aptitude.",
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
        applyHref="#apply"
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
                Uttaranchal University Dehradun
                <br />
                <span>For the Excellence within &ldquo;U&rdquo;</span>
              </h2>
              <p>
                Uttaranchal University is recognised by the UGC under sections
                2(f) and 12(B) of the UGC Act, 1956, and by other statutory
                bodies of the State and the Nation. The University has been
                promoted by Sushila Devi Centre for Professional Studies &
                Research, a society registered under the Societies Registration
                Act (1860). The University has been accredited with the
                prestigious &ldquo;A+ Grade&rdquo; by the National Assessment
                and Accreditation Council (NAAC) — the first university in
                Uttarakhand to receive NAAC A+ in the first cycle.
              </p>
              <div className="uu2-cta-row">
                <UUAboutModal label="Know More" />
              </div>
            </div>
          </div>
          <aside className="uu2-form-aside">
            <div className="uu2-form-card">
              <p className="uu2-form-eyebrow">Admissions 2026–27 · Apply Now</p>
              <h3 className="uu2-form-title">Talk to an admissiondesk Counsellor</h3>
              <p className="mt-2 text-sm leading-6 text-[#4b5563]">
                Counselling and application assistance by admissiondesk,
                an authorised education consulting partner.
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
            Why <span>Uttaranchal University?</span>
          </h2>
          <p>
            Uttaranchal University, the top private university in Dehradun, has
            built a distinct reputation by offering excellent education with a
            niche team of dedicated faculty, ultra-modern infrastructure and an
            obsessive focus on research, innovation and industry-aligned
            learning.
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
          Student <span>Success Stories</span>
        </h2>
        <p className="uu2-success-intro">
          At Uttaranchal University, we understand that teamwork and support go
          a long way in assuring a student&apos;s success. Over the years, we
          have witnessed many of our students reach the zenith of their careers.
          Our Corporate Resource Center works day in and day out to assure that
          our students get placed in top companies and kick-start their careers
          on a high note.
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
          Our <span>Intellectual Assets</span>
        </h2>
        <p className="uu2-intel-intro">
          Uttaranchal University has a team of highly dedicated, experienced and
          qualified faculty members from around the globe, including IITians,
          NITians and Post-Doctoral Scholars. They are amongst the best
          academicians with high moral values — a real role model for students.
        </p>
        <UUIntellectualCarousel />
      </section>

      {/* Bottom carousel — photos */}
      <section className="uu2-photos-section">
        <h2 className="uu2-section-h">
          Inside <span>the Campus</span>
        </h2>
        <UUPhotoCarousel />
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
            <div className="md:col-span-5">
              <p className="uu-footer-name">UTTARANCHAL UNIVERSITY</p>
              <p className="uu-footer-tag">DEHRADUN · NAAC A+</p>
              <p className="uu-footer-line mt-4">
                Premnagar, Dehradun, Uttarakhand – 248007
              </p>
            </div>
          </div>
          <div className="uu-footer-bar">
            <p>
              © {new Date().getFullYear()} admissiondesk counselling page
              for Uttaranchal University.
            </p>
            <p>NAAC A+ · UGC · AICTE · BCI · PCI · INC</p>
          </div>
        </div>
      </footer>

      <UUStickyCTA />
      <UULeadPopup />
    </div>
  );
}
