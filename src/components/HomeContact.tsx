import { ADMISSION_DECISION_DISCLAIMER, INDEPENDENCE_DISCLAIMER, SITE } from "@/lib/site";

const contactItems = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.64 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.06 6.06l1.14-1.14a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: "Phone",
    value: SITE.phone,
    href: `tel:${SITE.phone.replace(/[^+\d]/g, "")}`,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Address",
    value: SITE.address.formatted,
    href: undefined as string | undefined,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><line x1="12" y1="12" x2="12" y2="16" /><line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    label: "GST Number",
    value: SITE.gstNumber,
    href: undefined as string | undefined,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M20 21a8 8 0 0 0-16 0" /><circle cx="12" cy="7" r="4" />
      </svg>
    ),
    label: "Proprietor",
    value: SITE.proprietor,
    href: undefined as string | undefined,
  },
];

export function HomeContact() {
  return (
    <section id="contact" className="section-light py-16 md:py-20">
      <div className="container-x">
        <p className="eyebrow">Reach Out</p>
        <h2 className="mt-4 font-display text-4xl text-[color:var(--forest-deep)] md:text-5xl">
          Contact Us
        </h2>
        <p className="mt-4 max-w-xl leading-7 text-[color:var(--ink-soft)]">
          We&apos;re here to help you make the best academic decision. Get in
          touch today.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {contactItems.map(({ icon, label, value, href }) => (
            <div key={label} className="card-paper flex items-start gap-4 p-6">
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[color:var(--forest)]/10 text-[color:var(--forest-deep)]">
                {icon}
              </span>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    className="mt-1 block text-sm font-medium text-[color:var(--forest-deep)] transition-colors hover:text-[color:var(--moss)]"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="mt-1 text-sm font-medium text-[color:var(--forest-deep)]">
                    {value}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-xs leading-relaxed text-[color:var(--muted)]">
          Note: {INDEPENDENCE_DISCLAIMER} {ADMISSION_DECISION_DISCLAIMER}{" "}
          Trademarks used are owned by their respective owners.
        </p>
      </div>
    </section>
  );
}
