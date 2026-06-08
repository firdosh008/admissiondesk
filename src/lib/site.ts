export const SITE = {
  name: "admissiondesk",
  shortName: "admissiondesk",
  tagline: "Admission Counselling & Placement Guidance",
  description:
    "Free 1-on-1 counselling for students interested in universities like Uttaranchal University, Graphic Era, and other institutions in Dehradun, with course selection, eligibility, scholarship, and application guidance.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.admissiondesk.info").replace(/\/$/, ""),
  locale: "en_IN",
  city: "Dehradun",
  region: "Uttarakhand",
  country: "India",
  phone: "+91 82736 25802",
  whatsapp: "918273625802",
  email: "support@admissiondesk.info",
  proprietor: "Shubham Panwar",
  gstNumber: "05DXGPP9903M2ZU",
  address: {
    street: "KP Road, Near Shri Guru Ram Rai College of Nursing, Patel Nagar",
    locality: "Dehradun",
    region: "Uttarakhand",
    postalCode: "248001",
    country: "IN",
    formatted:
      "KP Road, Near Shri Guru Ram Rai College of Nursing, Patel Nagar, Dehradun, Uttarakhand – 248001",
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
export const CTA_BOOK_COUNSELLING = "Submit Now" as const;

export const INDEPENDENCE_DISCLAIMER =
  "We are an independent education consultancy and not affiliated with any college or university. We do not represent the official website of any university." as const;

export const ADMISSION_DECISION_DISCLAIMER =
  "We do not guarantee admission. Final admission decisions are made solely by the respective institutions based on their criteria." as const;

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
