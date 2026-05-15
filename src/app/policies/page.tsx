import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Policies | Privacy, Terms, and Student Counselling Disclaimer",
  description:
    "Read admissiondesk policies for admission counselling, privacy, terms, data use, student consent, and university application assistance.",
  alternates: { canonical: "/policies" },
};

const policies = [
  {
    title: "Privacy Policy",
    href: "/privacy",
    body: "How we collect, use, protect, and share student enquiry details for counselling and admission assistance.",
  },
  {
    title: "Terms of Service",
    href: "/terms",
    body: "The terms that govern counselling, application support, information accuracy, and student responsibilities.",
  },
];

export default function PoliciesPage() {
  return (
    <main className="flex-1">
      <section className="container-x py-16 md:py-24">
        <Link
          href="/"
          className="text-sm font-semibold text-[color:var(--muted)] hover:text-[color:var(--forest-deep)]"
        >
          Back to home
        </Link>

        <p className="eyebrow mt-10">Policies</p>
        <h1 className="mt-5 max-w-4xl font-display text-5xl leading-tight text-[color:var(--forest-deep)] md:text-7xl">
          Clear rules for counselling, consent, and admission support.
        </h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-[color:var(--ink-soft)]">
          {SITE.name} provides admission counselling and application assistance
          for students considering partner universities. We collect only the
          details needed to respond to an enquiry, guide the student, and share
          relevant application information with the selected institution after
          consent.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {policies.map((policy) => (
            <Link
              key={policy.href}
              href={policy.href}
              className="card-paper block p-7 transition-transform hover:-translate-y-1"
            >
              <h2 className="font-display text-3xl text-[color:var(--forest-deep)]">
                {policy.title}
              </h2>
              <p className="mt-4 leading-7 text-[color:var(--ink-soft)]">
                {policy.body}
              </p>
              <span className="mt-6 inline-flex font-semibold text-[color:var(--gold-deep)]">
                Read policy
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 rounded-md border border-[color:var(--rule)] bg-[color:var(--cream)] p-6">
          <h2 className="font-display text-2xl text-[color:var(--forest-deep)]">
            Counselling partner disclaimer
          </h2>
          <p className="mt-3 leading-7 text-[color:var(--ink-soft)]">
            College-themed pages on this website are built to help students
            recognise the university they are enquiring about. They are
            admission information and counselling pages managed by {SITE.name},
            not official university websites.
          </p>
        </div>
      </section>
    </main>
  );
}
