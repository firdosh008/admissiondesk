import type { Metadata } from "next";
import { UUPageContent } from "@/components/college/UUPageContent";
import "./uu.css";

export const metadata: Metadata = {
  title: "Uttaranchal University Admission 2026-27 — Free Counselling | admissiondesk",
  description:
    "Free admission counselling for Uttaranchal University Dehradun (NAAC A+). Get expert help with programme selection, eligibility, scholarship options, and the UU application process for 2026-27. Call admissiondesk today.",
  alternates: { canonical: "/uttaranchal-university" },
  keywords: [
    "Uttaranchal University admission 2026",
    "Uttaranchal University Dehradun",
    "UU admission counselling",
    "NAAC A+ university Dehradun",
    "Uttaranchal University fees",
    "Uttaranchal University scholarship",
    "admission counselling Dehradun",
  ],
};

export default function UttaranchalPage() {
  return <UUPageContent />;
}
