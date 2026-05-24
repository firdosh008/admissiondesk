"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { ANALYTICS } from "@/lib/site";
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
import { ProgrammeSelect } from "@/components/ProgrammeSelect";
import { TurnstileWidget } from "@/components/TurnstileWidget";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export type ThemedLeadFormProps = {
  university: string;
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
  classes,
  successText,
  buttonLabel = "Submit Enquiry",
}: ThemedLeadFormProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [serverError, setServerError] = useState<string | null>(null);
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
    defaultValues: { ...leadFormDefaults, consent: true },
  });

  const { cseTracks, showCseSpecialization, typedLevel } = useCascadingPrograms(watch, setValue);

  const specializationRequested = watch("specializationRequested");

  const onSubmit = async (values: LeadFormValues) => {
    setServerError(null);
    try {
      const programmeSubmitted = resolveSubmittedProgram(values);
      const lvl =
        values.programLevel === "UG" || values.programLevel === "PG"
          ? values.programLevel
          : "";
      const specFlag =
        isUUCseParentProgramme(lvl, values.program) &&
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
          university,
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
          content_name: university,
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
          university,
        });
      }

      reset();
      setTurnstileToken(null);
      const params = new URLSearchParams(searchParams.toString());
      params.set("college", getCollegeSlug(university));
      router.push(`/thank-you?${params.toString()}`);
    } catch {
      setTurnstileToken(null);
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

      <div className="grid sm:grid-cols-2 gap-4">
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
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
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
          <label htmlFor="cf-level" className={classes.label}>
            Level<span aria-hidden>*</span>
          </label>
          <select
            id="cf-level"
            className={classes.select}
            {...register("programLevel")}
          >
            <option value="" disabled>
              -- UG or PG --
            </option>
            <option value="UG">UG (Undergraduate)</option>
            <option value="PG">PG (Postgraduate)</option>
          </select>
          {errors.programLevel && (
            <p className={classes.error}>{errors.programLevel.message}</p>
          )}
        </div>
      </div>

      <div className={classes.field}>
        <label htmlFor="cf-program" className={classes.label}>
          Programme of interest<span aria-hidden>*</span>
        </label>
        <ProgrammeSelect
          id="cf-program"
          level={typedLevel as "" | "UG" | "PG"}
          value={watch("program") || ""}
          onChange={(prog, cat) => {
            setValue("program", prog);
            setValue("programCategory", cat);
          }}
        />
        {errors.program && (
          <p className={classes.error}>{errors.program.message}</p>
        )}
      </div>

      {showCseSpecialization && (
        <>
          <div className={classes.field}>
            <label className={`${classes.consent} cursor-pointer`}>
              <input
                type="checkbox"
                className="mt-1 shrink-0"
                {...register("specializationRequested")}
              />
              <span>Interested in a CSE specialization / track</span>
            </label>
          </div>

          {specializationRequested && (
            <div className={classes.field}>
              <label
                htmlFor="cf-cse-track"
                className={classes.consent}
                style={{ display: "block", marginBottom: "0.35rem" }}
              >
                Specialization / track<span aria-hidden>*</span>
              </label>
              <select
                id="cf-cse-track"
                className={classes.select}
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
                <p className={classes.error}>{errors.cseTrack.message}</p>
              )}
            </div>
          )}
        </>
      )}

      <label className={classes.consent}>
        <input type="checkbox" className="mt-1" {...register("consent")} />
        <span>
          I authorise admissiondesk and its counselling team to contact me by
          call, SMS, WhatsApp or email regarding my admission enquiry.
        </span>
      </label>
      {errors.consent && (
        <p className={classes.error}>{errors.consent.message}</p>
      )}

      <TurnstileWidget
        onToken={setTurnstileToken}
        onExpire={() => setTurnstileToken(null)}
        onError={() => setTurnstileToken(null)}
      />

      {serverError && <p className={classes.error}>{serverError}</p>}

      <button
        type="submit"
        disabled={isSubmitting || (!turnstileToken && !!process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY)}
        className={classes.button}
      >
        {isSubmitting ? "Submitting…" : buttonLabel}
      </button>
    </form>
  );
}
