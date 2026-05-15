"use client";

import { useEffect, useState } from "react";
import { UULeadForm } from "./UULeadForm";

const OPEN_DELAY_MS = 1200;
export const POPUP_EVENT = "open-uu-lead-popup";

export function UULeadPopup() {
  const [open, setOpen] = useState(false);

  const showPopup = () => setOpen(true);

  useEffect(() => {
    const t = window.setTimeout(showPopup, OPEN_DELAY_MS);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    window.addEventListener(POPUP_EVENT, showPopup);
    return () => window.removeEventListener(POPUP_EVENT, showPopup);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="uu-popup-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="uu-popup-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpen(false);
      }}
    >
      <div className="uu-popup-card">
        <button
          type="button"
          aria-label="Close"
          className="uu-popup-close"
          onClick={() => setOpen(false)}
        >
          ×
        </button>

        <div className="uu-popup-ribbon">
          <span>Early Bird Scholarship</span>
          <strong>up to 65%</strong>
        </div>

        <div className="uu-popup-body">
          <h3 id="uu-popup-title" className="uu-popup-title">
            Apply Now for 2026-27 Session
          </h3>
          <p className="uu-popup-sub">
            Share your details — a senior counsellor will reach out within
            24 hours with eligibility, scholarship slab and the document
            checklist.
          </p>

          <UULeadForm
            university="Uttaranchal University"
            buttonLabel="Submit Enquiry"
            successText="A senior Uttaranchal University admissions counsellor will reach out shortly with your eligibility, scholarship slab and document checklist."
            classes={{
              form: "space-y-3.5",
              field: "block",
              label:
                "block text-[13px] font-semibold text-[#444] mb-1.5",
              select:
                "w-full px-3.5 py-2.5 border border-[#d4d4d4] rounded-md bg-white text-[15px] text-[#222] focus:outline-none focus:border-[#4f46e5] focus:ring-2 focus:ring-[#4f46e5]/15",
              button:
                "w-full bg-[#4f46e5] hover:bg-[#3b35b5] text-white py-3 rounded-md font-semibold text-[15px] tracking-wide transition-colors",
              consent:
                "flex gap-2.5 items-start text-[12px] text-[#666] leading-snug",
              error: "text-xs text-[#b91c1c] mt-1",
              success:
                "p-6 rounded-md bg-[#fef3eb] border-l-4 border-[#f47b20]",
              successTitle: "font-bold text-lg text-[#222]",
            }}
          />
        </div>
      </div>
    </div>
  );
}
