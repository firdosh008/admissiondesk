"use client";

import { dispatchHomePopup } from "./HomeLeadPopup";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";

export function CTABand() {
  return (
    <section className="section-dark">
      <div className="container-x py-16 md:py-20 relative z-10 text-center">
        <h2 className="font-display text-3xl md:text-5xl leading-[1.08] text-[color:var(--ivory)] max-w-3xl mx-auto">
          Not sure which college or programme{" "}
          <span className="font-italic-serif text-[color:var(--gold-soft)]">
            fits you best?
          </span>
        </h2>
        <p className="mt-4 text-[color:var(--ivory)]/70 text-lg max-w-xl mx-auto">
          A 30-minute call with a senior counsellor costs you nothing and could
          save you months of confusion.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button type="button" onClick={dispatchHomePopup} className="btn-primary bg-[color:var(--ivory)] text-[color:var(--forest-deep)] border-[color:var(--ivory)] hover:bg-[color:var(--cream)] text-base py-3.5 px-7">
            Get free counselling
          </button>
          <a
            href={`https://wa.me/918273625802?text=${encodeURIComponent(
              "Hi, I need help choosing a college."
            )}`}
            className="btn-whatsapp text-base py-3.5 px-7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={20} />
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
