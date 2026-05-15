"use client";

import { POPUP_EVENT } from "./UULeadPopup";

export function UUApplyTrigger({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event(POPUP_EVENT))}
    >
      {children}
    </button>
  );
}
