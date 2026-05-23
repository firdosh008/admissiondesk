"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

export function GTMPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (!pathname) return;

    const params = searchParams.toString();
    const url = params ? `${pathname}?${params}` : pathname;
    const initial = isInitialMount.current;
    isInitialMount.current = false;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "page_view",
      page: url,
      page_path: url,
      page_location: typeof window !== "undefined" ? window.location.href : url,
      page_title: typeof document !== "undefined" ? document.title : undefined,
    });

    // Skip the initial mount: gtag('config', { send_page_view: true }) already
    // fires a page_view on first load. Only fire manually for SPA navigations,
    // which the head-loaded gtag config does not see.
    if (!initial && typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_path: url,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [pathname, searchParams]);

  return null;
}
