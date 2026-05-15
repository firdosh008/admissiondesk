"use client";

import { useState } from "react";
import Image from "next/image";

type School = {
  id: string;
  name: string;
  programs: string[];
};

const SCHOOLS: School[] = [
  {
    id: "law",
    name: "Law College Dehradun",
    programs: [
      "BA LLB (Hons.) — 5 Years",
      "BBA LLB (Hons.) — 5 Years",
      "B.Com LLB (Hons.) — 5 Years",
      "LLB — 3 Years",
      "LLM (Constitutional / Corporate / Criminal) — 1 Year",
      "PhD in Law — 3–5 Years",
    ],
  },
  {
    id: "tech",
    name: "Uttaranchal Institute of Technology",
    programs: [
      "B.Tech Computer Science & Engineering — 4 Years",
      "B.Tech (Hons.) CSE with specialisation in:",
      "Cloud Computing — 4 Years",
      "Big Data Analytics — 4 Years",
      "Artificial Intelligence & Machine Learning — 4 Years",
      "Cyber Security — 4 Years",
      "B.Tech Civil Engineering — 4 Years",
      "B.Tech Aerospace Engineering — 4 Years",
      "B.Tech Mechanical Engineering — 4 Years",
      "B.Tech Electronics & Computer Engineering — 4 Years",
      "M.Tech Computer Science & Engineering — 2 Years",
      "M.Tech Environmental Engineering — 2 Years",
      "M.Tech Construction Technology & Management — 2 Years",
      "Executive M.Tech (Energy Management and Sustainability) — 2 Years",
      "M.Tech Thermal Engineering — 2 Years",
    ],
  },
  {
    id: "mgmt",
    name: "Uttaranchal Institute of Management",
    programs: [
      "BBA / BBA (Hons.) — 3–4 Years",
      "BBA in Business Analytics — 3 Years",
      "B.Com (Hons.) — 3 Years",
      "MBA — 2 Years (Marketing · HR · Finance · IT · Operations)",
      "MBA in Business Analytics — 2 Years",
      "MBA in Hospital & Healthcare Management — 2 Years",
      "PhD in Management — 3–5 Years",
    ],
  },
  {
    id: "pharma",
    name: "Uttaranchal Institute of Pharmaceutical Sciences",
    programs: [
      "Diploma in Pharmacy — 2 Years",
      "B.Pharm — 4 Years",
      "B.Pharm (Lateral Entry) — 3 Years",
      "M.Pharm Pharmaceutics — 2 Years",
      "M.Pharm Pharmacology — 2 Years",
      "M.Pharm Pharmaceutical Chemistry — 2 Years",
      "PhD in Pharmaceutical Sciences — 3–5 Years",
    ],
  },
];

export function UUProgramSidebar() {
  const [active, setActive] = useState(SCHOOLS[1].id);
  const school = SCHOOLS.find((s) => s.id === active) ?? SCHOOLS[1];

  return (
    <div className="uu2-finder">
      <div className="uu2-finder-grid">
        <div className="uu2-finder-aside">
          <h3 className="uu2-finder-h">
            Find a <span>Program</span>
          </h3>
          <ul className="uu2-finder-tabs" role="tablist">
            {SCHOOLS.map((s) => (
              <li key={s.id}>
                <button
                  type="button"
                  role="tab"
                  aria-selected={s.id === active}
                  className={`uu2-finder-tab ${s.id === active ? "is-active" : ""}`}
                  onClick={() => setActive(s.id)}
                >
                  <span aria-hidden>▸</span>
                  <span>{s.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="uu2-finder-list">
          <ul>
            {school.programs.map((p, i) => (
              <li key={`${school.id}-${i}`}>{p}</li>
            ))}
          </ul>
        </div>

        <div className="uu2-finder-photo">
          <Image
            src="/uu-new/girl.jpg"
            alt="Uttaranchal University student"
            width={900}
            height={1200}
            sizes="(max-width: 1024px) 100vw, 30vw"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}
