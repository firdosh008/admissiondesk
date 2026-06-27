import { ShieldCheck, UserCheck, Workflow, Eye } from "lucide-react";

const REASONS = [
  {
    icon: ShieldCheck,
    title: "Unbiased guidance",
    desc: "We recommend what fits you — not whoever pays the highest commission. Honest advice, always.",
  },
  {
    icon: UserCheck,
    title: "Experienced counsellors",
    desc: "Senior counsellors who have guided thousands of students across Uttarakhand's top colleges.",
  },
  {
    icon: Workflow,
    title: "End-to-end support",
    desc: "From the first call to your first day on campus, we stay with you through every step.",
  },
  {
    icon: Eye,
    title: "Transparent process",
    desc: "No hidden charges, no pressure, no fine print. You always know exactly where you stand.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-light">
      <div className="container-x py-12 md:py-24 lg:py-32">
        <header className="max-w-3xl mb-8 md:mb-16">
          <p className="eyebrow">Why students choose us</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 leading-[1.04] text-[color:var(--forest-deep)]">
            Guidance that puts{" "}
            <span className="font-italic-serif">you first.</span>
          </h2>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {REASONS.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="card-paper p-5 sm:p-6 md:p-7 flex flex-col items-start h-full"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--gold)]/12 border border-[color:var(--gold)]/25 text-[color:var(--gold-deep)]">
                <Icon size={22} strokeWidth={1.8} aria-hidden />
              </span>
              <h3 className="mt-4 font-display text-xl leading-tight text-[color:var(--forest-deep)]">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-soft)]">
                {desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
