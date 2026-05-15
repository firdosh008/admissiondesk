"use client";

import Link from "next/link";
import {
  DEHRADUN_COUNSELLING_COLLEGES,
  COUNSELLING_COLLEGE_INFO,
  VISIBLE_COLLEGES,
} from "@/lib/constants";
import { CollegeCrest } from "./CollegeCrest";
import { dispatchHomePopup } from "./HomeLeadPopup";

const variants: Array<"shield" | "hex"> = ["shield", "hex"];

export function Partners() {
  return (
    <section id="partners" className="section">
      <div className="container-x py-12 md:py-24 lg:py-32">
        {/* ── Header ── */}
        <header className="max-w-4xl">
          <p className="eyebrow">College counselling in Dehradun</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 leading-[1.02] text-[color:var(--forest-deep)]">
            We counsel for Dehradun&apos;s{" "}
            <span className="font-italic-serif">
              top colleges and beyond.
            </span>
          </h2>
          <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-[color:var(--ink-soft)] max-w-3xl">
            Compare course fit, fees, eligibility, scholarships, hostels,
            and application steps across Dehradun&apos;s top institutions — all
            through a single, free counselling call.
          </p>
        </header>

        {/* ── Featured college cards ── */}
        <div className="mt-8 md:mt-14 grid lg:grid-cols-2 gap-5 md:gap-8">
          {VISIBLE_COLLEGES.map((college, index) => (
            <article
              key={college.slug}
              className="card-elevated p-4 sm:p-6 md:p-10 flex flex-col h-full"
            >
              {/* Card header */}
              <div className="flex items-start gap-5">
                <CollegeCrest
                  monogram={college.monogram}
                  size={72}
                  variant={variants[index]}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] tracking-[0.22em] uppercase text-[color:var(--gold-deep)] font-semibold">
                    Featured landing page
                  </p>
                  <h3 className="mt-2 font-display text-2xl md:text-3xl leading-tight text-[color:var(--forest-deep)]">
                    {college.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-[color:var(--muted)]">
                    Est. {college.established} · {college.city},{" "}
                    {college.programs} programmes
                    {college.schools ? ` · ${college.schools} schools` : ""}
                  </p>
                  {/* Accreditation badge */}
                  <span className="inline-flex mt-2 items-center gap-1.5 px-2.5 py-1 rounded-full bg-[color:var(--forest)]/6 border border-[color:var(--forest)]/12 text-[10px] font-semibold text-[color:var(--forest-deep)] tracking-[0.04em]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--gold)]" />
                    {college.accreditation}
                  </span>
                </div>
              </div>

              {/* Highlights */}
              <ul className="mt-7 space-y-3 text-sm text-[color:var(--ink-soft)]">
                {college.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="accent-dot mt-1.5 flex-none" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Stats row */}
              <div className="mt-7 grid grid-cols-3 gap-4 py-5 border-y border-[color:var(--rule-soft)]">
                <div>
                  <p className="text-[10px] tracking-[0.18em] uppercase text-[color:var(--muted)]">
                    Fees / year
                  </p>
                  <p className="font-display text-lg text-[color:var(--forest-deep)] mt-1">
                    {college.feesRange}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.18em] uppercase text-[color:var(--muted)]">
                    {college.averagePackage ? "Avg. pkg." : "Highest pkg."}
                  </p>
                  <p className="font-display text-lg text-[color:var(--forest-deep)] mt-1">
                    {college.averagePackage ?? college.highestPackage}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.18em] uppercase text-[color:var(--muted)]">
                    {college.placementRate ? "Placement" : "Programmes"}
                  </p>
                  <p className="font-display text-lg text-[color:var(--forest-deep)] mt-1">
                    {college.placementRate ?? `${college.programs}+`}
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href={`/${college.slug}`}
                  className="btn-primary text-sm py-3 px-5"
                >
                  Know more
                </Link>
                <button type="button" onClick={dispatchHomePopup} className="btn-secondary text-sm py-3 px-5">
                  Ask a counsellor
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* ── Also covered — college mini-cards grid ── */}
        <div className="mt-10 md:mt-14">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-6 md:mb-8">
            <div>
              <p className="eyebrow">Also covered in counselling</p>
              <h3 className="mt-3 font-display text-2xl sm:text-3xl text-[color:var(--forest-deep)]">
                More Dehradun colleges students ask us about
              </h3>
            </div>
            <button type="button" onClick={dispatchHomePopup} className="btn-primary text-sm py-3 px-5">
              Compare all colleges
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {DEHRADUN_COUNSELLING_COLLEGES.map((college, i) => {
              const initials = college
                .split(" ")
                .map((w) => w[0])
                .join("")
                .slice(0, 3)
                .toUpperCase();
              const isHighlighted = [
                "Uttaranchal University",
                "Graphic Era (Deemed to be University)",
              ].includes(college);

              const info = COUNSELLING_COLLEGE_INFO[college];

              return (
                <button
                  key={college}
                  type="button"
                  onClick={dispatchHomePopup}
                  className="flex flex-col gap-3 px-4 py-3.5 rounded-xl border transition-all text-left w-full border-[color:var(--rule-soft)] bg-[color:var(--cream)] hover:border-[color:var(--forest)]/30 hover:bg-[color:var(--ivory)] hover:shadow-sm cursor-pointer"
                >
                  {/* Name row */}
                  <div className="flex items-center gap-3">
                    <span className="inline-flex w-8 h-8 items-center justify-center rounded-full font-display text-[10px] font-semibold flex-none bg-[color:var(--forest)]/10 text-[color:var(--forest-deep)]">
                      {initials}
                    </span>
                    <p className="text-sm font-medium text-[color:var(--ink)] leading-snug">
                      {college}
                    </p>
                  </div>

                  {/* Stats row — 4 columns: fees · avg pkg · placed · NAAC */}
                  {info && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-2 gap-y-2 pt-2.5 border-t border-[color:var(--rule-soft)]">
                      {[
                        { label: "Fees/yr",  value: info.feesRange  },
                        { label: "Avg pkg",  value: info.avgPackage },
                        { label: "Placed",   value: info.placement  },
                        { label: "NAAC",     value: info.naac       },
                      ].map(({ label, value }) => (
                        <div key={label}>
                          <p className="text-[9px] tracking-[0.14em] uppercase text-[color:var(--muted)]">{label}</p>
                          <p className="mt-0.5 text-[11px] font-semibold text-[color:var(--forest-deep)] leading-tight">{value}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          <p className="mt-6 text-xs leading-6 text-[color:var(--muted)] text-center">
            Listed for counselling coverage and comparison. Dedicated landing
            pages with full details are currently active for Uttaranchal
            University and Graphic Era.
          </p>
        </div>
      </div>
    </section>
  );
}
