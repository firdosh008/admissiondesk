import { z } from "zod";
import { getUUCseSpecializationTracks } from "./uuPrograms";

export const STATES = [
  "Uttarakhand",
  "Uttar Pradesh",
  "Delhi",
  "Haryana",
  "Punjab",
  "Himachal Pradesh",
  "Rajasthan",
  "Bihar",
  "Madhya Pradesh",
  "Maharashtra",
  "Karnataka",
  "Tamil Nadu",
  "West Bengal",
  "Gujarat",
  "Kerala",
  "Andhra Pradesh",
  "Telangana",
  "Odisha",
  "Jharkhand",
  "Assam",
  "Other",
];

export const leadFormSchema = z
  .object({
    name: z.string().min(2, "Please enter your full name").max(80),
    phone: z
      .string()
      .transform((v) => v.replace(/[\s().+-]/g, ""))
      .pipe(
        z
          .string()
          .regex(
            /^(?:91)?[6-9]\d{9}$/,
            "Enter a valid 10-digit Indian mobile number"
          )
      ),
    email: z.string().email("Enter a valid email").optional().or(z.literal("")),
    state: z.string().min(1, "Please choose your state"),
    programLevel: z.enum(["UG", "PG"], { message: "Please choose UG or PG" }),
    programCategory: z.string().min(1, "Please choose a category"),
    specializationRequested: z.boolean(),
    cseTrack: z.string().default(""),
    program: z.string().min(1, "Please choose a programme"),
    consent: z.literal(true, { error: "We need consent to contact you" }),
  })
  .superRefine((data, ctx) => {
    const level =
      data.programLevel === "UG" || data.programLevel === "PG"
        ? data.programLevel
        : "";
    const tracksList = [...getUUCseSpecializationTracks(level, data.program)];
    if (!tracksList.length || !data.specializationRequested) return;
    if (!data.cseTrack || !tracksList.includes(data.cseTrack)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Choose a specialization / track",
        path: ["cseTrack"],
      });
    }
  });

export type LeadFormValues = z.infer<typeof leadFormSchema>;

export const leadFormDefaults = {
  name: "",
  phone: "",
  email: "",
  state: "",
  programLevel: undefined,
  programCategory: "",
  specializationRequested: false,
  cseTrack: "",
  program: "",
  consent: true,
} as const;

export function resolveSubmittedProgram(values: LeadFormValues): string {
  const level =
    values.programLevel === "UG" || values.programLevel === "PG"
      ? values.programLevel
      : "";
  const tracks = [...getUUCseSpecializationTracks(level, values.program)];
  if (
    values.specializationRequested &&
    values.cseTrack &&
    tracks.includes(values.cseTrack)
  ) {
    return values.cseTrack;
  }
  return values.program;
}

export function getCollegeSlug(university: string): string {
  const normalized = university.toLowerCase();
  if (normalized.includes("graphic")) return "graphic-era";
  if (normalized.includes("dev bhoomi")) return "dev-bhoomi";
  if (normalized.includes("upes")) return "upes";
  if (normalized.includes("uttaranchal")) return "uttaranchal-university";
  return "general";
}
