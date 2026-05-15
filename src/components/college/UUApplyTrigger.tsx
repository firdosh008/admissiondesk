"use client";

import { dispatchHomePopup } from "../HomeLeadPopup";

export function UUApplyTrigger({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <button
      type="button"
      className={className}
      onClick={dispatchHomePopup}
    >
      {children}
    </button>
  );
}
