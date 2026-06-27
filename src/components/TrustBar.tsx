import { Users, CalendarClock, Building2, BadgeIndianRupee } from "lucide-react";

const TRUST_ITEMS = [
  { icon: Users, value: "12,000+", label: "Students Guided" },
  { icon: CalendarClock, value: "5+ Years", label: "Experience" },
  { icon: Building2, value: "Top Colleges", label: "Network" },
  { icon: BadgeIndianRupee, value: "No Hidden", label: "Charges" },
];

export function TrustBar() {
  return (
    <section
      aria-label="Why students trust admissiondesk"
      className="section-light border-y border-[color:var(--rule-soft)]"
    >
      <div className="container-x py-7 md:py-9">
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 md:gap-6">
          {TRUST_ITEMS.map(({ icon: Icon, value, label }) => (
            <li
              key={label}
              className="flex items-center gap-3 md:justify-center md:gap-4"
            >
              <span className="inline-flex h-11 w-11 md:h-12 md:w-12 flex-none items-center justify-center rounded-full bg-[color:var(--forest)]/8 border border-[color:var(--forest)]/12 text-[color:var(--forest-deep)]">
                <Icon size={20} strokeWidth={1.8} aria-hidden />
              </span>
              <div className="min-w-0">
                <p className="font-display text-base md:text-lg leading-tight text-[color:var(--forest-deep)]">
                  {value}
                </p>
                <p className="text-xs md:text-sm text-[color:var(--muted)] leading-tight">
                  {label}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
