"use client";

import { useEffect } from "react";
import { ANALYTICS } from "@/lib/site";
import { buildUserData, loadAndSetFromThankYou } from "@/lib/enhanced-conversions";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

export function ThankYouTracking({ college }: { college: string }) {
  useEffect(() => {
    const ecData = loadAndSetFromThankYou();

    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({ event: "thank_you", college });
    window.dataLayer.push({ event: "FormFilled", college });

    if (typeof window.gtag === "function") {
      const adsId = ANALYTICS.googleAdsId;
      const label = ANALYTICS.googleAdsConversionLabel;
      if (adsId && label && ecData) {
        window.gtag("event", "conversion", {
          send_to: `${adsId}/${label}`,
          event_category: "Lead",
          event_label: "Thank You Page",
          user_data: buildUserData(ecData),
        });
      }

      window.gtag("event", "thank_you", { college });
      window.gtag("event", "FormFilled", { college });
    }
  }, [college]);

  return null;
}
