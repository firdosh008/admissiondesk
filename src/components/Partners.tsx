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
      <div className="container-x py-20 md:py-28">
        <header className="max-w-4xl">
          <p className="eyebrow">College counselling in Dehradun</p>
          <h2 className="font-display text-4xl md:text-6xl mt-4 leading-[1.02] text-[color:var(--forest-deep)]">
            We counsel for Dehradun colleges.{" "}
            <span className="font-italic-serif">
              These two get dedicated pages.
            </span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[color:var(--ink-soft)]">
            We help students compare course fit, fees, eligibility,
            scholarships, hostels, and application steps across Dehradun
            colleges. Uttaranchal University and Graphic Era are highlighted
            because their dedicated landing pages are live right now.
          </p>
        </header>

        <div className="mt-14 grid lg:grid-cols-2 gap-7">
          {VISIBLE_COLLEGES.map((college, index) => (
            <article
              key={college.slug}
              className="card-paper p-7 md:p-9 flex flex-col h-full border-2 border-[color:var(--gold)]/45"
            >
              <div className="flex items-start gap-5">
                <CollegeCrest
                  monogram={college.monogram}
                  size={88}
                  variant={variants[index]}
                />
                <div>
                  <p className="text-[11px] tracking-[0.22em] uppercase text-[color:var(--gold-deep)] font-semibold">
                    Featured landing page
                  </p>
                  <h3 className="mt-2 font-display text-2xl md:text-3xl leading-tight text-[color:var(--forest-deep)]">
                    {college.name}
                  </h3>
                  <p className="mt-1 text-sm text-[color:var(--muted)]">
                    Est. {college.established} · {college.city},{" "}
                    {college.programs} programmes
                    {college.schools ? ` · ${college.schools} schools` : ""}
                  </p>
                </div>
              </div>

              <ul className="mt-6 space-y-2 text-sm text-[color:var(--ink-soft)]">
                {college.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-[color:var(--gold)] flex-none" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 grid grid-cols-3 gap-4 py-5 border-y border-[color:var(--rule-soft)]">
                <div>
                  <p className="text-[10px] tracking-[0.22em] uppercase text-[color:var(--muted)]">
                    Highest pkg.
                  </p>
                  <p className="font-display text-xl text-[color:var(--forest-deep)] mt-1">
                    {college.highestPackage}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.22em] uppercase text-[color:var(--muted)]">
                    {college.placementRate ? "Placement" : "Programmes"}
                  </p>
                  <p className="font-display text-xl text-[color:var(--forest-deep)] mt-1">
                    {college.placementRate ?? `${college.programs}+`}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.22em] uppercase text-[color:var(--muted)]">
                    Recruiters
                  </p>
                  <p className="font-display text-xl text-[color:var(--forest-deep)] mt-1">
                    {college.topRecruiters.length}+
                  </p>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href={`/${college.slug}`}
                  className="btn-primary rounded-md py-3 px-5 text-sm"
                >
                  Open {college.shortName} landing page
                </Link>
                <a
                  href="#counselling"
                  className="btn-secondary rounded-md py-3 px-5 text-sm"
                >
                  Ask a counsellor
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-lg border border-[color:var(--rule)] bg-[color:var(--cream)] p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Also covered in counselling</p>
              <h3 className="mt-3 font-display text-3xl text-[color:var(--forest-deep)]">
                More Dehradun colleges students ask us about
              </h3>
            </div>
            <a href="#counselling" className="btn-primary rounded-md py-3 px-5 text-sm">
              Compare colleges
            </a>
          </div>
          <div className="mt-7 flex flex-wrap gap-2">
            {DEHRADUN_COUNSELLING_COLLEGES.map((college) => (
              <span key={college} className="tag bg-white/70">
                {college}
              </span>
            ))}
          </div>
          <p className="mt-5 text-xs leading-6 text-[color:var(--muted)]">
            These names are listed for counselling coverage and comparison.
            Dedicated landing-page buttons are currently active only for
            Uttaranchal University and Graphic Era.
          </p>
        </div>
      </div>
    </section>
  );
}
