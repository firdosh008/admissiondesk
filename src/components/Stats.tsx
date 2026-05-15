import { STATS } from "@/lib/constants";

export function Stats() {
  return (
    <section className="section-dark">
      <div className="container-x py-12 md:py-20 lg:py-28 relative z-10">
        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-8 md:mb-14">
          <div>
            <p className="eyebrow text-[color:var(--gold-soft)]">
              By the numbers
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl mt-3 leading-tight text-[color:var(--ivory)]">
              Outcomes you can ask the
              <br className="hidden sm:block" />{" "}
              <span className="font-italic-serif text-[color:var(--gold-soft)]">
                universities themselves about.
              </span>
            </h2>
          </div>
          <p className="text-sm text-[color:var(--ivory)]/60 max-w-sm">
            Figures are based on publicly reported 2025 placement highlights
            from active university pages. Outcomes vary by programme and
            individual.
          </p>
        </div>

        {/* ── Stats grid ── */}
        <dl className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="card-dark p-4 sm:p-6 md:p-8 flex flex-col gap-4 group hover:bg-[color:var(--ivory)]/8 transition-colors"
            >
              <dt className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--gold-soft)]/80">
                Verified
              </dt>
              <dd>
                <p className="font-display text-4xl md:text-5xl lg:text-6xl leading-none text-[color:var(--ivory)]">
                  {s.value}
                </p>
                <p className="mt-4 text-sm text-[color:var(--ivory)]/65 leading-relaxed">
                  {s.label}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
