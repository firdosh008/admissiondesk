import { PROCESS } from "@/lib/constants";

export function Process() {
  return (
    <section id="process" className="section">
      <div className="container-x py-20 md:py-28">
        <header className="max-w-3xl mb-14">
          <p className="eyebrow">How counselling works</p>
          <h2 className="font-display text-4xl md:text-6xl mt-4 leading-[1.02] text-[color:var(--forest-deep)]">
            Four steps,{" "}
            <span className="font-italic-serif">one straight line</span> from
            interest to admit.
          </h2>
        </header>

        <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="absolute top-8 left-0 right-0 hidden lg:block h-px bg-[color:var(--rule)]" aria-hidden="true" />
          {PROCESS.map((s) => (
            <li key={s.number} className="relative">
              <div className="flex items-center gap-4 mb-5">
                <div className="relative inline-flex w-16 h-16 items-center justify-center rounded-full bg-[color:var(--ivory)] border border-[color:var(--gold)]/60 ring-4 ring-[color:var(--ivory-deep)]/40">
                  <span className="font-display text-xl text-[color:var(--forest-deep)]">
                    {s.number}
                  </span>
                </div>
                <span className="text-[10px] tracking-[0.24em] uppercase text-[color:var(--gold-deep)] font-semibold">
                  {s.duration}
                </span>
              </div>
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
