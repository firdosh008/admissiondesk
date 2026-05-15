import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { EditorialPromise } from "@/components/Promise";
import { Partners } from "@/components/Partners";
import { Programs } from "@/components/Programs";
import { CTABand } from "@/components/CTABand";
import { Stats } from "@/components/Stats";
import { PartnerLogos } from "@/components/PartnerLogos";
import { Process } from "@/components/Process";
import { Placements } from "@/components/Placements";
import { Testimonials } from "@/components/Testimonials";
import { Counselling } from "@/components/Counselling";
import { FAQ } from "@/components/FAQ";
import { HomeAbout } from "@/components/HomeAbout";
import { HomeContact } from "@/components/HomeContact";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";
import { HomeLeadPopup } from "@/components/HomeLeadPopup";
import { StructuredData } from "@/components/StructuredData";
import { SITE } from "@/lib/site";

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
        <Hero />
        <EditorialPromise />
        <Partners />
        <Programs />
        <CTABand />
        <Stats />
        <PartnerLogos />
        <Process />
        <Placements />
        <Testimonials />
        <Counselling />
        <FAQ />
        <HomeAbout />
        <HomeContact />
      </main>
      <Footer />
      <StickyCTA />
      <HomeLeadPopup />
    </>
  );
}
