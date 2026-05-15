"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { PROGRAMS, VISIBLE_COLLEGES } from "@/lib/constants";
import { SITE, ANALYTICS } from "@/lib/site";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";

const schema = z.object({
  name: z
    .string()
    .min(2, "Please tell us your name")
    .max(80, "That looks too long"),
  phone: z
    .string()
    .regex(/^[+\d][\d\s-]{8,15}$/, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email").optional().or(z.literal("")),
  state: z.string().min(1, "Please choose your state"),
  program: z.string().min(1, "Pick a programme of interest"),
  university: z.string().min(1, "Pick a preferred campus"),
  consent: z.literal(true, {
    error: "We need your consent to call/WhatsApp you.",
  }),
});

type FormValues = z.infer<typeof schema>;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

const STATES = [
  "Uttarakhand", "Uttar Pradesh", "Delhi", "Haryana", "Punjab",
  "Himachal Pradesh", "Rajasthan", "Bihar", "Madhya Pradesh",
  "Maharashtra", "Karnataka", "Tamil Nadu", "West Bengal", "Gujarat",
  "Kerala", "Andhra Pradesh", "Telangana", "Odisha", "Jharkhand",
  "Assam", "Other",
];

export function LeadForm() {
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
    defaultValues: { university: "Help me decide", consent: true },
  });

  const onSubmit = async (values: FormValues) => {
    setServerError(null);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Failed to submit");

      if (typeof window !== "undefined" && typeof window.fbq === "function") {
        window.fbq("track", "Lead", {
          content_category: values.program,
          content_name: values.university,
        });
      }
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
          university: values.university,
        });
      }

      reset();
      const params = new URLSearchParams(searchParams.toString());
      params.set("college", "general");
      router.push(`/thank-you?${params.toString()}`);
    } catch {
      setServerError(
        "Something went wrong. Please try WhatsApp instead — we're 1 message away."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="card-paper p-7 md:p-9"
      aria-label="Free counselling enquiry form"
      noValidate
    >
      <div className="flex items-center gap-3 mb-6">
        <span className="inline-block w-2 h-2 rounded-full bg-[color:var(--gold)] animate-pulse" />
        <span className="text-xs tracking-[0.22em] uppercase text-[color:var(--gold-deep)] font-semibold">
          Free · 30-min call · No obligation
        </span>
      </div>

      <div className="space-y-5">
        <div>
          <label htmlFor="lf-name" className="field-label">Full name</label>
          <input
            id="lf-name"
            type="text"
            autoComplete="name"
            placeholder="e.g. Aanya Kapoor"
            className="field-input"
            {...register("name")}
          />
          {errors.name && <p className="field-error">{errors.name.message}</p>}
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="lf-phone" className="field-label">Phone (WhatsApp)</label>
            <input
              id="lf-phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="+91 90000 00000"
              className="field-input"
              {...register("phone")}
            />
            {errors.phone && <p className="field-error">{errors.phone.message}</p>}
          </div>
          <div>
            <label htmlFor="lf-email" className="field-label">Email ID</label>
            <input
              id="lf-email"
              type="email"
              autoComplete="email"
              placeholder="you@email.com"
              className="field-input"
              {...register("email")}
            />
            {errors.email && <p className="field-error">{errors.email.message}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="lf-state" className="field-label">State</label>
          <select id="lf-state" className="field-select" defaultValue="" {...register("state")}>
            <option value="" disabled>-- Select State --</option>
            {STATES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.state && <p className="field-error">{errors.state.message}</p>}
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="lf-program" className="field-label">Programme of interest</label>
            <select id="lf-program" className="field-select" defaultValue="" {...register("program")}>
              <option value="" disabled>Choose one</option>
              {PROGRAMS.map((p) => (
                <option key={p.slug} value={p.title}>{p.title}</option>
              ))}
              <option value="Not sure yet">Not sure yet</option>
            </select>
            {errors.program && <p className="field-error">{errors.program.message}</p>}
          </div>
          <div>
            <label htmlFor="lf-university" className="field-label">Preferred university</label>
            <select id="lf-university" className="field-select" {...register("university")}>
              <option value="Help me decide">Help me decide</option>
              {VISIBLE_COLLEGES.map((c) => (
                <option key={c.slug} value={c.shortName}>{c.shortName}</option>
              ))}
            </select>
            {errors.university && <p className="field-error">{errors.university.message}</p>}
          </div>
        </div>

        <label className="flex gap-3 items-start text-sm text-[color:var(--ink-soft)] mt-2">
          <input type="checkbox" className="mt-1 accent-[color:var(--forest)]" {...register("consent")} />
          <span>
            I agree to be contacted by {SITE.name} via call or WhatsApp about my
            enquiry. I&apos;ve read the{" "}
            <a href="/privacy" className="underline underline-offset-2 decoration-[color:var(--gold)] hover:text-[color:var(--forest-deep)]">
              privacy policy
            </a>.
          </span>
        </label>
        {errors.consent && <p className="field-error">{errors.consent.message}</p>}

        {serverError && (
          <p className="text-sm text-[color:#8a2418] bg-[#fae9e6] border border-[#e7c0b9] rounded-md p-3">
            {serverError}
          </p>
        )}

        <button type="submit" disabled={isSubmitting} className="btn-primary w-full text-base py-3.5">
          {isSubmitting ? "Submitting…" : "Request my free counselling call"}
        </button>

        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-[color:var(--rule)]" />
          <span className="text-xs uppercase tracking-[0.22em] text-[color:var(--muted)]">or</span>
          <div className="flex-1 h-px bg-[color:var(--rule)]" />
        </div>

        <a
          href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
            "Hi, I'd like counselling for university admissions."
          )}`}
          className="btn-whatsapp w-full"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon size={20} />
          Chat on WhatsApp instead
        </a>
      </div>
    </form>
  );
}
