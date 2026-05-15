import { PROGRAMS } from "@/lib/constants";

export function Programs() {
  return (
    <section
      id="programs"
      className="section bg-[color:var(--parchment)]/60 border-y border-[color:var(--rule-soft)]"
    >
      <div className="container-x py-20 md:py-28">
        <header className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7">
            <p className="eyebrow">Programmes we counsel for</p>
            <h2 className="font-display text-4xl md:text-6xl mt-4 leading-[1.02] text-[color:var(--forest-deep)]">
              From engineering and law{" "}
              <span className="font-italic-serif">
                to design and pharmacy.
              </span>
            </h2>
          </div>
          <p className="md:col-span-5 text-lg text-[color:var(--ink-soft)] leading-relaxed">
            Six programme families, 200+ options, active university pages - and
            one counsellor who knows the difference between them all.
          </p>
        </header>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[color:var(--rule)] rounded-2xl overflow-hidden border border-[color:var(--rule)]">
          {PROGRAMS.map((p, i) => (
            <article
              key={p.slug}
              className="bg-[color:var(--cream)] p-8 flex flex-col gap-5 group hover:bg-[color:var(--ivory)] transition-colors"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display italic text-2xl text-[color:var(--gold-deep)]">
                  0{i + 1}.
                </span>
                <span className="text-[10px] tracking-[0.22em] uppercase text-[color:var(--muted)]">
                  {p.durations}
                </span>
              </div>
              <h3 className="font-display text-2xl leading-tight text-[color:var(--forest-deep)]">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-[color:var(--ink-soft)]">
                {p.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-2">
                {p.examples.map((e) => (
                  <span key={e} className="tag">
                    {e}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-[color:var(--muted)]">
          Don&apos;t see what you&apos;re looking for?{" "}
          <a
            href="#counselling"
            className="text-[color:var(--forest-deep)] underline underline-offset-4 decoration-[color:var(--gold)] hover:text-[color:var(--moss)]"
          >
            Ask a counsellor
          </a>{" "}
          - we cover active programmes across Uttaranchal University and Graphic Era.
        </p>
      </div>
    </section>
  );
}
