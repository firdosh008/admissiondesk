import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { ThankYouTracking } from "./ThankYouTracking";

export const metadata: Metadata = {
  title: "Thank you | Counselling request received",
  description:
    "Your admission counselling request has been received. A counsellor from admissiondesk will contact you shortly.",
  robots: { index: false, follow: false },
};

type ThankYouPageProps = {
  searchParams: Promise<{ college?: string | string[] }>;
};

const variants = {
  "uttaranchal-university": {
    name: "Uttaranchal University",
    path: "/uttaranchal-university",
    logo: "/colleges/uu/UU-Logo-Naac-Nirf.png",
    image: "/colleges/uu/hero.jpg" as string | null,
    bg: "bg-[#f8f9fc]",
    ink: "text-[#1c2660]",
    accent: "text-[#f47b20]",
    button: "bg-[#1c2660] hover:bg-[#141a4a] text-white",
    border: "border-[#f47b20]",
  },
  "graphic-era": {
    name: "Graphic Era",
    path: "/graphic-era",
    logo: null,
    image: "/colleges/geu/hero.jpg" as string | null,
    bg: "bg-[#fff8de]",
    ink: "text-[#282896]",
    accent: "text-[#bf1e2e]",
    button: "bg-[#282896] hover:bg-[#1d1d75] text-white",
    border: "border-[#ffcb05]",
  },
  general: {
    name: "admissiondesk",
    path: "/",
    logo: null,
    image: null as string | null,
    bg: "bg-[#f4f8f4]",
    ink: "text-[#082b1f]",
    accent: "text-[#926c18]",
    button: "bg-[#0e4332] hover:bg-[#082b1f] text-white",
    border: "border-[#c49230]",
  },
} as const;

function resolveVariant(college?: string | string[]) {
  const slug = Array.isArray(college) ? college[0] : college;
  if (slug && slug in variants) return variants[slug as keyof typeof variants];
  return variants.general;
}

export default async function ThankYouPage({ searchParams }: ThankYouPageProps) {
  const params = await searchParams;
  const variant = resolveVariant(params.college);

  const collegeSlug = Array.isArray(params.college) ? params.college[0] : (params.college ?? "general");

  return (
    <main className={`min-h-screen ${variant.bg}`}>
      <ThankYouTracking college={collegeSlug} />
      <section className="relative min-h-screen overflow-hidden">
        {variant.image ? (
          <>
            <Image
              src={variant.image}
              alt=""
              fill
              sizes="100vw"
              priority
              className="object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-white/80" />
          </>
        ) : null}

        <div className="relative mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6 py-16 text-center sm:px-10">
          {/* Success icon */}
          <div className={`inline-flex h-14 w-14 items-center justify-center rounded-full ${variant.button} mb-10 shadow-lg`}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <p className={`text-xs font-bold uppercase tracking-[0.28em] ${variant.accent}`}>
            Submission received
          </p>

          <h1 className={`mt-5 text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl md:text-6xl ${variant.ink}`}>
            Thank you.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-slate-600 sm:text-lg">
            A senior counsellor will contact you shortly.
          </p>
        </div>
      </section>
    </main>
  );
}
