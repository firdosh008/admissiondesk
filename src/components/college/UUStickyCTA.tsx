"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";
import { POPUP_EVENT } from "./UULeadPopup";

export function UUStickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openPopup = () => {
    window.dispatchEvent(new Event(POPUP_EVENT));
  };

  return (
    <div
      className={`uu-sticky ${show ? "uu-sticky-on" : ""}`}
      aria-hidden={!show}
    >
      <a
        href={`https://wa.me/${SITE.whatsapp}?text=Hi%2C%20I%27d%20like%20admissions%20info%20for%20Uttaranchal%20University`}
        target="_blank"
        rel="noopener noreferrer"
        className="uu-sticky-btn uu-sticky-wa"
        aria-label="Chat on WhatsApp"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/colleges/uu/whatsapp.png"
          alt=""
          width="26"
          height="26"
          className="uu-sticky-wa-icon"
          aria-hidden
        />
        <span>WhatsApp</span>
      </a>
      <button
        type="button"
        className="uu-sticky-btn uu-sticky-apply"
        onClick={openPopup}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden>
          <path d="M16.1 2.6a2.9 2.9 0 014.1 4.1L7.7 19.3l-4.1.7c-.7.1-1.2-.5-1.1-1.1l.7-4.1L16.1 2.6zM18.7 5.3a.9.9 0 00-1.3 0l-1 1 2.3 2.3 1-1a.9.9 0 000-1.3l-1-1zM6.3 15.3l-.4 2.6 2.6-.4 8.3-8.3-2.3-2.3-8.2 8.4z" />
        </svg>
        <span>Apply Now</span>
      </button>
    </div>
  );
}
