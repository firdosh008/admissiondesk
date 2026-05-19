"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

export function ThankYouTracking({ college }: { college: string }) {
  useEffect(() => {
    // Push to GTM dataLayer.
    // Requires a Custom Event trigger named "thank_you" in GTM to act on this.
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "thank_you", college });

    // Direct GA4 event — fires regardless of GTM trigger configuration.
    if (typeof window.gtag === "function") {
      window.gtag("event", "thank_you", { college });
    }
  }, [college]);

  return null;
}
