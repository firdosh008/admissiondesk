"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, params: Record<string, unknown>) => string;
      reset: (id: string) => void;
      remove: (id: string) => void;
    };
    onTurnstileLoad?: () => void;
  }
}

type Props = {
  onToken: (token: string) => void;
  onExpire?: () => void;
  onError?: () => void;
};

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

export function TurnstileWidget({ onToken, onExpire, onError }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  // Stable refs so Turnstile callbacks never close over stale state
  const cbRefs = useRef({ onToken, onExpire, onError });
  cbRefs.current = { onToken, onExpire, onError };

  useEffect(() => {
    if (!SITE_KEY || !containerRef.current) return;

    const doRender = () => {
      if (!containerRef.current || widgetIdRef.current !== null) return;
      widgetIdRef.current = window.turnstile!.render(containerRef.current, {
        sitekey: SITE_KEY,
        callback: (token: string) => cbRefs.current.onToken(token),
        "expired-callback": () => cbRefs.current.onExpire?.(),
        "error-callback": () => cbRefs.current.onError?.(),
        theme: "light",
        size: "normal",
      });
    };

    if (window.turnstile) {
      doRender();
    } else {
      if (!document.querySelector("script[data-cf-turnstile]")) {
        const script = document.createElement("script");
        script.src =
          "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad&render=explicit";
        script.async = true;
        script.defer = true;
        script.dataset.cfTurnstile = "1";
        document.head.appendChild(script);
      }
      // Chain callbacks so multiple widgets on the same page all get rendered
      const prev = window.onTurnstileLoad;
      window.onTurnstileLoad = () => {
        prev?.();
        doRender();
      };
    }

    return () => {
      if (widgetIdRef.current !== null && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, []);

  if (!SITE_KEY) return null;

  return <div ref={containerRef} />;
}
