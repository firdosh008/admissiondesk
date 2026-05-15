import { STATS } from "@/lib/constants";

export function Stats() {
  return (
    <section className="section bg-[color:var(--forest-deep)] text-[color:var(--ivory)]">
      <div className="container-x py-14 md:py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="eyebrow text-[color:var(--gold-soft)]">By the numbers</p>
            <h2 className="font-display text-3xl md:text-5xl mt-3 leading-tight">
              Outcomes you can ask the
              <br className="hidden sm:block" />{" "}
              <span className="font-italic-serif">universities themselves about.</span>
            </h2>
          </div>
          <p className="text-sm text-[color:var(--ivory)]/70 max-w-sm">
            Figures are based on publicly reported 2025 placement highlights
            from active university pages. Outcomes vary by programme and
            individual.
          </p>
        </div>

        <dl className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[color:var(--gold)]/30 rounded-2xl overflow-hidden">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="bg-[color:var(--forest-deep)] p-7 md:p-9 flex flex-col gap-3"
            >
              <dt className="text-xs uppercase tracking-[0.22em] text-[color:var(--gold-soft)]">
                Verified
              </dt>
              <dd>
                <p className="font-display text-5xl md:text-6xl leading-none text-[color:var(--ivory)]">
                  {s.value}
                </p>
                <p className="mt-3 text-sm text-[color:var(--ivory)]/75 leading-relaxed">
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
