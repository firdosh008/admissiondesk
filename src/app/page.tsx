import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { Partners } from "@/components/Partners";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { CTABand } from "@/components/CTABand";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { HomeCtaScroll } from "@/components/HomeCtaScroll";
import { StructuredData } from "@/components/StructuredData";
import { ADMISSION_DECISION_DISCLAIMER, INDEPENDENCE_DISCLAIMER, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Admission Counselling in Dehradun | admissiondesk",
  description:
    "Free admission counselling and application assistance for class 12 passed students exploring Uttaranchal University and Graphic Era in Uttarakhand.",
  alternates: { canonical: SITE.url },
};

export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />
      <main>
        {/* Trust first → value second → sell colleges last */}
        <Hero />
        <TrustBar />
        <Problem />
        <Solution />
        <Testimonials />
        <Partners />
        <WhyChooseUs />
        <FAQ />
        <CTABand />
        <section
          aria-label="Disclaimer"
          className="section-light border-t border-[color:var(--rule-soft)]"
        >
          <div className="container-x py-8 md:py-10">
            <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-[color:var(--muted)]">
              {INDEPENDENCE_DISCLAIMER} {ADMISSION_DECISION_DISCLAIMER}
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <HomeCtaScroll />
    </>
  );
}
