"use client";

import { useEffect, useId, useMemo, useState } from "react";
import { useForm, type DefaultValues } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ANALYTICS } from "@/lib/site";
import {
  getUUCseSpecializationTracks,
  isUUCseParentProgramme,
  getUUProgramCategories,
  getUUProgramsByCategory,
} from "@/lib/uuPrograms";

const schema = z
  .object({
    name: z.string().min(2, "Please enter your full name").max(80),
    phone: z
      .string()
      .regex(/^[+\d][\d\s-]{8,15}$/, "Enter a valid phone number"),
    email: z.string().email("Enter a valid email").optional().or(z.literal("")),
    state: z.string().min(1, "Please choose your state"),
    programLevel: z.enum(["UG", "PG"], { message: "Please choose UG or PG" }),
    programCategory: z.string().min(1, "Please choose a category"),
    specializationRequested: z.boolean(),
    cseTrack: z.string().default(""),
    program: z.string().min(1, "Please choose a programme"),
    consent: z.literal(true, { error: "We need consent to contact you" }),
  })
  .superRefine((data, ctx) => {
    const level =
      data.programLevel === "UG" || data.programLevel === "PG"
        ? data.programLevel
        : "";
    const tracksList = [...getUUCseSpecializationTracks(level, data.program)];
    if (!tracksList.length || !data.specializationRequested) return;
    if (!data.cseTrack || !tracksList.includes(data.cseTrack)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Choose a specialization / track",
        path: ["cseTrack"],
      });
    }
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
  return university.toLowerCase().includes("uttaranchal")
    ? "uttaranchal-university"
    : "general";
}

export type UULeadFormProps = {
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

const defaultValues: DefaultValues<FormValues> = {
  name: "",
  phone: "",
  email: "",
  state: "",
  programLevel: undefined,
  programCategory: "",
  specializationRequested: false,
  cseTrack: "",
  program: "",
  consent: true,
};

function resolveSubmittedProgram(values: FormValues): string {
  const level =
    values.programLevel === "UG" || values.programLevel === "PG"
      ? values.programLevel
      : "";
  const tracks = [...getUUCseSpecializationTracks(level, values.program)];
  if (
    values.specializationRequested &&
    values.cseTrack &&
    tracks.includes(values.cseTrack)
  ) {
    return values.cseTrack;
  }
  return values.program;
}

export function UULeadForm({
  university,
  classes,
  successText,
  buttonLabel = "Submit Enquiry",
}: UULeadFormProps) {
  const uid = useId();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(schema) as any,
    defaultValues,
  });

  const programLevel = watch("programLevel");
  const programCategory = watch("programCategory");
  const program = watch("program");
  const specializationRequested = watch("specializationRequested");

  const typedLevel =
    programLevel === "UG" || programLevel === "PG" ? programLevel : "";

  const categoryOptions = useMemo(
    () => getUUProgramCategories(typedLevel),
    [typedLevel]
  );

  const programOptions = useMemo(
    () => getUUProgramsByCategory(typedLevel, programCategory),
    [typedLevel, programCategory]
  );

  const cseTracks = useMemo(
    () => [...getUUCseSpecializationTracks(typedLevel, program)],
    [typedLevel, program]
  );

  const showCseSpecialization =
    typedLevel !== "" &&
    !!program &&
    isUUCseParentProgramme(typedLevel, program) &&
    cseTracks.length > 0;

  useEffect(() => {
    setValue("programCategory", "");
    setValue("program", "");
  }, [programLevel, setValue]);

  useEffect(() => {
    if (programOptions.length === 1) {
      setValue("program", programOptions[0]);
    } else {
      setValue("program", "");
    }
  }, [programCategory, programOptions, setValue]);

  useEffect(() => {
    setValue("specializationRequested", false);
    setValue("cseTrack", "");
  }, [program, setValue]);

  const onSubmit = async (values: FormValues) => {
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
        }),
      });
      if (!res.ok) throw new Error("Failed to submit");

      if (typeof window !== "undefined" && typeof window.fbq === "function") {
        window.fbq("track", "Lead", {
          content_category: programmeSubmitted,
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
          event_label: programmeSubmitted,
        });
      }

      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "generate_lead", {
          program: programmeSubmitted,
          university,
        });
      }

      reset(defaultValues);
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
        <label htmlFor={`${uid}-name`} className={classes.label}>
          Full Name<span aria-hidden>*</span>
        </label>
        <input
          id={`${uid}-name`}
          type="text"
          autoComplete="name"
          placeholder="Your full name"
          className={classes.select}
          {...register("name")}
        />
        {errors.name && <p className={classes.error}>{errors.name.message}</p>}
      </div>

      <div className={classes.field}>
        <label htmlFor={`${uid}-phone`} className={classes.label}>
          Phone Number<span aria-hidden>*</span>
        </label>
        <input
          id={`${uid}-phone`}
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
        <label htmlFor={`${uid}-email`} className={classes.label}>
          Email ID
        </label>
        <input
          id={`${uid}-email`}
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
        <label htmlFor={`${uid}-state`} className={classes.label}>
          State<span aria-hidden>*</span>
        </label>
        <select
          id={`${uid}-state`}
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
        <label htmlFor={`${uid}-level`} className={classes.label}>
          Level<span aria-hidden>*</span>
        </label>
        <select
          id={`${uid}-level`}
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

      <div className={classes.field}>
        <label htmlFor={`${uid}-category`} className={classes.label}>
          Programme Category<span aria-hidden>*</span>
        </label>
        <select
          id={`${uid}-category`}
          className={classes.select}
          disabled={!programLevel}
          {...register("programCategory")}
        >
          <option value="" disabled>
            {!programLevel ? "-- Select level first --" : "-- Select Category --"}
          </option>
          {categoryOptions.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        {errors.programCategory && (
          <p className={classes.error}>{errors.programCategory.message}</p>
        )}
      </div>

      <div className={classes.field}>
        <label htmlFor={`${uid}-program`} className={classes.label}>
          Programme / Specialization<span aria-hidden>*</span>
        </label>
        <select
          id={`${uid}-program`}
          className={classes.select}
          disabled={!programCategory}
          {...register("program")}
        >
          <option value="" disabled>
            {!programCategory ? "-- Select category first --" : "-- Select Programme --"}
          </option>
          {programOptions.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
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
              <span>
                Interested in a CSE specialization / track
              </span>
            </label>
          </div>

          {specializationRequested === true ? (
            <div className={classes.field}>
              <label
                htmlFor={`${uid}-cse-track`}
                className={classes.consent}
                style={{ display: "block", marginBottom: "0.35rem" }}
              >
                Specialization / track<span aria-hidden>*</span>
              </label>
              <select
                id={`${uid}-cse-track`}
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
          ) : null}
        </>
      )}

      <label className={classes.consent}>
        <input
          type="checkbox"
          className="mt-1"
          {...register("consent")}
        />
        <span>
          I authorise admissiondesk and its counselling team to contact me
          by call, SMS, WhatsApp or email regarding my admission enquiry.
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
