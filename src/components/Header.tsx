"use client";

import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { dispatchHomePopup } from "./HomeLeadPopup";

type HeaderLink = {
  label: string;
  href: string;
};

type HeaderProps = {
  phone?: string;
  whatsapp?: string;
  applyLabel?: string;
  navLinks?: HeaderLink[];
};

const DEFAULT_NAV_LINKS: HeaderLink[] = [
  { label: "Universities", href: "#partners" },
  { label: "Programmes", href: "#programs" },
  { label: "How it works", href: "#process" },
  { label: "Placements", href: "#placements" },
  { label: "FAQ", href: "#faq" },
];

function cleanPhone(phone: string) {
  return phone.replace(/[^+\d]/g, "");
}

export function Header({
  phone = SITE.phone,
  whatsapp = SITE.whatsapp,
  applyLabel = "Apply Now",
  navLinks = DEFAULT_NAV_LINKS,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-40">
      {/* Top bar */}
      <div className="bg-[color:var(--forest-deep)] text-[color:var(--ivory)] text-xs">
        <div className="container-x flex items-center justify-between py-2">
          <p className="hidden md:block opacity-75">
            Admissions are open for our counselling partners. Talk to a
            counsellor today — no fees.
          </p>
          <p className="md:hidden opacity-75">
            Admissions open · Free counselling
          </p>
          <div className="flex items-center gap-4 text-[color:var(--ivory)]/80">
            <a
              href={`tel:${cleanPhone(phone)}`}
              className="hover:text-[color:var(--gold-soft)] transition-colors"
            >
              {phone}
            </a>
            <span className="opacity-20">|</span>
            <a
              href={`mailto:${SITE.email}`}
              className="hidden sm:inline hover:text-[color:var(--gold-soft)] transition-colors"
            >
              {SITE.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-[color:var(--ivory)]/90 backdrop-blur-lg border-b border-[color:var(--rule-soft)]">
        <div className="container-x flex items-center justify-between py-1.5">
          {/* Logo */}
          <Link href="/" className="flex items-center group" aria-label={SITE.name}>
            <Image
              src="/logo.png"
              alt={SITE.name}
              width={260}
              height={80}
              className="h-20 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          {navLinks.length > 0 ? (
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={`${link.href}-${link.label}`}
                  href={link.href}
                  className="px-3.5 py-2 text-sm font-medium text-[color:var(--ink-soft)] rounded-full hover:bg-[color:var(--cream)] hover:text-[color:var(--forest)] transition-all"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          ) : null}

          {/* CTAs */}
          <div className="flex items-center gap-2.5">
            <a
              href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(
                "Hi, I'd like to talk to a counsellor about admissions."
              )}`}
              className="hidden sm:inline-flex btn-whatsapp text-sm py-2.5 px-4"
              data-event="whatsapp_click"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={16} />
              WhatsApp
            </a>
            <button type="button" onClick={dispatchHomePopup} className="btn-primary text-sm py-2.5 px-5">
              {applyLabel}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
