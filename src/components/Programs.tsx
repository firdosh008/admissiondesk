import { PROGRAMS } from "@/lib/constants";

export function Programs() {
  return (
    <section id="programs" className="section-parchment">
      <div className="container-x py-24 md:py-32">
        {/* ── Header ── */}
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
            Six programme families, 200+ options, active university pages — and
            one counsellor who knows the difference between them all.
          </p>
        </header>

        {/* ── Programme grid — cards with gap, not spreadsheet ── */}
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.map((p, i) => (
            <article
              key={p.slug}
              className="card-paper p-7 flex flex-col gap-5 group"
            >
              {/* Number + duration header */}
              <div className="flex items-baseline justify-between">
                <span className="number-callout">
                  {String(i + 1).padStart(2, "0")}.
                </span>
                <span className="text-[10px] tracking-[0.22em] uppercase text-[color:var(--muted)]">
                  {p.durations}
                </span>
              </div>

              <h3 className="font-display text-2xl leading-tight text-[color:var(--forest-deep)] group-hover:text-[color:var(--moss)] transition-colors">
                {p.title}
              </h3>

              <p className="text-sm leading-relaxed text-[color:var(--ink-soft)]">
                {p.description}
              </p>

              <div className="mt-auto flex flex-wrap gap-2 pt-3 border-t border-[color:var(--rule-soft)]">
                {p.examples.map((e) => (
                  <span key={e} className="tag bg-white/80">
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
            className="text-[color:var(--forest-deep)] underline underline-offset-4 decoration-[color:var(--gold)] hover:text-[color:var(--moss)] font-medium"
          >
            Ask a counsellor
          </a>{" "}
          — we cover active programmes across Uttaranchal University and Graphic Era.
        </p>
      </div>
    </section>
  );
}
