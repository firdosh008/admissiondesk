"use client";

import { dispatchHomePopup } from "./HomeLeadPopup";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";

export function CTABand() {
  return (
    <section className="section-dark">
      <div className="container-x py-10 md:py-16 lg:py-20 relative z-10 text-center">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.08] text-[color:var(--ivory)] max-w-3xl mx-auto">
          Still confused?{" "}
          <span className="font-italic-serif text-[color:var(--gold-soft)]">
            Let&apos;s talk.
          </span>
        </h2>
        <p className="mt-4 text-[color:var(--ivory)]/70 text-base md:text-lg max-w-xl mx-auto">
          Get free expert guidance today. A 30-minute call with a senior
          counsellor costs you nothing — and could save you months of confusion.
        </p>
        <div className="mt-6 md:mt-8 flex flex-wrap justify-center gap-3">
          <button type="button" onClick={dispatchHomePopup} className="btn-primary bg-[color:var(--ivory)] text-[color:var(--forest-deep)] border-[color:var(--ivory)] hover:bg-[color:var(--cream)] text-sm md:text-base py-3 md:py-3.5 px-5 md:px-7">
            Book Free Counselling
          </button>
          <a
            href={`https://wa.me/918273625802?text=${encodeURIComponent(
              "Hi, I need help choosing a college."
            )}`}
            className="btn-whatsapp text-sm md:text-base py-3 md:py-3.5 px-5 md:px-7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={18} />
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
