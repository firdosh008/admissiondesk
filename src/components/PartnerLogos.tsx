import { PARTNER_LOGOS } from "@/lib/constants";

export function PartnerLogos() {
  return (
    <section className="section">
      <div className="container-x py-16 md:py-20">
        <p className="text-center text-[10px] tracking-[0.32em] uppercase text-[color:var(--muted)] mb-10">
          Our counselling covers these institutions &amp; more
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {PARTNER_LOGOS.map((logo) => (
            <div
              key={logo.short}
              className="flex items-center gap-3 px-5 py-3 rounded-xl border border-[color:var(--rule-soft)] bg-[color:var(--cream)] hover:border-[color:var(--gold)]/40 transition-colors"
            >
              {/* Mini crest */}
              <span className="inline-flex w-8 h-8 items-center justify-center rounded-full bg-[color:var(--forest-deep)] font-display text-xs text-[color:var(--ivory)] flex-none">
                {logo.short.slice(0, 2)}
              </span>
              <span className="text-sm font-medium text-[color:var(--ink-soft)] whitespace-nowrap">
                {logo.name}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-[color:var(--muted)] mt-8">
          Dedicated landing pages currently active for Uttaranchal University
          &amp; Graphic Era
        </p>
      </div>

      <div className="hairline" />
    </section>
  );
}
