"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { DEHRADUN_COUNSELLING_COLLEGES } from "@/lib/constants";
import { SITE, ANALYTICS } from "@/lib/site";
import {
  leadFormSchema,
  leadFormDefaults,
  resolveSubmittedProgram,
  getCollegeSlug,
  STATES,
} from "@/lib/lead-form-schema";
import type { LeadFormValues } from "@/lib/lead-form-schema";
import { useCascadingPrograms } from "@/hooks/useCascadingPrograms";
import { isUUCseParentProgramme } from "@/lib/uuPrograms";
import { setUserData, saveForThankYou, buildUserData } from "@/lib/enhanced-conversions";
import { ProgrammeSelect } from "./ProgrammeSelect";
import { TurnstileWidget } from "./TurnstileWidget";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export function LeadForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [serverError, setServerError] = useState<string | null>(null);
  const [selectedUniversity, setSelectedUniversity] = useState("Help me decide");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LeadFormValues>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(leadFormSchema) as any,
    defaultValues: leadFormDefaults,
  });

  const { cseTracks, showCseSpecialization } = useCascadingPrograms(watch, setValue);

  const programLevel = watch("programLevel");
  const typedLevel = programLevel === "UG" || programLevel === "PG" ? programLevel : "";

  const specializationRequested = watch("specializationRequested");

  const onSubmit = async (values: LeadFormValues) => {
    setServerError(null);
    try {
      const programmeSubmitted = resolveSubmittedProgram(values);
      const level =
        values.programLevel === "UG" || values.programLevel === "PG"
          ? values.programLevel
          : "";
      const specFlag =
        isUUCseParentProgramme(level, values.program) &&
        values.specializationRequested;

      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          phone: values.phone,
          email: values.email || "",
          state: values.state,
          program: programmeSubmitted,
          university: selectedUniversity,
          consent: values.consent,
          programLevel: values.programLevel,
          specializationRequested: specFlag,
          cfTurnstileToken: turnstileToken ?? "",
        }),
      });
      if (!res.ok) throw new Error("Failed to submit");

      if (typeof window !== "undefined" && typeof window.fbq === "function") {
        window.fbq("track", "Lead", {
          content_category: programmeSubmitted,
          content_name: selectedUniversity,
        });
      }
      const ecData = {
        email: values.email,
        phone: values.phone,
        name: values.name,
        state: values.state,
      };
      setUserData(ecData);
      saveForThankYou(ecData);

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
          event_label: programmeSubmitted,
          user_data: buildUserData(ecData),
        });
      }
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "generate_lead", {
          program: programmeSubmitted,
          university: selectedUniversity,
        });
      }

      reset();
      setSelectedUniversity("Help me decide");
      setTurnstileToken(null);
      const params = new URLSearchParams(searchParams.toString());
      params.set("college", getCollegeSlug(selectedUniversity));
      router.push(`/thank-you?${params.toString()}`);
    } catch {
      setTurnstileToken(null);
      setServerError(
        "Something went wrong. Please try WhatsApp instead — we're 1 message away."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="card-paper p-4 sm:p-6 md:p-9"
      aria-label="Free counselling enquiry form"
      noValidate
    >
      <div className="flex items-center gap-3 mb-6">
        <span className="inline-block w-2 h-2 rounded-full bg-[color:var(--gold)] animate-pulse" />
        <span className="text-xs tracking-[0.22em] uppercase text-[color:var(--gold-deep)] font-semibold">
          Free · No obligation
        </span>
      </div>

      <div className="space-y-5">
        <div>
          <label htmlFor="lf-name" className="field-label">
            Full name
          </label>
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

        <div className="grid sm:grid-cols-2 gap-3 sm:gap-5">
          <div>
            <label htmlFor="lf-phone" className="field-label">
              Phone (WhatsApp)
            </label>
            <input
              id="lf-phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="+91 90000 00000"
              className="field-input"
              {...register("phone")}
            />
            {errors.phone && (
              <p className="field-error">{errors.phone.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="lf-email" className="field-label">
              Email ID
            </label>
            <input
              id="lf-email"
              type="email"
              autoComplete="email"
              placeholder="you@email.com"
              className="field-input"
              {...register("email")}
            />
            {errors.email && (
              <p className="field-error">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 sm:gap-5">
          <div>
            <label htmlFor="lf-state" className="field-label">
              State
            </label>
            <select
              id="lf-state"
              className="field-select"
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
              <p className="field-error">{errors.state.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="lf-level" className="field-label">
              Level
            </label>
            <select
              id="lf-level"
              className="field-select"
              {...register("programLevel")}
            >
              <option value="" disabled>
                -- UG or PG --
              </option>
              <option value="UG">UG (Undergraduate)</option>
              <option value="PG">PG (Postgraduate)</option>
            </select>
            {errors.programLevel && (
              <p className="field-error">{errors.programLevel.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="lf-program" className="field-label">
            Programme of interest
          </label>
          <ProgrammeSelect
            id="lf-program"
            level={typedLevel}
            value={watch("program") || ""}
            onChange={(prog, cat) => {
              setValue("program", prog);
              setValue("programCategory", cat);
            }}
          />
          {errors.program && (
            <p className="field-error">{errors.program.message}</p>
          )}
        </div>

        {showCseSpecialization && (
          <>
            <label className="flex gap-3 items-start text-sm text-[color:var(--ink-soft)]">
              <input
                type="checkbox"
                className="mt-1 accent-[color:var(--forest)]"
                {...register("specializationRequested")}
              />
              <span>Interested in a CSE specialization / track</span>
            </label>

            {specializationRequested && (
              <div>
                <label htmlFor="lf-cse-track" className="field-label">
                  Specialization / track
                </label>
                <select
                  id="lf-cse-track"
                  className="field-select"
                  defaultValue=""
                  {...register("cseTrack")}
                >
                  <option value="" disabled>
                    -- Select track --
                  </option>
                  {cseTracks.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                {errors.cseTrack && (
                  <p className="field-error">{errors.cseTrack.message}</p>
                )}
              </div>
            )}
          </>
        )}

        <div>
          <label htmlFor="lf-university" className="field-label">
            Preferred university
          </label>
          <select
            id="lf-university"
            className="field-select"
            value={selectedUniversity}
            onChange={(e) => setSelectedUniversity(e.target.value)}
          >
            <option value="Help me decide">Help me decide</option>
            {DEHRADUN_COUNSELLING_COLLEGES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <label className="flex gap-3 items-start text-sm text-[color:var(--ink-soft)] mt-2">
          <input
            type="checkbox"
            className="mt-1 accent-[color:var(--forest)]"
            {...register("consent")}
          />
          <span>
            I agree to be contacted by {SITE.name} via call or WhatsApp about my
            enquiry. I&apos;ve read the{" "}
            <a
              href="/privacy"
              className="underline underline-offset-2 decoration-[color:var(--gold)] hover:text-[color:var(--forest-deep)]"
            >
              privacy policy
            </a>
            .
          </span>
        </label>
        {errors.consent && (
          <p className="field-error">{errors.consent.message}</p>
        )}

        <TurnstileWidget
          onToken={setTurnstileToken}
          onExpire={() => setTurnstileToken(null)}
          onError={() => setTurnstileToken(null)}
        />

        {serverError && (
          <p className="text-sm text-[color:#8a2418] bg-[#fae9e6] border border-[#e7c0b9] rounded-md p-3">
            {serverError}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting || (!turnstileToken && !!process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY)}
          className="btn-primary w-full text-base py-3.5"
        >
          {isSubmitting ? "Submitting…" : "Submit Now"}
        </button>
      </div>
    </form>
  );
}
