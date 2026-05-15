/**
 * Uttaranchal University programme lists (from prospectus).
 * Cascading: Level → Category → Programme (with optional CSE track).
 */

export type UUProgramLevel = "UG" | "PG";

/* ── Category → Programmes mapping ── */

const UG_PROGRAMS_BY_CATEGORY: Record<string, string[]> = {
  "B.Tech": [
    "B.Tech Computer Science & Engineering — 4 Yrs",
    "B.Tech. (Hons.) CSE with specialization — 4 Yrs",
    "B.Tech Aerospace Engineering — 4 Yrs",
    "B.Tech Mechanical Engineering — 4 Yrs",
    "B.Tech Civil Engineering — 4 Yrs",
    "B.Tech ECE — 4 Yrs",
    "B.Tech CSE — Lateral Entry (all branches) — 3 Yrs",
    "B.Tech ME — Lateral Entry — 3 Yrs",
    "B.Tech CE — Lateral Entry — 3 Yrs",
    "B.Tech Aerospace — Lateral Entry — 3 Yrs",
  ],
  "B.Sc.": [
    "B.Sc. (IT)",
    "B.Sc.",
    "B.Sc. Data Science",
    "B.Sc. Life Science (CBZ)",
    "B.Sc. Mathematics",
    "B.Sc. Microbiology",
    "B.Sc. (Hons.) Agriculture — 4 Yrs",
    "B.Sc. Hotel & Hospitality Administration — 3 Yrs",
  ],
  "B.A.": [
    "Bachelor of Arts (B.A.)",
    "B.A. English",
    "B.A. Psychology",
    "BA in Journalism & Mass Communication",
    "Bachelor of Arts (BA) — Online — 3 Yrs",
  ],
  "BBA": [
    "BBA",
    "BBA — Online — 3 Yrs",
  ],
  "B.Com.": [
    "B.Com.",
  ],
  "BCA": [
    "BCA",
    "BCA — Online — 3 Yrs",
  ],
  Law: [
    "B.A.LL.B. (Hons.) — 5 Yrs",
    "BBA.LL.B. (Hons.) — 5 Yrs",
    "LL.B. (Hons.) — 3 Yrs",
  ],
  "Hotel Management": [
    "BHMCT — 4 Yrs",
    "BHMCT — Lateral Entry — 2 Yrs",
    "Diploma in Hotel Management — 2 Yrs",
    "Diploma in Hotel Management — Lateral Entry — 1 Yr",
    "Certificate Course in Hotel Management — 1 Yr",
  ],
  Pharmacy: [
    "B. Pharm. — 4 Yrs",
    "B. Pharm. (Lateral Entry) — 3 Yrs",
    "D. Pharm. — 2 Yrs",
  ],
  Paramedical: [
    "BOTT — 3 Yrs",
    "BMLT — 3 Yrs",
    "BMRIT — 3 Yrs",
    "BPT — 4 Yrs",
    "Bachelor of Optometry (B. Optom.) — 4 Yrs",
  ],
  Other: ["Other"],
} as const;

const PG_PROGRAMS_BY_CATEGORY: Record<string, string[]> = {
  "M.Tech": [
    "M.Tech Computer Science and Engineering — 2 Yrs",
    "M.Tech Thermal Engineering — 2 Yrs",
    "M.Tech Environmental Engineering — 2 Yrs",
    "M.Tech Construction Technology and Management — 2 Yrs",
    "M.Tech Energy Management and Sustainability — 2 Yrs",
  ],
  "M.Sc.": [
    "M.Sc. Ag.",
    "M.Sc. Biotechnology",
    "M.Sc. Food Technology",
    "M.Sc. Food Nutrition & Dietetics",
    "M.Sc. Chemistry",
    "M.Sc. Industrial Chemistry",
    "M.Sc. Mathematics",
    "M.Sc. Environmental Science",
    "M.Sc. Data Science",
    "M.Sc. Botany",
    "M.Sc. Zoology",
    "M.Sc. Forensic Science",
  ],
  "M.A.": [
    "M.A. English",
    "M.A. Clinical Psychology",
  ],
  MBA: [
    "MBA",
    "MBA (Executive)",
    "MBA — Online — 2 Yrs",
  ],
  MCA: [
    "MCA",
    "MCA — Online — 2 Yrs",
  ],
  "M.Pharm.": [
    "M. Pharm.",
  ],
  "MHA / MPH": [
    "MHA — Master of Hospital Administration — 2 Yrs",
    "MPH — Master of Public Health — 2 Yrs",
  ],
  Other: ["Other"],
} as const;

/* ── Public helpers ── */

export function getUUProgramCategories(level: UUProgramLevel | ""): string[] {
  if (!level) return [];
  const map = level === "UG" ? UG_PROGRAMS_BY_CATEGORY : PG_PROGRAMS_BY_CATEGORY;
  return Object.keys(map);
}

export function getUUProgramsByCategory(
  level: UUProgramLevel | "",
  category: string
): string[] {
  if (!level || !category) return [];
  const map = level === "UG" ? UG_PROGRAMS_BY_CATEGORY : PG_PROGRAMS_BY_CATEGORY;
  return map[category] ?? [];
}

/* ── Legacy flat list (kept for compatibility) ── */

export function getUUBaseProgramOptions(level: UUProgramLevel | ""): string[] {
  if (!level) return [];
  const map = level === "UG" ? UG_PROGRAMS_BY_CATEGORY : PG_PROGRAMS_BY_CATEGORY;
  const all = Object.values(map).flat();
  return [...new Set(all)].sort((a, b) => a.localeCompare(b));
}

/* ── CSE specialization / track helpers ── */

const UG_CSE_PARENT_PROGRAMMES = new Set<string>([
  "B.Tech Computer Science & Engineering — 4 Yrs",
  "B.Tech. (Hons.) CSE with specialization — 4 Yrs",
  "B.Tech CSE — Lateral Entry (all branches) — 3 Yrs",
]);

const PG_CSE_PARENT_PROGRAMMES = new Set<string>([
  "M.Tech Computer Science and Engineering — 2 Yrs",
]);

export const UG_CSE_SPECIALIZATION_TRACKS = [
  "B.Tech. (Hons.) CSE — Cloud Computing",
  "B.Tech. (Hons.) CSE — Big Data Analytics",
  "B.Tech. (Hons.) CSE — AI & ML",
  "B.Tech. (Hons.) CSE — Cyber Security",
] as const;

export const PG_CSE_SPECIALIZATION_TRACKS = [
  "M.Tech Computer Science and Engineering — AI & ML",
  "M.Tech Computer Science and Engineering — Big Data Analytics",
  "M.Tech Computer Science and Engineering — Cloud Computing",
  "M.Tech Computer Science and Engineering — Cyber Security",
] as const;

export function isUUCseParentProgramme(
  level: UUProgramLevel | "",
  programme: string
): boolean {
  if (!level || !programme) return false;
  const set =
    level === "UG" ? UG_CSE_PARENT_PROGRAMMES : PG_CSE_PARENT_PROGRAMMES;
  return set.has(programme);
}

export function getUUCseSpecializationTracks(
  level: UUProgramLevel | "",
  programme: string
): readonly string[] {
  if (!isUUCseParentProgramme(level, programme)) return [];
  return level === "UG"
    ? UG_CSE_SPECIALIZATION_TRACKS
    : PG_CSE_SPECIALIZATION_TRACKS;
}
