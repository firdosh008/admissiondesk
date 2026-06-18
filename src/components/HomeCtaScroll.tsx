"use client";

import { useEffect } from "react";
import { HOME_POPUP_EVENT } from "./HomeLeadPopup";

/**
 * Home page only: the popup is removed here, so the shared CTAs that fire
 * HOME_POPUP_EVENT (Header, Hero, CTABand, Partners) instead smooth-scroll to
 * the inline Counselling form. Landing pages keep mounting HomeLeadPopup, so
 * their CTAs still open the modal.
 */
export function HomeCtaScroll() {
  useEffect(() => {
    const handler = () => {
      document
        .getElementById("counselling")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    window.addEventListener(HOME_POPUP_EVENT, handler);
    return () => window.removeEventListener(HOME_POPUP_EVENT, handler);
  }, []);

  return null;
}
