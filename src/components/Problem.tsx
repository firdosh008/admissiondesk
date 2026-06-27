import { Layers, AlertTriangle, Users2, Compass } from "lucide-react";

const PAIN_POINTS = [
  {
    icon: Layers,
    title: "Too many options",
    desc: "Dozens of colleges, hundreds of courses — and no clear way to compare what actually fits you.",
  },
  {
    icon: AlertTriangle,
    title: "Fear of a wrong decision",
    desc: "One choice shapes the next four years. The pressure to not get it wrong is real.",
  },
  {
    icon: Users2,
    title: "Pressure from others",
    desc: "Friends, relatives and agents all push their own opinion — rarely yours.",
  },
  {
    icon: Compass,
    title: "Lack of proper guidance",
    desc: "Brochures and sales calls aren't advice. You deserve honest, unbiased direction.",
  },
];

export function Problem() {
  return (
    <section className="section-parchment">
      <div className="container-x py-12 md:py-24 lg:py-28">
        <header className="max-w-3xl mb-8 md:mb-14">
          <p className="eyebrow">We understand the struggle</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 leading-[1.04] text-[color:var(--forest-deep)]">
            Choosing the right college is confusing.{" "}
            <span className="font-italic-serif">We get it.</span>
          </h2>
        </header>

        <ul className="grid sm:grid-cols-2 gap-4 md:gap-6">
          {PAIN_POINTS.map(({ icon: Icon, title, desc }) => (
            <li key={title} className="card-paper p-5 sm:p-6 md:p-7 flex items-start gap-4">
              <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-full bg-[color:var(--gold)]/12 border border-[color:var(--gold)]/25 text-[color:var(--gold-deep)]">
                <Icon size={20} strokeWidth={1.8} aria-hidden />
              </span>
              <div>
                <h3 className="font-display text-lg md:text-xl leading-tight text-[color:var(--forest-deep)]">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-soft)]">
                  {desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
