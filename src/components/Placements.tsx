import { TOP_RECRUITERS, ADMITS } from "@/lib/constants";

export function Placements() {
  return (
    <section
      id="placements"
      className="section bg-[color:var(--forest-deep)] text-[color:var(--ivory)] relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #f6efde 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="container-x py-20 md:py-28 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="eyebrow text-[color:var(--gold-soft)]">
              Where graduates go
            </p>
            <h2 className="font-display text-4xl md:text-6xl mt-4 leading-[1.02]">
              Hired at the
              <br />
              <span className="font-italic-serif">companies that hire.</span>
            </h2>
            <p className="mt-6 text-[color:var(--ivory)]/80 text-lg leading-relaxed max-w-md">
              In 2025, active partner universities reported strong recruiter
              participation across{" "}
              <strong className="text-[color:var(--gold-soft)] font-semibold">
                800+ recruiters
              </strong>{" "}
              and made offers across consulting, tech, finance, energy, and
              public-sector employers.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-baseline justify-between border-b border-[color:var(--ivory)]/15 pb-3">
                <span className="text-sm text-[color:var(--ivory)]/70">
                  Highest package, 2025
                </span>
                <span className="font-display text-2xl text-[color:var(--gold-soft)]">
                  ₹61.99 LPA
                </span>
              </div>
              <div className="flex items-baseline justify-between border-b border-[color:var(--ivory)]/15 pb-3">
                <span className="text-sm text-[color:var(--ivory)]/70">
                  Strong CSE outcomes
                </span>
                <span className="font-display text-2xl text-[color:var(--gold-soft)]">
                  ₹42 LPA
                </span>
              </div>
              <div className="flex items-baseline justify-between border-b border-[color:var(--ivory)]/15 pb-3">
                <span className="text-sm text-[color:var(--ivory)]/70">
                  Average placement rate (flagship programmes)
                </span>
                <span className="font-display text-2xl text-[color:var(--gold-soft)]">
                  92%
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="text-[10px] tracking-[0.32em] uppercase text-[color:var(--gold-soft)] mb-5">
              Recruiters across partner campuses
            </p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-[color:var(--ivory)]/10 rounded-xl overflow-hidden">
              {TOP_RECRUITERS.map((r) => (
                <li
                  key={r}
                  className="bg-[color:var(--forest-deep)] py-5 px-3 text-center"
                >
                  <span className="font-display text-base text-[color:var(--ivory)] tracking-wide">
                    {r}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <p className="text-[10px] tracking-[0.32em] uppercase text-[color:var(--gold-soft)] mb-5">
                Recent admits we&apos;ve guided
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {ADMITS.map((a) => (
                  <div
                    key={`${a.initials}-${a.program}`}
                    className="rounded-lg border border-[color:var(--ivory)]/15 px-4 py-3"
                  >
                    <p className="font-display text-lg leading-none">
                      {a.initials}
                    </p>
                    <p className="text-[11px] text-[color:var(--ivory)]/65 mt-2">
                      {a.program}
                    </p>
                    <p className="text-[11px] text-[color:var(--gold-soft)] mt-1">
                      {a.university}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-[color:var(--ivory)]/55 mt-5">
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
