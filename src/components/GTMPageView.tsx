"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function GTMPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      const params = searchParams.toString();
      const url = params ? `${pathname}?${params}` : pathname;
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "page_view",
        page: url,
      });
    }
  }, [pathname, searchParams]);

  return null;
}
