import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormContext } from "react-hook-form";

import { testCreationSchema } from "../presets";
import type { TestCreationValues } from "../types";

export function useTestCreationForm() {
  return useForm<TestCreationValues>({
    resolver: zodResolver(testCreationSchema),
  });
}

export function useTestCreationFormContext() {
  return useFormContext<TestCreationValues>();
}
