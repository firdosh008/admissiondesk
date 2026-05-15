"use client";

import { useEffect, useState } from "react";

const PARAGRAPHS: string[] = [
  "Uttaranchal University was established in 2013 under the Uttaranchal University Act, 2012, as a UGC-recognised private university promoted by the Sushila Devi Centre for Professional Studies & Research. Its roots trace back to Law College Dehradun, founded in 2002, and it has since grown into a comprehensive multidisciplinary institution spanning law, engineering, management, pharmacy, agriculture, health and liberal arts.",
  "Our foundational philosophy is captured in the Sanskrit shloka “पदं हि सर्वत्र गुणैर्निधीयते” — “good qualities put their footprints everywhere.” We focus on experiential learning, research innovation and transformative education that prepares students for meaningful careers and societal contributions.",
  "Uttaranchal University holds NAAC accreditation with an “A+” Grade — placing the institution among India’s top 5% of higher education establishments. We host 8,000+ students across 100+ programmes, and our alumni network includes 73+ judges across state, national and international courts.",
  "Recent placement highlights include 750+ visiting companies, 7,000+ professionals employed globally, packages up to ₹1.50 crore international and ₹50 LPA domestic. The School of Pharmacy ranked 75th nationally in NIRF 2025, and the University features in QS World University Rankings: Asia 2026 and THE Impact Rankings.",
  "The institution maintains robust research infrastructure supporting 6,000+ paper publications with collaborations spanning 75 countries. Research focus areas include AI, IoT, nanotechnology, renewable energy, biotechnology and specialised domains in law, psychology and sustainable development — supported by dedicated innovation cells and industrial partnerships.",
];

export function UUAboutModal({ label = "Know More" }: { label?: string }) {
  const [open, setOpen] = useState(false);

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

  return (
    <>
      <button
        type="button"
        className="uu2-pill-cta"
        onClick={() => setOpen(true)}
      >
        {label} <span aria-hidden>→</span>
      </button>

      {open && (
        <div
          className="uu2-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="uu2-about-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="uu2-modal-card">
            <button
              type="button"
              aria-label="Close"
              className="uu2-modal-close"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
            <p className="uu2-modal-eyebrow">About Uttaranchal University</p>
            <h3 id="uu2-about-title" className="uu2-modal-title">
              For the Excellence within &ldquo;U&rdquo;
            </h3>
            <div className="uu2-modal-body">
              {PARAGRAPHS.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
