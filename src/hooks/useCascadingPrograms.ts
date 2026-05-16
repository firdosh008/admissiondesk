"use client";

import { useMemo, useEffect } from "react";
import type { UseFormSetValue, UseFormWatch } from "react-hook-form";
import type { LeadFormValues } from "@/lib/lead-form-schema";
import {
  getUUCseSpecializationTracks,
  isUUCseParentProgramme,
  getUUProgramCategories,
  getUUProgramsByCategory,
} from "@/lib/uuPrograms";

export function useCascadingPrograms(
  watch: UseFormWatch<LeadFormValues>,
  setValue: UseFormSetValue<LeadFormValues>,
) {
  const programLevel = watch("programLevel");
  const programCategory = watch("programCategory");
  const program = watch("program");
  const specializationRequested = watch("specializationRequested");

  const typedLevel =
    programLevel === "UG" || programLevel === "PG" ? programLevel : "";

  const categoryOptions = useMemo(
    () => getUUProgramCategories(typedLevel),
    [typedLevel],
  );

  const programOptions = useMemo(
    () => getUUProgramsByCategory(typedLevel, programCategory),
    [typedLevel, programCategory],
  );

  const cseTracks = useMemo(
    () => [...getUUCseSpecializationTracks(typedLevel, program)],
    [typedLevel, program],
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
    setValue("specializationRequested", false);
    setValue("cseTrack", "");
  }, [program, setValue]);

  return {
    categoryOptions,
    programOptions,
    cseTracks,
    showCseSpecialization,
    typedLevel,
  };
}
