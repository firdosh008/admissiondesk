"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { COLLEGES } from "@/lib/constants";
import { CollegeCrest } from "./CollegeCrest";
import { dispatchHomePopup } from "./HomeLeadPopup";

const COLLEGE_BG: Record<string, string> = {
  "uttaranchal-university": "/colleges/uu/bg-uu.png",
  "graphic-era": "/colleges/geu/bg-geu.webp",
  "upes": "/colleges/upes/bg_upes.avif",
  "dev-bhoomi": "/colleges/dbuu/dbuu-campus-img.webp",
};

// Pages that currently have a dedicated landing page
const HAS_PAGE = new Set(["uttaranchal-university", "graphic-era"]);

// Show 4–6 featured colleges only — no heavy data on the homepage
const DISPLAY_ORDER = ["uttaranchal-university", "graphic-era", "upes", "dev-bhoomi"];
const FEATURED_COLLEGES = [...COLLEGES]
  .filter((c) => DISPLAY_ORDER.includes(c.slug))
  .sort((a, b) => DISPLAY_ORDER.indexOf(a.slug) - DISPLAY_ORDER.indexOf(b.slug));

const variants: Array<"shield" | "hex"> = ["shield", "hex"];

export function Partners() {
  return (
    <section id="partners" className="section">
      <div className="container-x py-12 md:py-24 lg:py-32">
        {/* ── Header ── */}
        <header className="max-w-3xl mb-8 md:mb-14">
          <p className="eyebrow">Colleges we counsel for</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 leading-[1.04] text-[color:var(--forest-deep)]">
            Top colleges we{" "}
            <span className="font-italic-serif">work with.</span>
          </h2>
          <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-[color:var(--ink-soft)]">
            A handpicked network of Dehradun&apos;s leading universities. Get
            honest guidance on course fit, eligibility and scholarships — through
            a single free counselling call.
          </p>
        </header>

        {/* ── Featured college cards — logo + short info only ── */}
        <div className="grid sm:grid-cols-2 gap-5 md:gap-7">
          {FEATURED_COLLEGES.map((college, index) => {
            const bg = COLLEGE_BG[college.slug];
            const hasPage = HAS_PAGE.has(college.slug);

            const card = (
              <>
                {/* Banner */}
                <div className="relative h-40 sm:h-44 w-full flex-none">
                  {bg ? (
                    <Image
                      src={bg}
                      alt={college.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[color:var(--forest-deep)]" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/5" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end gap-3">
                    <CollegeCrest
                      monogram={college.monogram}
                      size={48}
                      variant={variants[index % variants.length]}
                    />
                    <div className="min-w-0">
                      <h3 className="font-display text-xl md:text-2xl leading-tight text-white drop-shadow">
                        {college.name}
                      </h3>
                      <p className="mt-0.5 text-xs text-white/75">
                        Est. {college.established} · {college.city}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Body — short info, no packages/recruiters */}
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <span className="inline-flex self-start items-center gap-1.5 px-2.5 py-1 rounded-full bg-[color:var(--forest)]/6 border border-[color:var(--forest)]/12 text-[10px] font-semibold text-[color:var(--forest-deep)] tracking-[0.04em]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--gold)]" />
                    {college.accreditation}
                  </span>
                  <p className="mt-4 text-sm leading-relaxed text-[color:var(--ink-soft)] flex-1">
                    {college.highlights[0]?.split("·")[0]?.trim() ??
                      `${college.programs}+ programmes across ${
                        college.schools ?? "multiple"
                      } schools.`}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--forest-deep)] group-hover:text-[color:var(--moss)] transition-colors">
                    {hasPage ? "Know more" : "Ask a counsellor"}
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </div>
                </div>
              </>
            );

            return hasPage ? (
              <Link
                key={college.slug}
                href={`/${college.slug}`}
                className="card-elevated group flex flex-col h-full overflow-hidden"
              >
                {card}
              </Link>
            ) : (
              <button
                key={college.slug}
                type="button"
                onClick={dispatchHomePopup}
                className="card-elevated group flex flex-col h-full overflow-hidden text-left"
              >
                {card}
              </button>
            );
          })}
        </div>

        {/* ── View all colleges ── */}
        <div className="mt-8 md:mt-12 flex justify-center">
          <button
            type="button"
            onClick={dispatchHomePopup}
            className="btn-secondary text-sm md:text-base py-3 md:py-3.5 px-6 md:px-8"
          >
            View All Colleges
          </button>
        </div>
      </div>
    </section>
  );
}
