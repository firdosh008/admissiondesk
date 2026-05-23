"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

export function ThankYouTracking({ college }: { college: string }) {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({ event: "thank_you", college });
    window.dataLayer.push({ event: "FormFilled", college });

    if (typeof window.gtag === "function") {
      window.gtag("event", "thank_you", { college });
      window.gtag("event", "FormFilled", { college });
    }
  }, [college]);

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-18158358558"
        strategy="afterInteractive"
      />
      <Script id="gads-thankyou" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-18158358558');`}
      </Script>
    </>
  );
}
