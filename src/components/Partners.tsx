import Link from "next/link";
import {
  DEHRADUN_COUNSELLING_COLLEGES,
  VISIBLE_COLLEGES,
} from "@/lib/constants";
import { CollegeCrest } from "./CollegeCrest";

const variants: Array<"shield" | "hex"> = ["shield", "hex"];

export function Partners() {
  return (
    <section id="partners" className="section">
      <div className="container-x py-24 md:py-32">
        {/* ── Header ── */}
        <header className="max-w-4xl">
          <p className="eyebrow">College counselling in Dehradun</p>
          <h2 className="font-display text-4xl md:text-6xl mt-4 leading-[1.02] text-[color:var(--forest-deep)]">
            We counsel for Dehradun colleges.{" "}
            <span className="font-italic-serif">
              These two get dedicated pages.
            </span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[color:var(--ink-soft)] max-w-3xl">
            We help students compare course fit, fees, eligibility,
            scholarships, hostels, and application steps across Dehradun
            colleges. Uttaranchal University and Graphic Era are highlighted
            because their dedicated landing pages are live right now.
          </p>
        </header>

        {/* ── Featured college cards ── */}
        <div className="mt-14 grid lg:grid-cols-2 gap-8">
          {VISIBLE_COLLEGES.map((college, index) => (
            <article
              key={college.slug}
              className="card-elevated p-8 md:p-10 flex flex-col h-full"
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
                    Highest pkg.
                  </p>
                  <p className="font-display text-xl text-[color:var(--forest-deep)] mt-1">
                    {college.highestPackage}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.18em] uppercase text-[color:var(--muted)]">
                    {college.placementRate ? "Placement" : "Programmes"}
                  </p>
                  <p className="font-display text-xl text-[color:var(--forest-deep)] mt-1">
                    {college.placementRate ?? `${college.programs}+`}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.18em] uppercase text-[color:var(--muted)]">
                    Recruiters
                  </p>
                  <p className="font-display text-xl text-[color:var(--forest-deep)] mt-1">
                    {college.topRecruiters.length}+
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href={`/${college.slug}`}
                  className="btn-primary text-sm py-3 px-5"
                >
                  Ask a counsellor
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* ── Also covered — college mini-cards grid ── */}
        <div className="mt-14">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-8">
            <div>
              <p className="eyebrow">Also covered in counselling</p>
              <h3 className="mt-3 font-display text-3xl text-[color:var(--forest-deep)]">
                More Dehradun colleges students ask us about
              </h3>
            </div>
            <a href="#counselling" className="btn-primary text-sm py-3 px-5">
              Compare all colleges
            </a>
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

              return (
                <div
                  key={college}
                  className={`flex items-center gap-3.5 px-4 py-3.5 rounded-xl border transition-all border-[color:var(--rule-soft)] bg-[color:var(--cream)] hover:border-[color:var(--rule)] hover:bg-[color:var(--ivory)]`}
                >
                  {/* College initial badge */}
                  <span
                    className={`inline-flex w-9 h-9 items-center justify-center rounded-full font-display text-[11px] font-semibold flex-none bg-[color:var(--forest)]/10 text-[color:var(--forest-deep)]`}
                  >
                    {initials}
                  </span>

                  <div className="min-w-0">
                    <p className="text-sm font-medium text-[color:var(--ink)] leading-snug truncate">
                      {college}
                    </p>
                    
                  </div>
                </div>
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
