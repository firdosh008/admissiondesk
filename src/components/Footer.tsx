import Link from "next/link";
import { SITE } from "@/lib/site";
import { PROGRAMS, VISIBLE_COLLEGES } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[color:var(--forest-ink)] text-[color:var(--ivory)]/85 mt-auto">
      {/* Top accent line */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-[color:var(--gold)]/40 to-transparent" />

      <div className="container-x py-16 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-4">
            <p className="font-display text-2xl text-[color:var(--ivory)] tracking-tight">
              {SITE.name}
            </p>
            <p className="mt-3 text-sm text-[color:var(--ivory)]/60 max-w-sm leading-relaxed">
              An independent admission counselling and career-guidance partner
              helping students apply to selected universities across
              Uttarakhand.
            </p>

            {/* Contact */}
            <div className="mt-7 space-y-2.5 text-sm">
              <p>
                <a
                  href={`tel:${SITE.phone.replace(/[^+\d]/g, "")}`}
                  className="hover:text-[color:var(--gold-soft)] transition-colors"
                >
                  {SITE.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="hover:text-[color:var(--gold-soft)] transition-colors"
                >
                  {SITE.email}
                </a>
              </p>
              <p className="text-[color:var(--ivory)]/55 text-xs leading-relaxed">
                {SITE.address.street}, {SITE.address.locality},{" "}
                {SITE.address.region} {SITE.address.postalCode}
              </p>
            </div>
          </div>

          {/* Universities */}
          <div className="lg:col-span-2">
            <p className="text-[10px] tracking-[0.22em] uppercase text-[color:var(--gold-soft)] mb-5 font-semibold">
              Universities
            </p>
            <ul className="space-y-2.5 text-sm">
              {VISIBLE_COLLEGES.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/${c.slug}`}
                    className="hover:text-[color:var(--gold-soft)] transition-colors"
                  >
                    {c.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programmes */}
          <div className="lg:col-span-3">
            <p className="text-[10px] tracking-[0.22em] uppercase text-[color:var(--gold-soft)] mb-5 font-semibold">
              Programmes
            </p>
            <ul className="space-y-2.5 text-sm">
              {PROGRAMS.map((p) => (
                <li key={p.slug}>
                  <a
                    href="#programs"
                    className="hover:text-[color:var(--gold-soft)] transition-colors"
                  >
                    {p.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-3">
            <p className="text-[10px] tracking-[0.22em] uppercase text-[color:var(--gold-soft)] mb-5 font-semibold">
              Company
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/about-us"
                  className="hover:text-[color:var(--gold-soft)] transition-colors"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/policies"
                  className="hover:text-[color:var(--gold-soft)] transition-colors"
                >
                  Policies
                </Link>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-[color:var(--gold-soft)] transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-[color:var(--gold-soft)] transition-colors"
                >
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-[color:var(--gold-soft)] transition-colors"
                >
                  Terms of service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-7 border-t border-[color:var(--ivory)]/8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-[color:var(--ivory)]/45">
          <p className="max-w-xl leading-relaxed">
            &copy; {year} {SITE.name}. All rights reserved. Admission
            counselling and application assistance partner under formal
            arrangements where applicable; not an official university website.
          </p>
          <div className="flex gap-5">
            {[
              { label: "Instagram", href: SITE.social.instagram },
              { label: "Facebook", href: SITE.social.facebook },
              { label: "LinkedIn", href: SITE.social.linkedin },
              { label: "YouTube", href: SITE.social.youtube },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[color:var(--gold-soft)] transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
