import { TOP_RECRUITERS, ADMITS } from "@/lib/constants";

export function Placements() {
  return (
    <section id="placements" className="section-dark">
      <div className="container-x py-24 md:py-32 relative z-10">
        <div className="grid lg:grid-cols-12 gap-14 items-start">
          {/* ── Left: Narrative ── */}
          <div className="lg:col-span-5">
            <p className="eyebrow text-[color:var(--gold-soft)]">
              Where graduates go
            </p>
            <h2 className="font-display text-4xl md:text-6xl mt-4 leading-[1.02] text-[color:var(--ivory)]">
              Hired at the
              <br />
              <span className="font-italic-serif text-[color:var(--gold-soft)]">
                companies that hire.
              </span>
            </h2>
            <p className="mt-6 text-[color:var(--ivory)]/75 text-lg leading-relaxed max-w-md">
              In 2025, active partner universities reported strong recruiter
              participation across{" "}
              <strong className="text-[color:var(--gold-soft)] font-semibold">
                800+ recruiters
              </strong>{" "}
              and made offers across consulting, tech, finance, energy, and
              public-sector employers.
            </p>

            {/* Key metrics */}
            <div className="mt-10 space-y-1">
              {[
                { label: "Highest package, 2025", value: "₹61.99 LPA" },
                { label: "Strong CSE outcomes", value: "₹42 LPA" },
                {
                  label: "Avg. placement rate (flagship programmes)",
                  value: "92%",
                },
              ].map((m) => (
                <div
                  key={m.label}
                  className="flex items-baseline justify-between py-4 border-b border-[color:var(--ivory)]/10"
                >
                  <span className="text-sm text-[color:var(--ivory)]/65">
                    {m.label}
                  </span>
                  <span className="font-display text-2xl text-[color:var(--gold-soft)]">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Recruiters + Admits ── */}
          <div className="lg:col-span-7">
            {/* Recruiter grid */}
            <p className="text-[10px] tracking-[0.32em] uppercase text-[color:var(--gold-soft)] mb-5">
              Recruiters across partner campuses
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {TOP_RECRUITERS.map((r) => (
                <div
                  key={r}
                  className="card-dark py-4 px-4 text-center hover:bg-[color:var(--ivory)]/10 transition-colors"
                >
                  <span className="font-display text-sm text-[color:var(--ivory)] tracking-wide">
                    {r}
                  </span>
                </div>
              ))}
            </div>

            {/* Recent admits */}
            <div className="mt-14">
              <p className="text-[10px] tracking-[0.32em] uppercase text-[color:var(--gold-soft)] mb-5">
                Recent admits we&apos;ve guided
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {ADMITS.map((a) => (
                  <div
                    key={`${a.initials}-${a.program}`}
                    className="card-dark px-5 py-4 hover:bg-[color:var(--ivory)]/10 transition-colors"
                  >
                    <p className="font-display text-xl leading-none text-[color:var(--ivory)]">
                      {a.initials}
                    </p>
                    <p className="text-[11px] text-[color:var(--ivory)]/55 mt-2 leading-relaxed">
                      {a.program}
                    </p>
                    <p className="text-[11px] text-[color:var(--gold-soft)] mt-1">
                      {a.university}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-[color:var(--ivory)]/45 mt-5">
                Initials shown to protect privacy. Placement and admission
                outcomes vary by individual candidate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
