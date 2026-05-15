export const SITE = {
  name: "admissiondesk",
  shortName: "admissiondesk",
  tagline: "Admission Counselling & Placement Guidance",
  description:
    "Free 1-on-1 admission counselling for Uttaranchal University and Graphic Era in Dehradun, with course selection, eligibility, scholarship, and application support.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://admissiondesk.in").replace(/\/$/, ""),
  locale: "en_IN",
  city: "Dehradun",
  region: "Uttarakhand",
  country: "India",
  phone: "+91 82736 25802",
  whatsapp: "918273625802",
  email: "admissions@admissiondesk.info",
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
    phone: "1800 270 1010",
    whatsapp: "918002701010",
  },
} as const;

export const ANALYTICS = {
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",
  ga4Id: process.env.NEXT_PUBLIC_GA4_ID || "",
  gtmId: process.env.NEXT_PUBLIC_GTM_ID || "GTM-W6RHJM8L",
  googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "",
  googleAdsConversionLabel:
    process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL || "",
} as const;
