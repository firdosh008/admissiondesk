"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";

export function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 800);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!show}
      className={`fixed bottom-4 right-4 z-50 transition-all duration-300 ${
        show
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <a
        href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
          "Hi, I'd like counselling for university admissions."
        )}`}
        className="btn-whatsapp shadow-lg shadow-[color:rgba(31,122,58,0.35)] text-sm py-3 px-5"
        target="_blank"
        rel="noopener noreferrer"
        data-event="whatsapp_sticky"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.52 3.48A11.86 11.86 0 0012.04 0C5.5 0 .19 5.31.19 11.85c0 2.09.55 4.13 1.59 5.93L0 24l6.4-1.68a11.85 11.85 0 005.64 1.43h.01c6.54 0 11.85-5.31 11.85-11.85 0-3.17-1.23-6.15-3.48-8.42z" />
        </svg>
        Chat with a counsellor
      </a>
    </div>
  );
}
