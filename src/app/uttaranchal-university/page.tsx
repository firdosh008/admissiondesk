import type { Metadata } from "next";
import { UUPageContent } from "@/components/college/UUPageContent";
import "./uu.css";

export const metadata: Metadata = {
  title: "Uttaranchal University Admission Counselling 2026 | admissiondesk",
  description:
    "Speak with admissiondesk for Uttaranchal University admission counselling, programme selection, scholarship guidance, and application assistance for 2026-27.",
  alternates: { canonical: "/uttaranchal-university" },
};

export default function UttaranchalPage() {
  return <UUPageContent />;
}
