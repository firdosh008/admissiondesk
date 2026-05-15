"use client";

import { SITE } from "@/lib/site";
import { dispatchHomePopup } from "./HomeLeadPopup";

const stats = [
  { value: "8+", label: "Partner Universities" },
  { value: "Free", label: "Expert Consultation" },
  { value: "100+", label: "Courses Covered" },
  { value: "UGC", label: "Approved Institutions" },
];

const values = [
  {
    title: "Students first",
    body: "We shortlist by goals, budget, eligibility, and career direction instead of pushing one course blindly.",
  },
  {
    title: "Transparent role",
    body: "Every page makes clear that admissiondesk provides counselling and application assistance — not official admissions.",
  },
  {
    title: "Local guidance",
    body: "Our counselling focuses on Dehradun and Uttarakhand universities, campus choices, and admission timelines.",
  },
];

export function HomeAbout() {
  return (
    <section id="about" className="section-parchment py-16 md:py-24">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Who We Are</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-[color:var(--forest-deep)] md:text-5xl">
              About Us
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[color:var(--ink-soft)]">
              {SITE.name} is a premier admission consultancy dedicated to
              helping students navigate the complex process of selecting the
              right course and college. Our experienced counsellors provide
              personalised guidance to each student.
            </p>
            <p className="mt-4 max-w-xl leading-7 text-[color:var(--ink-soft)]">
              We specialise in comprehensive information about educational
              institutions, their programmes, and admission requirements —
              extending to entrance exam guidance so students prepare
              effectively.
            </p>
            <p className="mt-6 text-sm text-[color:var(--muted)]">
              Based in Dehradun, Uttarakhand — serving students across the
              region and beyond.
            </p>
            <button
              type="button"
              onClick={dispatchHomePopup}
              className="btn-primary mt-8 px-8 py-3 text-sm"
            >
              Talk to an Expert
            </button>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-5">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="card-paper p-6 text-center"
                >
                  <p className="font-display text-5xl text-[color:var(--forest-deep)]">
                    {value}
                  </p>
                  <p className="mt-2 text-sm text-[color:var(--ink-soft)] leading-tight">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3 border-t border-[color:var(--rule)] pt-12">
          {values.map(({ title, body }) => (
            <article key={title}>
              <span className="rule-ornament" aria-hidden />
              <h3 className="mt-4 font-display text-2xl text-[color:var(--forest-deep)]">
                {title}
              </h3>
              <p className="mt-3 leading-7 text-[color:var(--ink-soft)]">
                {body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
