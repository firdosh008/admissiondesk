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
import { UUPhotoCarousel } from "@/components/college/UUPhotoCarousel";
import { HomeLeadPopup } from "@/components/HomeLeadPopup";
import { UUApplyTrigger } from "@/components/college/UUApplyTrigger";
import { CTA_BOOK_COUNSELLING, PAGE_CONTACTS, SITE } from "@/lib/site";

const TOP_COUNTERS = [  
  { to: 23, suffix: "+", label: "Years of Educational Experience" },
  { to: 100, suffix: "+", label: "Multidisciplinary Programs" },
  { to: 750, suffix: "+", label: "Companies Visited For Placement" },
  { to: 15, suffix: "K+", label: "Glorious Alumni" },
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
        applyLabel={CTA_BOOK_COUNSELLING}
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
            <a href="#recruiters">Recruiters</a>
          </nav>
          <div className="uu2-header-right">
            <div className="uu2-phones">
              <a href="tel:8273625802">
                <span aria-hidden>☎</span> +91 82736 25802
              </a>
            </div>
            <UUApplyTrigger className="uu2-apply-btn">
              {CTA_BOOK_COUNSELLING} <span aria-hidden>→</span>
            </UUApplyTrigger>
            <div className="uu2-badge25" aria-hidden>
              <span className="uu2-badge25-big">25+</span>
              <span className="uu2-badge25-small">Years of Excellence</span>
            </div>
          </div>
        </div>
        </header>
      ) : null}

      {/* Static campus hero */}
      <section className="uu2-campus-hero" aria-label="Uttaranchal University campus">
        <Image
          src="/colleges/uu/bg-uu.png"
          alt="Uttaranchal University campus, Dehradun"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center top" }}
        />


        {/* Center: headline */}
        <div className="uu2-campus-hero-center" aria-hidden>
          <h2 className="uu2-campus-hero-headline">
            Top-Ranked Education<br />
            <span>Within Your Reach</span>
          </h2>
          <p className="uu2-campus-hero-subline">
            UGC Recognised · AICTE Approved · Established 2003 · 25+ years of academic excellence
          </p>
        </div>

        {/* Bottom: stats + programme tags */}
        <div className="uu2-campus-hero-footer" aria-hidden>
          <div className="uu2-campus-hero-stats">
            <span>NAAC A+ <em>First Cycle</em></span>
            <span className="uu2-campus-hero-sep">·</span>
            <span>143 Programmes</span>
            <span className="uu2-campus-hero-sep">·</span>
            <span>12 Schools</span>
            <span className="uu2-campus-hero-sep">·</span>
            <span>750+ Placement Companies</span>
            <span className="uu2-campus-hero-sep">·</span>
            <span>15,000+ Alumni</span>
          </div>
          <div className="uu2-campus-hero-tags">
            <span>AI / ML</span>
            <span>Law</span>
            <span>Pharmacy</span>
            <span>Engineering</span>
            <span>Management</span>
            <span>Medical Sciences</span>
            <span>Computer Applications</span>
            <span>Nursing</span>
          </div>
        </div>
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
              <h3 className="uu2-form-title">Talk to an Admissions Counsellor</h3>
              <Suspense fallback={null}>
                <UULeadForm
                  university="Uttaranchal University"
                  buttonLabel="Submit Now"
                  successText="A senior admissiondesk counsellor will reach out shortly with Uttaranchal University eligibility, scholarship guidance and document checklist."
                  classes={{
                    form: "space-y-4",
                    field: "block",
                    label: "block text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/75 mb-1.5",
                    select: "field-select",
                    button: "btn-primary w-full py-3.5 text-base",
                    consent: "flex gap-3 items-start text-sm text-white/65",
                    error: "text-xs text-red-300 mt-1",
                    success: "p-5 rounded-lg bg-white/10 border border-white/20",
                    successTitle: "font-semibold text-lg text-white",
                  }}
                />
              </Suspense>
            </div>
          </aside>
        </div>
      </section>
      
      {/* Promotional carousel */}
      <section className="uu2-hero-wrap" id="hero">
        <UUImageHero />
      </section>

      

      {/* Accreditation marquee */}
      <section className="uu2-accred-section">
        <h2 className="uu2-section-h">
          Approvals · Accreditation · <span>Memberships &amp; Rankings</span>
        </h2>
        <UUAccredMarquee />
      </section>

      {/* Find a Program */}
      <section className="uu2-finder-section" id="programs">
        <UUProgramSidebar />
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
              <p className="uu-footer-tag">ADMISSION GUIDANCE · UTTARANCHAL UNIVERSITY · 2026–27</p>
              <p className="uu-footer-line mt-4">
                We provide admission guidance and counselling support for
                Uttaranchal University, Dehradun. Students who connect with
                admissiondesk receive admission assistance, scholarship guidance,
                and zero-cost counselling.
              </p>
            </div>
            <div className="md:col-span-5">
              <p className="uu-footer-tag">SPEAK TO A COUNSELLOR</p>
              <p className="uu-footer-line mt-3">
                <a href="tel:+918273625802" style={{ opacity: 0.85 }}>+91 82736 25802</a>
              </p>
              <p className="uu-footer-line">
                <a href="mailto:support@admissiondesk.info" style={{ opacity: 0.85 }}>
                  support@admissiondesk.info
                </a>
              </p>
              <p className="uu-footer-line mt-3">{SITE.address.formatted}</p>
              <p className="uu-footer-line">Proprietor: {SITE.proprietor}</p>
            </div>
          </div>
          <div className="uu-footer-bar">
            <p>
              © {new Date().getFullYear()} admissiondesk — Independent education consultancy.
              This counselling page is operated by admissiondesk, not by the university.
            </p>
            <p>UU: NAAC A+ · UGC · AICTE · BCI · PCI · INC</p>
            <p>GST: {SITE.gstNumber}</p>
          </div>
        </div>
      </footer>

      <HomeLeadPopup university="Uttaranchal University" />
    </div>
  );
}
