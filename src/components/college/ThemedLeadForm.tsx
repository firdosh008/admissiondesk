"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ANALYTICS } from "@/lib/site";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name").max(80),
  phone: z.string().regex(/^[+\d][\d\s-]{8,15}$/, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email").optional().or(z.literal("")),
  program: z.string().min(1, "Please choose a programme"),
  state: z.string().min(1, "Please choose your state"),
  consent: z.literal(true, { error: "We need consent to contact you" }),
});

type FormValues = z.infer<typeof schema>;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

const STATES = [
  "Uttarakhand",
  "Uttar Pradesh",
  "Delhi",
  "Haryana",
  "Punjab",
  "Himachal Pradesh",
  "Rajasthan",
  "Bihar",
  "Madhya Pradesh",
  "Maharashtra",
  "Karnataka",
  "Tamil Nadu",
  "West Bengal",
  "Gujarat",
  "Kerala",
  "Andhra Pradesh",
  "Telangana",
  "Odisha",
  "Jharkhand",
  "Assam",
  "Other",
];

function getCollegeSlug(university: string) {
  const normalized = university.toLowerCase();
  if (normalized.includes("graphic")) return "graphic-era";
  if (normalized.includes("dev bhoomi")) return "dev-bhoomi";
  if (normalized.includes("upes")) return "upes";
  if (normalized.includes("uttaranchal")) return "uttaranchal-university";
  return "general";
}

export type ThemedLeadFormProps = {
  university: string;
  programs: string[];
  classes: {
    form: string;
    field: string;
    label: string;
    select: string;
    button: string;
    error: string;
    consent: string;
    helper?: string;
    success?: string;
    successTitle?: string;
  };
  successText?: string;
  buttonLabel?: string;
};

export function ThemedLeadForm({
  university,
  programs,
  classes,
  successText,
  buttonLabel = "Submit Enquiry",
}: ThemedLeadFormProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { state: "", consent: true },
  });

  const onSubmit = async (values: FormValues) => {
    setServerError(null);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          phone: values.phone,
          email: values.email || "",
          state: values.state,
          program: values.program,
          university,
          consent: values.consent,
        }),
      });
      if (!res.ok) throw new Error("Failed to submit");

      if (typeof window !== "undefined" && typeof window.fbq === "function") {
        window.fbq("track", "Lead", {
          content_category: values.program,
          content_name: university,
        });
      }

      // Google Ads conversion
      const adsId = ANALYTICS.googleAdsId;
      const label = ANALYTICS.googleAdsConversionLabel;
      if (
        typeof window !== "undefined" &&
        typeof window.gtag === "function" &&
        adsId &&
        label
      ) {
        window.gtag("event", "conversion", {
          send_to: `${adsId}/${label}`,
          event_category: "Lead",
          event_label: values.program,
        });
      }

      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "generate_lead", {
          program: values.program,
          university,
        });
      }

      reset();
      const params = new URLSearchParams(searchParams.toString());
      params.set("college", getCollegeSlug(university));
      router.push(`/thank-you?${params.toString()}`);
    } catch {
      setServerError(
        "Something went wrong. Please try the WhatsApp button or call our helpline."
      );
    }
  };


  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={classes.form}
      aria-label={`${university} admissions enquiry form`}
      noValidate
    >
      <div className={classes.field}>
        <label htmlFor="cf-name" className={classes.label}>
          Full Name<span aria-hidden>*</span>
        </label>
        <input
          id="cf-name"
          type="text"
          autoComplete="name"
          placeholder="Your full name"
          className={classes.select}
          {...register("name")}
        />
        {errors.name && <p className={classes.error}>{errors.name.message}</p>}
      </div>

      <div className={classes.field}>
        <label htmlFor="cf-phone" className={classes.label}>
          Phone Number<span aria-hidden>*</span>
        </label>
        <input
          id="cf-phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="10-digit mobile number"
          className={classes.select}
          {...register("phone")}
        />
        {errors.phone && (
          <p className={classes.error}>{errors.phone.message}</p>
        )}
      </div>

      <div className={classes.field}>
        <label htmlFor="cf-email" className={classes.label}>
          Email ID
        </label>
        <input
          id="cf-email"
          type="email"
          autoComplete="email"
          placeholder="Your email address"
          className={classes.select}
          {...register("email")}
        />
        {errors.email && (
          <p className={classes.error}>{errors.email.message}</p>
        )}
      </div>

      <div className={classes.field}>
        <label htmlFor="cf-state" className={classes.label}>
          State<span aria-hidden>*</span>
        </label>
        <select
          id="cf-state"
          className={classes.select}
          defaultValue=""
          {...register("state")}
        >
          <option value="" disabled>
            -- Select State --
          </option>
          {STATES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.state && (
          <p className={classes.error}>{errors.state.message}</p>
        )}
      </div>

      <div className={classes.field}>
        <label htmlFor="cf-program" className={classes.label}>
          Programme of Interest<span aria-hidden>*</span>
        </label>
        <select
          id="cf-program"
          className={classes.select}
          defaultValue=""
          {...register("program")}
        >
          <option value="" disabled>
            -- Select Programme --
          </option>
          {programs.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
        {errors.program && (
          <p className={classes.error}>{errors.program.message}</p>
        )}
      </div>

      <label className={classes.consent}>
        <input
          type="checkbox"
          className="mt-1"
          {...register("consent")}
        />
        <span>
          I authorise admissiondesk and its counselling team to contact me
          by call, SMS, WhatsApp or email regarding my admission enquiry. This
          will override the registry on DND.
        </span>
      </label>
      {errors.consent && (
        <p className={classes.error}>{errors.consent.message}</p>
      )}

      {serverError && <p className={classes.error}>{serverError}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className={classes.button}
      >
        {isSubmitting ? "Submitting…" : buttonLabel}
      </button>
    </form>
  );
}
