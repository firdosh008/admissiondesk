import { SITE } from "@/lib/site";
import { FAQS, VISIBLE_COLLEGES } from "@/lib/constants";

export function StructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${SITE.url}#organization`,
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    foundingDate: SITE.founded,
    telephone: SITE.phone,
    email: SITE.email,
    logo: `${SITE.url}/opengraph-image`,
    image: `${SITE.url}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    areaServed: { "@type": "Country", name: "India" },
    sameAs: Object.values(SITE.social),
    knowsAbout: [
      "University admission counselling",
      "Career guidance",
      "Placement preparation",
      "Scholarship advisory",
    ],
    member: VISIBLE_COLLEGES.map((c) => ({
      "@type": "CollegeOrUniversity",
      name: c.name,
      url: c.url,
      address: {
        "@type": "PostalAddress",
        addressLocality: c.city,
        addressRegion: "Uttarakhand",
        addressCountry: "IN",
      },
    })),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    inLanguage: "en-IN",
    publisher: { "@id": `${SITE.url}#organization` },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE.url}#faq`,
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.url}#business`,
    name: SITE.name,
    url: SITE.url,
    image: `${SITE.url}/opengraph-image`,
    telephone: SITE.phone,
    priceRange: "Free counselling",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "20:00",
      },
    ],
  };

  const services = VISIBLE_COLLEGES.map((c) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Admission counselling for ${c.shortName}`,
    serviceType: "Educational counselling",
    provider: { "@id": `${SITE.url}#organization` },
    areaServed: "India",
    description: `Free 1-on-1 admission counselling and placement guidance for ${c.name}.`,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      {services.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  );
}
