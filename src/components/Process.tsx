import { PROCESS } from "@/lib/constants";

export function Process() {
  return (
    <section id="process" className="section">
      <div className="container-x py-12 md:py-24 lg:py-32">
        {/* ── Header ── */}
        <header className="max-w-3xl mb-8 md:mb-16">
          <p className="eyebrow">How counselling works</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 leading-[1.02] text-[color:var(--forest-deep)]">
            Four steps,{" "}
            <span className="font-italic-serif">one straight line</span> from
            interest to admit.
          </h2>
        </header>

        {/* ── Steps ── */}
        <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-5 relative">
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
              <div className="relative mb-4 sm:mb-6">
                <div className="relative inline-flex w-16 h-16 sm:w-20 sm:h-20 items-center justify-center rounded-full bg-[color:var(--ivory)] border-2 border-[color:var(--gold)]/40 ring-4 ring-[color:var(--ivory-deep)]/30 shadow-[0_0_0_8px_rgba(232,237,232,0.4)]">
                  <span className="font-display text-xl sm:text-2xl text-[color:var(--forest-deep)]">
                    {s.number}
                  </span>
                </div>
              </div>

              {/* Duration badge */}
              <span className="text-[10px] tracking-[0.24em] uppercase text-[color:var(--gold-deep)] font-semibold mb-4">
                {s.duration}
              </span>

              {/* Content */}
              <h3 className="font-display text-xl sm:text-2xl leading-tight text-[color:var(--forest-deep)]">
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
