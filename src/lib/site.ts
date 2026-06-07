export const SITE = {
  name: "admissiondesk",
  shortName: "admissiondesk",
  tagline: "Admission Counselling & Placement Guidance",
  description:
    "Free 1-on-1 admission counselling for Uttaranchal University and Graphic Era in Dehradun, with course selection, eligibility, scholarship, and application support.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.admissiondesk.info").replace(/\/$/, ""),
  locale: "en_IN",
  city: "Dehradun",
  region: "Uttarakhand",
  country: "India",
  phone: "+91 82736 25802",
  whatsapp: "918273625802",
  email: "support@admissiondesk.info",
  address: {
    street: "Doon Medical College Road, Patel Nagar",
    locality: "Dehradun",
    region: "Uttarakhand",
    postalCode: "248001",
    country: "IN",
  },
  social: {
    instagram: "https://instagram.com/admissiondesk",
    facebook: "https://facebook.com/admissiondesk",
    youtube: "https://youtube.com/@admissiondesk",
    linkedin: "https://linkedin.com/company/admissiondesk",
  },
  founded: "2018",
} as const;

/** Google Ads / policy-safe CTA — opens counselling popup, not a direct application. */
export const CTA_BOOK_COUNSELLING = "Book Free Counselling" as const;

export const INDEPENDENCE_DISCLAIMER =
  "We are an independent education consultancy and not affiliated with any college or university." as const;

export const PAGE_CONTACTS = {
  home: {
    phone: "+91 82736 25802",
    whatsapp: "918273625802",
  },
  uttaranchal: {
    phone: "+91 82736 25802",
    whatsapp: "918273625802",
  },
  graphicEra: {
    phone: "+91 70371 49086",
    whatsapp: "918002701010",
  },
  devBhoomi: {
    phone: "+91 6397-398464",
    whatsapp: "916397398464",
  },
} as const;

export const ANALYTICS = {
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",
  ga4Id: process.env.NEXT_PUBLIC_GA4_ID || "",
  gtmId: process.env.NEXT_PUBLIC_GTM_ID || "GTM-5THDD4X5",
  googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "",
  googleAdsConversionLabel:
    process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL || "",
} as const;
