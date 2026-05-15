"use client";

import { useMemo, useState } from "react";

type Programme = {
  name: string;
  level: "UG" | "PG" | "PhD" | "Diploma";
  stream: string;
  duration: string;
  intake: string;
};

const PROGRAMMES: Programme[] = [
  { name: "B.Tech Computer Science", level: "UG", stream: "Engineering", duration: "4 years", intake: "60 + 60 seats" },
  { name: "B.Tech AI / ML", level: "UG", stream: "Engineering", duration: "4 years", intake: "60 seats" },
  { name: "B.Tech Cyber Security", level: "UG", stream: "Engineering", duration: "4 years", intake: "60 seats" },
  { name: "B.Tech Civil", level: "UG", stream: "Engineering", duration: "4 years", intake: "60 seats" },
  { name: "B.Tech Mechanical", level: "UG", stream: "Engineering", duration: "4 years", intake: "60 seats" },
  { name: "BBA / BBA (Hons.)", level: "UG", stream: "Management", duration: "3–4 years", intake: "120 seats" },
  { name: "B.Com (Hons.)", level: "UG", stream: "Management", duration: "3 years", intake: "60 seats" },
  { name: "BA LLB", level: "UG", stream: "Law", duration: "5 years", intake: "60 seats" },
  { name: "BBA LLB", level: "UG", stream: "Law", duration: "5 years", intake: "60 seats" },
  { name: "BCA / BCA AI", level: "UG", stream: "Computer Applications", duration: "3 years", intake: "60 seats" },
  { name: "B.Pharm", level: "UG", stream: "Pharmacy", duration: "4 years", intake: "100 seats" },
  { name: "B.Sc. Nursing", level: "UG", stream: "Health Sciences", duration: "4 years", intake: "60 seats" },
  { name: "B.Sc. Agriculture", level: "UG", stream: "Agriculture", duration: "4 years", intake: "60 seats" },
  { name: "BA Journalism & Mass Comm.", level: "UG", stream: "Liberal Arts", duration: "3 years", intake: "60 seats" },
  { name: "M.Tech CSE / Civil", level: "PG", stream: "Engineering", duration: "2 years", intake: "18 seats" },
  { name: "MBA (Mktg / Fin / HR)", level: "PG", stream: "Management", duration: "2 years", intake: "120 seats" },
  { name: "MBA Business Analytics", level: "PG", stream: "Management", duration: "2 years", intake: "60 seats" },
  { name: "MCA", level: "PG", stream: "Computer Applications", duration: "2 years", intake: "60 seats" },
  { name: "M.Pharm", level: "PG", stream: "Pharmacy", duration: "2 years", intake: "30 seats" },
  { name: "LLM", level: "PG", stream: "Law", duration: "1 year", intake: "30 seats" },
  { name: "M.Sc. Agriculture", level: "PG", stream: "Agriculture", duration: "2 years", intake: "30 seats" },
  { name: "MA English", level: "PG", stream: "Liberal Arts", duration: "2 years", intake: "30 seats" },
  { name: "MPT", level: "PG", stream: "Health Sciences", duration: "2 years", intake: "20 seats" },
  { name: "PhD Engineering", level: "PhD", stream: "Engineering", duration: "3–5 years", intake: "Rolling" },
  { name: "PhD Management", level: "PhD", stream: "Management", duration: "3–5 years", intake: "Rolling" },
  { name: "PhD Pharmacy", level: "PhD", stream: "Pharmacy", duration: "3–5 years", intake: "Rolling" },
  { name: "PhD Law", level: "PhD", stream: "Law", duration: "3–5 years", intake: "Rolling" },
  { name: "PhD Agriculture", level: "PhD", stream: "Agriculture", duration: "3–5 years", intake: "Rolling" },
  { name: "Polytechnic Diploma", level: "Diploma", stream: "Engineering", duration: "3 years", intake: "60 seats" },
];

const LEVELS = ["All", "UG", "PG", "PhD", "Diploma"] as const;
const STREAMS = [
  "All",
  "Engineering",
  "Management",
  "Law",
  "Computer Applications",
  "Pharmacy",
  "Health Sciences",
  "Agriculture",
  "Design",
  "Liberal Arts",
];

export function UUProgramFinder() {
  const [level, setLevel] = useState<(typeof LEVELS)[number]>("All");
  const [stream, setStream] = useState<string>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return PROGRAMMES.filter((p) => {
      if (level !== "All" && p.level !== level) return false;
      if (stream !== "All" && p.stream !== stream) return false;
      if (query && !p.name.toLowerCase().includes(query.toLowerCase())) return false;
      return true;
    });
  }, [level, stream, query]);

  return (
    <div className="uu-finder">
      <div className="uu-finder-controls">
        <div className="uu-finder-tabs" role="tablist" aria-label="Programme level">
          {LEVELS.map((l) => (
            <button
              key={l}
              type="button"
              className={`uu-finder-tab ${level === l ? "uu-finder-tab-active" : ""}`}
              onClick={() => setLevel(l)}
              role="tab"
              aria-selected={level === l}
            >
              {l}
            </button>
          ))}
        </div>
        <div className="uu-finder-row">
          <label className="uu-finder-field">
            <span>Stream</span>
            <select value={stream} onChange={(e) => setStream(e.target.value)}>
              {STREAMS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </label>
          <label className="uu-finder-field uu-finder-search">
            <span>Search</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. B.Tech CSE, MBA, B.Pharm…"
            />
          </label>
        </div>
        <p className="uu-finder-count">
          Showing <strong>{filtered.length}</strong> of {PROGRAMMES.length} programmes
        </p>
      </div>

      <div className="uu-finder-results">
        {filtered.length === 0 ? (
          <div className="uu-finder-empty">
            <p>No programmes match these filters.</p>
            <button
              type="button"
              className="uu-btn-orange"
              onClick={() => {
                setLevel("All");
                setStream("All");
                setQuery("");
              }}
            >
              Reset filters
            </button>
          </div>
        ) : (
          filtered.map((p) => (
            <article key={p.name} className="uu-finder-card">
              <div className="uu-finder-card-head">
                <span className={`uu-finder-pill uu-finder-pill-${p.level.toLowerCase()}`}>
                  {p.level}
                </span>
                <span className="uu-finder-stream">{p.stream}</span>
              </div>
              <h3>{p.name}</h3>
              <div className="uu-finder-meta">
                <span>⏱ {p.duration}</span>
                <span>🪪 {p.intake}</span>
              </div>
              <a href="#apply" className="uu-finder-apply">
                Apply for this programme →
              </a>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
