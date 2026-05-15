"use client";

import { useEffect, useState } from "react";
import { HomePopupForm } from "./HomePopupForm";

export const HOME_POPUP_EVENT = "open-home-lead-popup";

export function dispatchHomePopup() {
  window.dispatchEvent(new Event(HOME_POPUP_EVENT));
}

const OPEN_DELAY_MS = 1200;

export function HomeLeadPopup({ university }: { university?: string }) {
  const [open, setOpen] = useState(false);

  const showPopup = () => setOpen(true);

  useEffect(() => {
    const t = window.setTimeout(showPopup, OPEN_DELAY_MS);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    window.addEventListener(HOME_POPUP_EVENT, showPopup);
    return () => window.removeEventListener(HOME_POPUP_EVENT, showPopup);
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
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[color:var(--forest-ink)]/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="home-popup-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpen(false);
      }}
    >
      <div className="relative w-full max-w-lg max-h-[95vh] overflow-y-auto bg-[color:var(--cream)] rounded-2xl border border-[color:var(--rule-soft)] shadow-[0_1px_1px_rgba(8,36,32,0.06),0_12px_48px_-12px_rgba(8,36,32,0.3)]">
        <button
          type="button"
          aria-label="Close"
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full border border-[color:var(--rule)] bg-[color:var(--ivory)] text-[color:var(--ink-soft)] hover:bg-[color:var(--rule-soft)] transition-colors text-lg leading-none z-10"
          onClick={() => setOpen(false)}
        >
          &times;
        </button>

        {/* Ribbon */}
        <div className="flex items-center gap-2 px-5 py-3 rounded-t-2xl bg-[color:var(--forest-deep)] text-[color:var(--gold-soft)] text-xs font-semibold tracking-[0.12em] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--gold)] animate-pulse" />
          Free counselling · 2026-27 admissions open
        </div>

        <div className="p-4 sm:p-6 md:p-8">
          <h3 id="home-popup-title" className="font-display text-2xl md:text-3xl leading-tight text-[color:var(--forest-deep)]">
            Get free admission counselling
          </h3>
          <p className="mt-2 text-sm text-[color:var(--ink-soft)] leading-relaxed">
            Share your details and a senior counsellor will call within the hour —
            no fees, no obligation.
          </p>

          <div className="mt-6">
            <HomePopupForm
              university={university}
              onSuccess={() => setOpen(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
