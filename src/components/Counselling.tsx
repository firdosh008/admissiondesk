import { Suspense } from "react";
import { LeadForm } from "./LeadForm";

export function Counselling() {
  return (
    <section
      id="counselling"
      className="section bg-[color:var(--ivory-deep)]/60 border-y border-[color:var(--rule-soft)]"
    >
      <div className="container-x py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-6 lg:pr-8 lg:sticky lg:top-28">
            <p className="eyebrow">Talk to a counsellor</p>
            <h2 className="font-display text-4xl md:text-6xl mt-4 leading-[1.02] text-[color:var(--forest-deep)]">
              Tell us about you.
              <br />
              <span className="font-italic-serif">
                We&apos;ll bring the campus.
              </span>
            </h2>
            <p className="mt-6 text-lg text-[color:var(--ink-soft)] leading-relaxed">
              A senior counsellor will call you within the hour. No
              auto-dialler, no pre-recorded message — a real conversation with
              someone who knows the campuses.
            </p>

            <ul className="mt-8 space-y-4 text-[color:var(--ink-soft)]">
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
                  t: "Scholarship & fee-waiver mapping",
                  d: "Every merit and category slab you qualify for, surfaced before you apply.",
                },
                {
                  t: "End-to-end support until day-zero",
                  d: "Documents, interview prep, hostel allotment, fee deposit — we stay with you.",
                },
              ].map((b) => (
                <li key={b.t} className="flex gap-4">
                  <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-[color:var(--gold)] flex-none" />
                  <div>
                    <p className="font-medium text-[color:var(--forest-deep)]">
                      {b.t}
                    </p>
                    <p className="text-sm mt-1">{b.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

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
