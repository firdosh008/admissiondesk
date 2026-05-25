import Link from "next/link";
import Image from "next/image";
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
            <Link href="/" aria-label={SITE.name} className="inline-block">
              <span className="inline-block bg-white rounded-lg px-3 py-1.5">
                <Image
                  src="/logo.png"
                  alt={SITE.name}
                  width={260}
                  height={80}
                  className="h-16 w-auto"
                  style={{ width: "auto" }}
                />
              </span>
            </Link>
            <p className="mt-3 text-sm text-[color:var(--ivory)]/60 max-w-sm leading-relaxed">
              admissiondesk is an MOU-authorised admission and counselling
              partner of 4+ Universities in Uttarakhand. Students who apply through admissiondesk receive direct
              admission support, scholarship guidance, and zero-cost counselling.
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
                  <Link
                    href="/#programs"
                    className="hover:text-[color:var(--gold-soft)] transition-colors"
                  >
                    {p.title}
                  </Link>
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
                <Link
                  href="/#faq"
                  className="hover:text-[color:var(--gold-soft)] transition-colors"
                >
                  FAQ
                </Link>
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
            arrangements where applicable.
          </p>
          <p className="shrink-0">GST: 05DXGPP9903M2ZU</p>
        </div>
      </div>
    </footer>
  );
}
