"use client";

import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { dispatchHomePopup } from "./HomeLeadPopup";

type HeaderLink = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
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
  { label: "FAQ", href: "#faq" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
  {
    label: "Legal",
    href: "#",
    dropdown: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
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
          <div className="flex items-center gap-3 text-[color:var(--ivory)]/80">
            {/* Mobile: phone icon only */}
            <a
              href={`tel:${cleanPhone(phone)}`}
              className="sm:hidden hover:text-[color:var(--gold-soft)] transition-colors"
              aria-label={`Call ${phone}`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.64 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.06 6.06l1.14-1.14a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
            {/* Tablet+: full number */}
            <a
              href={`tel:${cleanPhone(phone)}`}
              className="hidden sm:inline hover:text-[color:var(--gold-soft)] transition-colors"
            >
              {phone}
            </a>
            <span className="hidden sm:inline opacity-20">|</span>
            <a
              href={`mailto:${SITE.email}`}
              className="hidden md:inline hover:text-[color:var(--gold-soft)] transition-colors"
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
          <Link href="/" className="flex shrink-0 items-center group" aria-label={SITE.name}>
            <Image
              src="/logo.png"
              alt={SITE.name}
              width={260}
              height={80}
              className="h-12 sm:h-14 md:h-16 max-w-[160px] sm:max-w-[200px] md:max-w-none"
              style={{ width: "auto" }}
              priority
            />
          </Link>

          {/* Desktop nav */}
          {navLinks.length > 0 ? (
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.label} className="relative group">
                    <button
                      type="button"
                      className="flex items-center gap-1 px-3.5 py-2 text-sm font-medium text-[color:var(--ink-soft)] rounded-full hover:bg-[color:var(--cream)] hover:text-[color:var(--forest)] transition-all"
                    >
                      {link.label}
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                    <div className="absolute top-full left-0 hidden group-hover:block pt-1 z-50 min-w-[160px]">
                      <div className="bg-[color:var(--ivory)] border border-[color:var(--rule-soft)] rounded-xl shadow-[var(--shadow-float)] py-1 overflow-hidden">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-2.5 text-sm text-[color:var(--ink-soft)] hover:bg-[color:var(--cream)] hover:text-[color:var(--forest-deep)] transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    key={`${link.href}-${link.label}`}
                    href={link.href}
                    className="px-3.5 py-2 text-sm font-medium text-[color:var(--ink-soft)] rounded-full hover:bg-[color:var(--cream)] hover:text-[color:var(--forest)] transition-all"
                  >
                    {link.label}
                  </a>
                )
              )}
            </nav>
          ) : null}

          {/* CTAs */}
          <div className="flex items-center gap-2.5">
            <a
              href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(
                "Hi, I'd like to talk to a counsellor about admissions."
              )}`}
              className="inline-flex btn-whatsapp text-sm py-2.5 px-2.5 sm:px-4"
              data-event="whatsapp_click"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
            >
              <WhatsAppIcon size={16} />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <button type="button" onClick={dispatchHomePopup} className="btn-primary text-sm py-2.5 px-2.5 sm:px-5" aria-label={applyLabel}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="sm:hidden" aria-hidden>
                <path d="M16.1 2.6a2.9 2.9 0 014.1 4.1L7.7 19.3l-4.1.7c-.7.1-1.2-.5-1.1-1.1l.7-4.1L16.1 2.6zM18.7 5.3a.9.9 0 00-1.3 0l-1 1 2.3 2.3 1-1a.9.9 0 000-1.3l-1-1zM6.3 15.3l-.4 2.6 2.6-.4 8.3-8.3-2.3-2.3-8.2 8.4z" />
              </svg>
              <span className="hidden sm:inline">{applyLabel}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
