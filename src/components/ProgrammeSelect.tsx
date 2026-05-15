"use client";

import { useState, useRef, useEffect } from "react";
import { getAllProgramsGrouped, getProgramCategory } from "@/lib/uuPrograms";

type Props = {
  id?: string;
  level: "UG" | "PG" | "";
  value: string;
  onChange: (program: string, category: string) => void;
};

export function ProgrammeSelect({ id, level, value, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const grouped = getAllProgramsGrouped(level as "UG" | "PG");

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const placeholder = !level
    ? "— Select level first —"
    : "— Select programme —";

  return (
    <div ref={ref} className="relative">
      <button
        id={id}
        type="button"
        disabled={!level}
        onClick={() => setOpen((o) => !o)}
        className="field-select text-left flex items-center justify-between w-full disabled:opacity-50 disabled:cursor-not-allowed"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={value ? "text-[color:var(--ink)]" : "text-[color:var(--muted)]"}>
          {value || placeholder}
        </span>
        <svg
          width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          className={`flex-none ml-2 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute z-50 left-0 right-0 mt-1 bg-[color:var(--ivory)] border border-[color:var(--rule-soft)] rounded-xl shadow-[var(--shadow-float)] max-h-56 overflow-y-auto"
        >
          {Object.entries(grouped)
            .filter(([cat, progs]) => cat !== "Other" && progs.some((p) => p !== "Other"))
            .map(([category, programs]) => (
              <div key={category}>
                <p className="px-3 pt-3 pb-1 text-[10px] tracking-[0.18em] uppercase font-semibold text-[color:var(--gold-deep)] sticky top-0 bg-[color:var(--ivory)]">
                  {category}
                </p>
                {programs
                  .filter((p) => p !== "Other")
                  .map((program) => (
                    <button
                      key={program}
                      type="button"
                      role="option"
                      aria-selected={value === program}
                      onClick={() => {
                        onChange(program, getProgramCategory(level as "UG" | "PG", program));
                        setOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                        value === program
                          ? "bg-[color:var(--forest-deep)] text-[color:var(--ivory)]"
                          : "text-[color:var(--ink)] hover:bg-[color:var(--cream)]"
                      }`}
                    >
                      {program}
                    </button>
                  ))}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
