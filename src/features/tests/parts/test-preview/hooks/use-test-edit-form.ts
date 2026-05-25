import { useMemo } from "react";
import { useForm, useFormContext } from "react-hook-form";

import type { TestItemV2 } from "@/features/tests/types";

import { transformTestToForm } from "../util";
import type { TestEditValues } from "../types";

export function useTestEditForm(
  test: TestItemV2,
  initialValues?: TestEditValues,
) {
  const defaultValues = useMemo(
    () => initialValues ?? transformTestToForm(test),
    [initialValues, test],
  );

  return useForm<TestEditValues>({
    defaultValues,
  });
}

export function useTestEditFormContext() {
  return useFormContext<TestEditValues>();
}
