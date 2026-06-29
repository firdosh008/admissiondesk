import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us | admissiondesk",
  description:
    "Contact admissiondesk for independent education counselling in Dehradun. Find our phone number, email address, office address, GST number, and working hours.",
  alternates: { canonical: "/contact-us" },
};

const contactItems = [
  {
    label: "Phone",
    value: SITE.phone,
    href: `tel:${SITE.phone.replace(/[^+\d]/g, "")}`,
  },
  {
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  {
    label: "Office Address",
    value: SITE.address.formatted,
  },
  {
    label: "GST Number",
    value: SITE.gstNumber,
  },
  {
    label: "Proprietor",
    value: SITE.proprietor,
  },
  {
    label: "Working Hours",
    value: "Monday to Saturday, 10:00 AM to 6:00 PM",
  },
];

export default function ContactUsPage() {
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

          <div className="mt-10 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="eyebrow">Contact {SITE.name}</p>
              <h1 className="mt-5 max-w-4xl font-display text-5xl leading-tight text-[color:var(--forest-deep)] md:text-7xl">
                Speak with an education counsellor.
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-[color:var(--ink-soft)]">
                Reach our counselling team for university shortlisting,
                eligibility guidance, fee and scholarship information, and
                application support for selected universities in Uttarakhand.
              </p>
            </div>

            <div   className="grid gap-5 sm:grid-cols-2">
              {contactItems.map(({ label, value, href }) => (
                <div key={label} className="card-paper p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="mt-2 block text-base font-semibold leading-7 text-[color:var(--forest-deep)] transition-colors hover:text-[color:var(--moss)]"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="mt-2 text-base font-semibold leading-7 text-[color:var(--forest-deep)]">
                      {value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[color:var(--parchment)] border-y border-[color:var(--rule)] py-12 md:py-16">
          <div className="container-x grid gap-8 md:grid-cols-3">
            {[
              [
                "Independent guidance",
                "We help students understand available options and admission steps. Final admission decisions remain with the respective institutions.",
              ],
              [
                "Transparent support",
                "Students can contact us for counselling, document support, and application guidance before making a decision.",
              ],
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
