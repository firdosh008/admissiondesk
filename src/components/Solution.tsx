"use client";

import { Target, GraduationCap, FileCheck2, LifeBuoy } from "lucide-react";
import { dispatchHomePopup } from "./HomeLeadPopup";

const STEPS = [
  {
    icon: Target,
    title: "Understand your goals",
    desc: "We start with you — your scores, interests, budget and what you actually want from college.",
  },
  {
    icon: GraduationCap,
    title: "Suggest the best colleges",
    desc: "An honest, unbiased shortlist of colleges and courses that genuinely match your goals.",
  },
  {
    icon: FileCheck2,
    title: "Help with admission",
    desc: "Forms, documents, deadlines and scholarships — we guide every step of the application.",
  },
  {
    icon: LifeBuoy,
    title: "Continuous support",
    desc: "We stay with you through admission, fee deposit and onboarding — not just until you sign up.",
  },
];

export function Solution() {
  return (
    <section id="how-we-help" className="section">
      <div className="container-x py-12 md:py-24 lg:py-32">
        <header className="max-w-3xl mb-8 md:mb-16">
          <p className="eyebrow">How we help</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 leading-[1.04] text-[color:var(--forest-deep)]">
            That&apos;s where{" "}
            <span className="font-italic-serif">AdmissionDesk</span> helps you.
          </h2>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {STEPS.map(({ icon: Icon, title, desc }, i) => (
            <article
              key={title}
              className="card-elevated p-5 sm:p-6 md:p-7 flex flex-col items-start h-full"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--forest)]/8 border border-[color:var(--forest)]/12 text-[color:var(--forest-deep)]">
                <Icon size={22} strokeWidth={1.8} aria-hidden />
              </span>
              <span className="mt-4 text-[10px] tracking-[0.24em] uppercase text-[color:var(--gold-deep)] font-semibold">
                Step {i + 1}
              </span>
              <h3 className="mt-2 font-display text-xl leading-tight text-[color:var(--forest-deep)]">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-soft)]">
                {desc}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 md:mt-12">
          <button
            type="button"
            onClick={dispatchHomePopup}
            className="btn-primary text-sm md:text-base py-3 md:py-3.5 px-6 md:px-8"
          >
            Talk to an expert now
          </button>
        </div>
      </div>
    </section>
  );
}
