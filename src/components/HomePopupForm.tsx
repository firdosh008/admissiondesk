"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { VISIBLE_COLLEGES } from "@/lib/constants";
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

type Props = {
  onSuccess: () => void;
  university?: string;
};

export function HomePopupForm({ onSuccess, university }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [serverError, setServerError] = useState<string | null>(null);
  const [selectedUniversity, setSelectedUniversity] = useState("Help me decide");

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

  const {
    categoryOptions,
    programOptions,
    cseTracks,
    showCseSpecialization,
  } = useCascadingPrograms(watch, setValue);

  const specializationRequested = watch("specializationRequested");

  const onSubmit = async (values: LeadFormValues) => {
    setServerError(null);
    try {
      const programmeSubmitted = resolveSubmittedProgram(values);
      const finalUniversity = university || selectedUniversity;
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
          university: finalUniversity,
          consent: values.consent,
          programLevel: values.programLevel,
          specializationRequested: specFlag,
        }),
      });
      if (!res.ok) throw new Error("Failed to submit");

      if (typeof window !== "undefined" && typeof window.fbq === "function") {
        window.fbq("track", "Lead", {
          content_category: programmeSubmitted,
          content_name: finalUniversity,
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
          event_label: programmeSubmitted,
        });
      }
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "generate_lead", {
          program: programmeSubmitted,
          university: finalUniversity,
        });
      }

      reset();
      onSuccess();
      const params = new URLSearchParams(searchParams.toString());
      params.set("college", getCollegeSlug(finalUniversity));
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
      className="space-y-4"
      aria-label="Free counselling enquiry form"
      noValidate
    >
      <div>
        <label htmlFor="pop-name" className="field-label">
          Full name
        </label>
        <input
          id="pop-name"
          type="text"
          autoComplete="name"
          placeholder="e.g. Aanya Kapoor"
          className="field-input"
          {...register("name")}
        />
        {errors.name && <p className="field-error">{errors.name.message}</p>}
      </div>

      <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <label htmlFor="pop-phone" className="field-label">
            Phone (WhatsApp)
          </label>
          <input
            id="pop-phone"
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
          <label htmlFor="pop-email" className="field-label">
            Email ID
          </label>
          <input
            id="pop-email"
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

      <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <label htmlFor="pop-state" className="field-label">
            State
          </label>
          <select
            id="pop-state"
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
          {errors.state && <p className="field-error">{errors.state.message}</p>}
        </div>
        <div>
          <label htmlFor="pop-level" className="field-label">
            Level
          </label>
          <select
            id="pop-level"
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

      <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <label htmlFor="pop-category" className="field-label">
            Programme
          </label>
          <select
            id="pop-category"
            className="field-select"
            disabled={!watch("programLevel")}
            {...register("programCategory")}
          >
            <option value="" disabled>
              {!watch("programLevel")
                ? "-- Select level first --"
                : "-- Select Category --"}
            </option>
            {categoryOptions.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          {errors.programCategory && (
            <p className="field-error">{errors.programCategory.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="pop-program" className="field-label">
            Specialization
          </label>
          <select
            id="pop-program"
            className="field-select"
            disabled={!watch("programCategory")}
            {...register("program")}
          >
            <option value="" disabled>
              {!watch("programCategory")
                ? "-- Select category first --"
                : "-- Select Programme --"}
            </option>
            {programOptions.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
          {errors.program && (
            <p className="field-error">{errors.program.message}</p>
          )}
        </div>
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
              <label htmlFor="pop-cse-track" className="field-label">
                Specialization / track
              </label>
              <select
                id="pop-cse-track"
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

      {!university && (
        <div>
          <label htmlFor="pop-university" className="field-label">
            Preferred university
          </label>
          <select
            id="pop-university"
            className="field-select"
            value={selectedUniversity}
            onChange={(e) => setSelectedUniversity(e.target.value)}
          >
            <option value="Help me decide">Help me decide</option>
            {VISIBLE_COLLEGES.map((c) => (
              <option key={c.slug} value={c.shortName}>
                {c.shortName}
              </option>
            ))}
          </select>
        </div>
      )}

      <label className="flex gap-3 items-start text-sm text-[color:var(--ink-soft)]">
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

      {serverError && (
        <p className="text-sm text-[color:#8a2418] bg-[#fae9e6] border border-[#e7c0b9] rounded-md p-3">
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full text-base py-3.5"
      >
        {isSubmitting ? "Submitting…" : "Submit"}
      </button>
    </form>
  );
}
