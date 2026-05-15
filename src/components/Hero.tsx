"use client";

import Link from "next/link";
import { COLLEGES } from "@/lib/constants";
import { CollegeCrest } from "./CollegeCrest";
import { dispatchHomePopup } from "./HomeLeadPopup";

const HERO_COLLEGES = COLLEGES.filter((c) =>
  ["uttaranchal-university", "graphic-era", "upes", "dev-bhoomi"].includes(c.slug)
);

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

            <h1 className="rise rise-2 mt-4 md:mt-6 font-display text-[clamp(2.2rem,6.5vw,5.5rem)] leading-[0.96] tracking-[-0.015em] text-[color:var(--forest-deep)]">
              The right university
              <br />
              starts with{" "}
              <span className="font-italic-serif text-[color:var(--forest)]">
                the right counsel.
              </span>
            </h1>

            <p className="rise rise-3 mt-5 md:mt-8 max-w-xl text-base md:text-lg leading-relaxed text-[color:var(--ink-soft)]">
              Free 1-on-1 admission counselling for{" "}
              <span className="swash-underline font-medium text-[color:var(--ink)]">
                Uttaranchal University and Graphic Era and more institutions in Dehradun.
              </span>{" "}
              Get course, scholarship and application guidance before you commit.
            </p>

            <div className="rise rise-4 mt-6 md:mt-9 flex flex-wrap gap-3">
              <button type="button" onClick={dispatchHomePopup} className="btn-primary text-sm md:text-base py-3 md:py-3.5 px-5 md:px-7">
                Get free counselling
              </button>
              <a href="#partners" className="btn-secondary text-sm md:text-base py-3 md:py-3.5 px-5 md:px-7">
                Explore Universities
              </a>
            </div>

            {/* Social proof row */}
            <div className="rise rise-5 mt-8 md:mt-12 flex flex-wrap items-center gap-x-5 sm:gap-x-8 gap-y-3">
              {[
                { value: "12,000+", label: "Aspirants counselled" },
                { value: "2", label: "Featured universities" },
                { value: "Free", label: "Student counselling" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <span className="accent-dot" />
                  <div>
                    <p className="font-display text-base md:text-lg leading-none text-[color:var(--forest-deep)]">
                      {stat.value}
                    </p>
                    <p className="text-xs text-[color:var(--muted)] mt-0.5">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: University cards — hidden on small, shown lg+ ── */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="relative grid grid-cols-2 gap-4 max-w-md lg:ml-auto">
              {HERO_COLLEGES.map((college, index) => (
                <Link
                  href={`/${college.slug}`}
                  key={college.slug}
                  className={`rise rise-${Math.min(index + 3, 6)} card-elevated p-4 flex flex-col items-start gap-2.5 group ${
                    index % 2 === 1 ? "translate-y-6" : ""
                  }`}
                >
                  <CollegeCrest
                    monogram={college.monogram}
                    size={52}
                    variant={index === 0 ? "shield" : "hex"}
                  />

                  <div>
                    <p className="font-display text-base leading-tight text-[color:var(--forest-deep)] group-hover:text-[color:var(--moss)] transition-colors">
                      {college.shortName}
                    </p>
                    <p className="text-[11px] tracking-[0.18em] uppercase text-[color:var(--muted)] mt-1">
                      Est. {college.established} · {college.city}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 mt-auto pt-2 border-t border-[color:var(--rule-soft)] w-full">
                    <span className="text-[10px] tracking-[0.16em] uppercase text-[color:var(--gold-deep)] font-semibold">
                      Highest package
                    </span>
                    <span className="font-display text-sm text-[color:var(--forest-deep)] ml-auto">
                      {college.highestPackage}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Decorative glow behind cards */}
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
