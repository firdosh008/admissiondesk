"use client";

import { useEffect, useState } from "react";
import { CTA_BOOK_COUNSELLING, PAGE_CONTACTS } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { dispatchHomePopup } from "../HomeLeadPopup";

export function DBUUStickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!show}
      className={`fixed bottom-3 right-3 sm:bottom-5 sm:right-5 z-50 flex flex-col gap-2.5 transition-all duration-300 ${
        show
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <button
        type="button"
        onClick={dispatchHomePopup}
        style={{ background: "linear-gradient(135deg,#c1272d,#9c1c20)", color: "#fff", borderRadius: "999px", padding: "0.75rem 1.25rem", fontWeight: 700, fontSize: "0.875rem", display: "flex", alignItems: "center", gap: "0.5rem", boxShadow: "0 4px 24px -8px rgba(193,39,45,0.55)" }}
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
          <path d="M16.1 2.6a2.9 2.9 0 014.1 4.1L7.7 19.3l-4.1.7c-.7.1-1.2-.5-1.1-1.1l.7-4.1L16.1 2.6zM18.7 5.3a.9.9 0 00-1.3 0l-1 1 2.3 2.3 1-1a.9.9 0 000-1.3l-1-1zM6.3 15.3l-.4 2.6 2.6-.4 8.3-8.3-2.3-2.3-8.2 8.4z" />
        </svg>
        <span className="hidden sm:inline">{CTA_BOOK_COUNSELLING}</span>
      </button>
      <a
        href={`https://wa.me/${PAGE_CONTACTS.devBhoomi.whatsapp}?text=${encodeURIComponent(
          "Hi, I'd like free counselling for Dev Bhoomi Uttarakhand University admissions."
        )}`}
        className="btn-whatsapp shadow-[0_4px_24px_-8px_rgba(31,122,58,0.5)] text-sm py-3 px-3.5 sm:px-5"
        target="_blank"
        rel="noopener noreferrer"
        data-event="whatsapp_sticky_dbuu"
      >
        <WhatsAppIcon size={18} />
        <span className="hidden sm:inline">Chat with a counsellor</span>
      </a>
    </div>
  );
}
