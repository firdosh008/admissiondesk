import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <section className="section-light">
      <div className="container-x py-12 md:py-24 lg:py-32">
        {/* ── Header ── */}
        <header className="max-w-3xl mb-8 md:mb-16">
          <p className="eyebrow">Student outcomes</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 leading-[1.02] text-[color:var(--forest-deep)]">
            Real students.{" "}
            <span className="font-italic-serif">Real results.</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-[color:var(--ink-soft)] leading-relaxed">
            Every story below is from a student we counselled. Outcomes are
            individual, and our role is to provide honest guidance.
          </p>
        </header>

        {/* ── Testimonial grid ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {TESTIMONIALS.map((t) => (
            <article
              key={`${t.name}-${t.program}`}
              className="card-elevated p-4 sm:p-5 md:p-7 flex flex-col"
            >
              {/* Quote */}
              <blockquote className="flex-1">
                <svg
                  className="text-[color:var(--gold)]/30 mb-3"
                  width="28"
                  height="24"
                  viewBox="0 0 32 28"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M0 16.4C0 10.8 2.8 5.6 8.4 0L12 4.4C8 8.4 6.4 11.6 6 14h6.8V28H0V16.4zM14.8 16.4c0-5.6 2.8-10.8 8.4-16.4L26.8 4.4c-4 4-5.6 7.2-6 9.6h6.8V28H14.8V16.4z" />
                </svg>
                <p className="text-sm leading-relaxed text-[color:var(--ink-soft)] italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>

              {/* Attribution */}
              <div className="mt-6 pt-5 border-t border-[color:var(--rule-soft)]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[color:var(--forest)] flex items-center justify-center flex-none">
                    <span className="text-xs font-semibold text-[color:var(--ivory)]">
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-sm text-[color:var(--forest-deep)]">
                      {t.name}
                    </p>
                    <p className="text-xs text-[color:var(--muted)]">
                      {t.city} · {t.program}
                    </p>
                  </div>
                </div>

                <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[color:var(--forest)]/8 border border-[color:var(--forest)]/15">
                  <span className="w-1 h-1 rounded-full bg-[color:var(--gold)]" />
                  <span className="text-[11px] font-medium text-[color:var(--forest-deep)]">
                    {t.outcome}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
