"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { dispatchHomePopup } from "./HomeLeadPopup";

export function Hero() {
  return (
    <section className="section relative overflow-hidden">
      {/* Background atmosphere */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 900px 600px at 90% -10%, rgba(196,146,48,0.08), transparent 60%), radial-gradient(ellipse 700px 500px at 10% 90%, rgba(14,67,50,0.05), transparent 60%)",
        }}
      />

      <div className="container-x pt-10 pb-16 md:pt-5 md:pb-32 relative">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* ── Left: Headline block ── */}
          <div className="lg:col-span-7">
            <div className="rise rise-1">
              <span className="rule-ornament">
                Estd. {new Date().getFullYear() - 6} · Dehradun, Uttarakhand
              </span>
            </div>

            <h1 className="rise rise-2 mt-4 md:mt-6 font-display text-[clamp(2rem,5.2vw,4.4rem)] leading-[1.02] tracking-[-0.015em] text-[color:var(--forest-deep)]">
              Confused about your future?
              <br />
              Get unbiased college guidance from experts who put{" "}
              <span className="font-italic-serif text-[color:var(--forest)]">
                YOU first.
              </span>
            </h1>

            <p className="rise rise-3 mt-5 md:mt-7 max-w-xl text-base md:text-lg leading-relaxed text-[color:var(--ink-soft)]">
              We help students choose the right college, course, and career
              path —{" "}
              <span className="swash-underline font-medium text-[color:var(--ink)]">
                without pressure or bias.
              </span>
            </p>

            {/* Trust bullets */}
            <ul className="rise rise-4 mt-6 md:mt-7 flex flex-wrap gap-x-6 gap-y-2.5">
              {[
                "Free 1-on-1 Counselling",
                "12,000+ Students Guided",
                "100% Honest Advice",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2 text-sm md:text-base font-medium text-[color:var(--ink)]"
                >
                  <Check
                    size={18}
                    strokeWidth={2.5}
                    className="text-[color:var(--forest)]"
                    aria-hidden
                  />
                  {point}
                </li>
              ))}
            </ul>

            <div className="rise rise-5 mt-7 md:mt-9 flex flex-wrap gap-3">
              <button type="button" onClick={dispatchHomePopup} className="btn-primary text-sm md:text-base py-3 md:py-3.5 px-5 md:px-7">
                Get Free Counselling
              </button>
              <a href="#partners" className="btn-secondary text-sm md:text-base py-3 md:py-3.5 px-5 md:px-7">
                Explore Universities
              </a>
            </div>
          </div>

          {/* ── Right: Admission guidance image — hidden on small, shown lg+ ── */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="rise rise-3 relative max-w-xl lg:ml-auto lg:-mr-8 xl:-mr-16 overflow-hidden rounded-[24px] card-elevated p-0">
              <Image
                src="/hero-admission-guidance.png"
                alt="Admission counsellor guiding a student through top universities"
                width={1536}
                height={1024}
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Decorative glow behind image */}
            <div
              aria-hidden
              className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-[40px] opacity-30"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(196,146,48,0.10), transparent 70%)",
              }}
            />
          </div>
        </div>
      </div>

      <div className="hairline" />
    </section>
  );
}
