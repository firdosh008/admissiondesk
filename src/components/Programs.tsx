"use client";

import { useState } from "react";
import { getAllProgramsGrouped } from "@/lib/uuPrograms";
import { dispatchHomePopup } from "./HomeLeadPopup";

export function Programs() {
  const [level, setLevel] = useState<"UG" | "PG">("UG");
  const grouped = getAllProgramsGrouped(level);

  return (
    <section id="programs" className="section-parchment">
      <div className="container-x py-12 md:py-24 lg:py-32">
        {/* Header */}
        <header className="grid md:grid-cols-12 gap-6 items-end mb-10 md:mb-14">
          <div className="md:col-span-7">
            <p className="eyebrow">Programmes we counsel for</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl mt-4 leading-[1.02] text-[color:var(--forest-deep)]">
              From engineering and law{" "}
              <span className="font-italic-serif">to design and pharmacy.</span>
            </h2>
          </div>
          <p className="md:col-span-5 text-base md:text-lg text-[color:var(--ink-soft)] leading-relaxed">
            Click any course below to get free counselling — fees, eligibility,
            scholarships and application steps, all in one call.
          </p>
        </header>

        {/* UG / PG tabs */}
        <div className="flex gap-2 mb-8">
          {(["UG", "PG"] as const).map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLevel(l)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all ${level === l
                  ? "bg-[color:var(--forest-deep)] text-[color:var(--ivory)] border-[color:var(--forest-deep)]"
                  : "bg-transparent text-[color:var(--ink-soft)] border-[color:var(--rule)] hover:border-[color:var(--forest)]/40 hover:text-[color:var(--forest-deep)]"
                }`}
            >
              {l === "UG" ? "UG — Undergraduate" : "PG — Postgraduate"}
            </button>
          ))}
        </div>

        {/* Course grid by category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(grouped)
            .filter(([, progs]) => progs.length > 0 && !(progs.length === 1 && progs[0] === "Other"))
            .map(([category, programs]) => (
              <div key={category} className="card-paper p-5 sm:p-6">
                <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[color:var(--gold-deep)] mb-4">
                  {category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {programs
                    .filter((p) => p !== "Other")
                    .map((program) => (
                      <button
                        key={program}
                        type="button"
                        onClick={dispatchHomePopup}
                        className="px-3.5 py-2 rounded-full text-sm border border-[color:var(--rule-soft)] bg-white/70 text-[color:var(--ink)] hover:bg-[color:var(--forest-deep)] hover:text-[color:var(--ivory)] hover:border-[color:var(--forest-deep)] transition-all"
                      >
                        {program}
                      </button>
                    ))}
                </div>
              </div>
            ))}
        </div>

        <p className="mt-8 text-center text-sm text-[color:var(--muted)]">
          Don&apos;t see your programme?{" "}
          <button
            type="button"
            onClick={dispatchHomePopup}
            className="text-[color:var(--forest-deep)] underline underline-offset-4 decoration-[color:var(--gold)] hover:text-[color:var(--moss)] font-medium"
          >
            Ask a counsellor
          </button>{" "}
          — we cover active programmes across all univeristy in Dehradun
        </p>
      </div>
    </section>
  );
}
