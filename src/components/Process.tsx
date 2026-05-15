import { PROCESS } from "@/lib/constants";

export function Process() {
  return (
    <section id="process" className="section">
      <div className="container-x py-24 md:py-32">
        {/* ── Header ── */}
        <header className="max-w-3xl mb-16">
          <p className="eyebrow">How counselling works</p>
          <h2 className="font-display text-4xl md:text-6xl mt-4 leading-[1.02] text-[color:var(--forest-deep)]">
            Four steps,{" "}
            <span className="font-italic-serif">one straight line</span> from
            interest to admit.
          </h2>
        </header>

        {/* ── Steps ── */}
        <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-5 relative">
          {/* Connecting line — desktop only */}
          <div
            className="absolute top-10 left-[12%] right-[12%] hidden lg:block h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, var(--rule) 20%, var(--rule) 80%, transparent 100%)",
            }}
            aria-hidden="true"
          />

          {PROCESS.map((s) => (
            <li key={s.number} className="relative flex flex-col items-start">
              {/* Step marker */}
              <div className="relative mb-6">
                <div className="relative inline-flex w-20 h-20 items-center justify-center rounded-full bg-[color:var(--ivory)] border-2 border-[color:var(--gold)]/40 ring-4 ring-[color:var(--ivory-deep)]/30 shadow-[0_0_0_8px_rgba(240,231,207,0.3)]">
                  <span className="font-display text-2xl text-[color:var(--forest-deep)]">
                    {s.number}
                  </span>
                </div>
              </div>

              {/* Duration badge */}
              <span className="text-[10px] tracking-[0.24em] uppercase text-[color:var(--gold-deep)] font-semibold mb-4">
                {s.duration}
              </span>

              {/* Content */}
              <h3 className="font-display text-2xl leading-tight text-[color:var(--forest-deep)]">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--ink-soft)]">
                {s.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
