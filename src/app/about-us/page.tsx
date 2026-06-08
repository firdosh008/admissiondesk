import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ADMISSION_DECISION_DISCLAIMER, INDEPENDENCE_DISCLAIMER, SITE } from "@/lib/site";

const aboutStats = [
  { value: "8+", label: "Universities Covered" },
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
    <>
      <Header />
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
                We provide admission guidance and counselling support for students
                exploring selected universities. {INDEPENDENCE_DISCLAIMER}
              </p>
              <p className="mt-4 max-w-3xl text-base leading-7 text-[color:var(--muted)]">
                {ADMISSION_DECISION_DISCLAIMER}
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
                  through our assistance, the respective institution may
                  compensate us as per its agreement with us.
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
      </main>
      <Footer />
    </>
  );
}
