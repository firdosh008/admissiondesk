import { FAQS } from "@/lib/constants";

export function FAQ() {
  return (
    <section id="faq" className="section">
      <div className="container-x py-12 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12">
          {/* ── Left: Header ── */}
          <header className="lg:col-span-4">
            <p className="eyebrow">Frequently asked</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mt-4 leading-[1.02] text-[color:var(--forest-deep)]">
              Questions{" "}
              <span className="font-italic-serif">parents and students</span>{" "}
              ask us first.
            </h2>
            <p className="mt-5 text-[color:var(--ink-soft)] leading-relaxed">
              Can&apos;t find what you&apos;re looking for? Send us a WhatsApp
              and a counsellor will reply within 5 minutes.
            </p>
          </header>

          {/* ── Right: FAQ accordion ── */}
          <div className="lg:col-span-8">
            <div className="divide-y divide-[color:var(--rule-soft)] border-y border-[color:var(--rule-soft)]">
              {FAQS.map((f, i) => (
                <details
                  key={f.q}
                  className="group py-4 sm:py-6"
                  open={i === 0}
                >
                  <summary className="flex items-start justify-between gap-3 sm:gap-6 cursor-pointer list-none">
                    <h3 className="font-display text-base sm:text-lg md:text-xl lg:text-2xl text-[color:var(--forest-deep)] leading-snug pr-2 group-hover:text-[color:var(--moss)] transition-colors">
                      {f.q}
                    </h3>
                    <span className="mt-0.5 flex-none inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[color:var(--rule)] text-[color:var(--forest-deep)] group-open:rotate-45 transition-transform duration-300 group-hover:border-[color:var(--gold)] group-hover:text-[color:var(--gold-deep)]">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        aria-hidden="true"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 max-w-3xl text-[color:var(--ink-soft)] leading-relaxed text-sm md:text-base">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
