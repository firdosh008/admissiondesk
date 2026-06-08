import { Suspense } from "react";
import { LeadForm } from "./LeadForm";

export function Counselling() {
  return (
    <section id="counselling" className="section-parchment">
      <div className="container-x py-12 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* ── Left: Value proposition ── */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <p className="eyebrow">Talk to a counsellor</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 leading-[1.02] text-[color:var(--forest-deep)]">
              Tell us about you.
              <br />
              <span className="font-italic-serif">
                We&apos;ll bring the campus.
              </span>
            </h2>
            <p className="mt-5 text-base md:text-lg text-[color:var(--ink-soft)] leading-relaxed max-w-lg">
              A senior counsellor will connect with you shortly. No
              auto-dialler, no pre-recorded message — a real conversation with
              someone who knows the campuses.
            </p>

            <ul className="mt-6 md:mt-10 space-y-4 md:space-y-5">
              {[
                {
                  t: "30-minute, free, no obligation",
                  d: "We answer your questions first. The pitch — if any — comes much later.",
                },
                {
                  t: "Honest comparisons across active university pages",
                  d: "If a university isn't a fit, we'll say so. We focus on the pages currently open for counselling.",
                },
                {
                  t: "Guidance on scholarships and fee structures based on eligibility",
                  d: "We help you understand relevant merit and category criteria before you apply.",
                },
                {
                  t: "Guidance and support throughout the admission process",
                  d: "Documents, interview prep, hostel information, and fee steps — we guide you through the process.",
                },
              ].map((b) => (
                <li key={b.t} className="flex gap-4">
                  <span className="accent-dot mt-1.5 flex-none" />
                  <div>
                    <p className="font-medium text-[color:var(--forest-deep)]">
                      {b.t}
                    </p>
                    <p className="text-sm mt-1 text-[color:var(--ink-soft)] leading-relaxed">
                      {b.d}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Right: Form ── */}
          <div className="lg:col-span-6">
            <Suspense fallback={null}>
              <LeadForm />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
