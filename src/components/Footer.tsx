import Link from "next/link";
import { SITE } from "@/lib/site";
import { PROGRAMS, VISIBLE_COLLEGES } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[color:var(--forest-ink)] text-[color:var(--ivory)]/85 mt-auto">
      <div className="container-x py-16">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="font-display text-2xl text-[color:var(--ivory)]">
              {SITE.name}
            </p>
            <p className="mt-3 text-sm text-[color:var(--ivory)]/65 max-w-sm leading-relaxed">
              An independent admission counselling and career-guidance partner
              helping students apply to selected universities across
              Uttarakhand.
            </p>
            <div className="mt-6 space-y-2 text-sm">
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
              <p className="text-[color:var(--ivory)]/65">
                {SITE.address.street}, {SITE.address.locality},{" "}
                {SITE.address.region} {SITE.address.postalCode}
              </p>
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="text-[10px] tracking-[0.22em] uppercase text-[color:var(--gold-soft)] mb-4">
              Universities
            </p>
            <ul className="space-y-2 text-sm">
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

          <div className="md:col-span-3">
            <p className="text-[10px] tracking-[0.22em] uppercase text-[color:var(--gold-soft)] mb-4">
              Programmes
            </p>
            <ul className="space-y-2 text-sm">
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

          <div className="md:col-span-3">
            <p className="text-[10px] tracking-[0.22em] uppercase text-[color:var(--gold-soft)] mb-4">
              Company
            </p>
            <ul className="space-y-2 text-sm">
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

        <div className="mt-14 pt-7 border-t border-[color:var(--ivory)]/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-[color:var(--ivory)]/55">
          <p>
            © {year} {SITE.name}. All rights reserved. Admission counselling
            and application assistance partner under formal arrangements where
            applicable; not an official university website.
          </p>
          <div className="flex gap-5">
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[color:var(--gold-soft)]"
            >
              Instagram
            </a>
            <a
              href={SITE.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[color:var(--gold-soft)]"
            >
              Facebook
            </a>
            <a
              href={SITE.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[color:var(--gold-soft)]"
            >
              LinkedIn
            </a>
            <a
              href={SITE.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[color:var(--gold-soft)]"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
