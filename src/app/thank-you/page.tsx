import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

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
    image: "/colleges/uu/hero.jpg",
    bg: "bg-[#f8f9fc]",
    ink: "text-[#1c2660]",
    accent: "text-[#f47b20]",
    button: "bg-[#f47b20] hover:bg-[#dc6815]",
    border: "border-[#f47b20]",
    next:
      "We will review your preferred programme, eligibility, scholarship fit, and document checklist for the Uttaranchal University admission process.",
  },
  "graphic-era": {
    name: "Graphic Era",
    path: "/graphic-era",
    logo: null,
    image: "/colleges/geu/hero.jpg",
    bg: "bg-[#fff8de]",
    ink: "text-[#282896]",
    accent: "text-[#bf1e2e]",
    button: "bg-[#282896] hover:bg-[#1d1d75]",
    border: "border-[#ffcb05]",
    next:
      "We will call you with programme options, eligibility, entrance-test guidance, and scholarship guidance for Graphic Era admissions.",
  },
  general: {
    name: "Partner University",
    path: "/",
    logo: null,
    image: "/uu-new/hero/hero-1.png",
    bg: "bg-[#fbf7eb]",
    ink: "text-[#0f3d2e]",
    accent: "text-[#b8893a]",
    button: "bg-[#0f3d2e] hover:bg-[#082420]",
    border: "border-[#b8893a]",
    next:
      "We will call you to understand your goals and shortlist the right university, programme, fees, and scholarship route.",
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

  return (
    <main className={`min-h-screen ${variant.bg}`}>
      <section className="relative min-h-screen overflow-hidden">
        <Image
          src={variant.image}
          alt=""
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-white/75" />

        <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-5 py-8 sm:px-8">
          <header className="flex items-center justify-between gap-4">
            <Link href="/" className={`font-bold ${variant.ink}`}>
              {variant.logo ? (
                <Image
                  src={variant.logo}
                  alt={`${variant.name} admission information`}
                  width={240}
                  height={72}
                  className="h-14 w-auto"
                />
              ) : (
                <span className="text-xl">{variant.name}</span>
              )}
            </Link>
            <Link
              href={variant.path}
              className={`rounded-full border px-4 py-2 text-sm font-semibold ${variant.ink} ${variant.border}`}
            >
              Back to page
            </Link>
          </header>

          <div className="grid flex-1 items-center gap-10 py-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className={`text-sm font-bold uppercase tracking-[0.26em] ${variant.accent}`}>
                Submission received
              </p>
              <h1
                className={`mt-5 max-w-3xl text-5xl font-black leading-[0.98] tracking-tight md:text-7xl ${variant.ink}`}
              >
                Thank you. Your counselling request is in.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-700 md:text-xl">
                A senior counsellor from {SITE.name} will contact you shortly.
                We support students with admission counselling and application
                assistance for {variant.name}; we are not the university
                website.
              </p>
            </div>

            <aside className={`rounded-lg border-l-4 bg-white p-7 shadow-xl ${variant.border}`}>
              <h2 className={`text-2xl font-extrabold ${variant.ink}`}>
                What happens next
              </h2>
              <p className="mt-4 leading-7 text-slate-700">{variant.next}</p>
              <div className="mt-7 space-y-3 text-sm font-semibold text-slate-600">
                <p>1. Profile and eligibility check</p>
                <p>2. Programme, fee, and scholarship discussion</p>
                <p>3. Application and document support</p>
              </div>
              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className={`mt-8 inline-flex rounded-md px-5 py-3 font-bold text-white ${variant.button}`}
              >
                Call {SITE.phone}
              </a>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
