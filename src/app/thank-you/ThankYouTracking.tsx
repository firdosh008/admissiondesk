"use client";

import { useEffect } from "react";
import { loadAndSetFromThankYou } from "@/lib/enhanced-conversions";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

export function ThankYouTracking({ college }: { college: string }) {
  useEffect(() => {
    loadAndSetFromThankYou();

    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({ event: "thank_you", college });
    window.dataLayer.push({ event: "FormFilled", college });

    if (typeof window.gtag === "function") {
      window.gtag("event", "thank_you", { college });
      window.gtag("event", "FormFilled", { college });
    }
  }, [college]);

  return null;
}
