import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

const aboutStats = [
  { value: "8+", label: "Partner Universities" },
  { value: "Free", label: "Expert Consultation" },
  { value: "100+", label: "Courses Covered" },
  { value: "UGC", label: "Approved Institutions" },
];

export const metadata: Metadata = {
  title: "About Us | Admission Counselling in Dehradun",
  description:
    "Learn about admissiondesk, an admission counselling and consulting firm helping class 12 passed students choose universities, courses, scholarships, and applications in Uttarakhand.",
  alternates: { canonical: "/about-us" },
};

const services = [
  "Course and university shortlisting after class 12",
  "Eligibility, fees, hostel, and scholarship guidance",
  "Application form and document support",
  "Counselling for parents and students before admission decisions",
];

export default function AboutUsPage() {
  return (
    <main className="flex-1">
      <section className="container-x py-16 md:py-24">
        <Link
          href="/"
          className="text-sm font-semibold text-[color:var(--muted)] hover:text-[color:var(--forest-deep)]"
        >
          Back to home
        </Link>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="eyebrow">About {SITE.name}</p>
            <h1 className="mt-5 max-w-4xl font-display text-5xl leading-tight text-[color:var(--forest-deep)] md:text-7xl">
              Admission counselling for students who want clarity before they commit.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[color:var(--ink-soft)]">
              {SITE.name} is a Dehradun-based counselling and education
              consulting firm for class 12 passed students, graduates, and
              parents exploring private universities in Uttarakhand. We help
              students compare programmes, understand admission steps, check
              scholarship possibilities, and complete applications with fewer
              doubts.
            </p>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[color:var(--ink-soft)]">
              We work as an authorised counselling and application assistance
              partner for selected universities through formal institutional
              arrangements, including MOU-based admission support where
              applicable. We are not owned by any university and we do not
              present ourselves as the official university website.
            </p>
          </div>

          <aside className="card-paper p-6 md:p-8">
            <h2 className="font-display text-3xl text-[color:var(--forest-deep)]">
              What We Help With
            </h2>
            <ul className="mt-6 space-y-4 text-[color:var(--ink-soft)]">
              {services.map((service) => (
                <li key={service} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[color:var(--gold)]" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-md border border-[color:var(--rule)] bg-white/55 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[color:var(--gold-deep)]">
                No student fee
              </p>
              <p className="mt-3 leading-7 text-[color:var(--ink-soft)]">
                Our counselling is free for students. If a student enrols
                through our assistance, the partner institution may compensate
                us as per its agreement with us.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-[color:var(--parchment)] py-12 border-y border-[color:var(--rule)]">
        <div className="container-x">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {aboutStats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="font-display text-4xl md:text-5xl text-[color:var(--forest-deep)]">{value}</p>
                <p className="mt-2 text-sm text-[color:var(--ink-soft)] leading-tight">{label}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-[color:var(--muted)]">
            Based in Dehradun, Uttarakhand — serving students across the region and beyond.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href={`#contact`}
              className="btn-primary px-8 py-3 text-sm"
            >
              Talk to an Expert
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--cream)] py-14">
        <div className="container-x grid gap-8 md:grid-cols-3">
          {[
            ["Students first", "We shortlist by goals, budget, eligibility, and career direction instead of pushing one course blindly."],
            ["Transparent role", "Every page makes clear that admissiondesk provides counselling and application assistance."],
            ["Local guidance", "Our counselling focuses on Dehradun and Uttarakhand universities, campus choices, and admission timelines."],
          ].map(([title, body]) => (
            <article key={title}>
              <h2 className="font-display text-2xl text-[color:var(--forest-deep)]">
                {title}
              </h2>
              <p className="mt-3 leading-7 text-[color:var(--ink-soft)]">
                {body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="container-x py-14 md:py-20">
        <p className="eyebrow">Reach out</p>
        <h2 className="mt-4 font-display text-3xl md:text-4xl text-[color:var(--forest-deep)]">
          Contact Us
        </h2>
        <p className="mt-3 text-[color:var(--ink-soft)] leading-relaxed max-w-xl">
          We&apos;re here to help you make the best academic decision. Get in touch today.
        </p>

        <div className="mt-8 grid sm:grid-cols-3 gap-6">
          {[
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.64 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.06 6.06l1.14-1.14a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              ),
              label: "Phone",
              value: SITE.phone,
              href: `tel:${SITE.phone.replace(/[^+\d]/g, "")}`,
            },
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              ),
              label: "Email",
              value: SITE.email,
              href: `mailto:${SITE.email}`,
            },
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              ),
              label: "Address",
              value: `${SITE.address.street}, ${SITE.address.locality}, ${SITE.address.region}`,
              href: undefined,
            },
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>
              ),
              label: "GST Number",
              value: "05DXGPP9903M2ZU",
              href: undefined,
            },
          ].map(({ icon, label, value, href }) => (
            <div key={label} className="card-paper p-5 flex gap-4 items-start">
              <span className="w-9 h-9 flex items-center justify-center rounded-full bg-[color:var(--forest)]/10 text-[color:var(--forest-deep)] flex-none">
                {icon}
              </span>
              <div>
                <p className="text-[10px] tracking-[0.18em] uppercase font-semibold text-[color:var(--muted)]">{label}</p>
                {href ? (
                  <a href={href} className="mt-1 block text-sm font-medium text-[color:var(--forest-deep)] hover:text-[color:var(--moss)] transition-colors">
                    {value}
                  </a>
                ) : (
                  <p className="mt-1 text-sm font-medium text-[color:var(--forest-deep)]">{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-[color:var(--muted)] leading-relaxed max-w-2xl">
          Note: We are a private admission consultancy and authorised admission partner for selected universities. We do not represent the official website of any university. Trademarks used are owned by their respective owners.
        </p>
      </section>
    </main>
  );
}
