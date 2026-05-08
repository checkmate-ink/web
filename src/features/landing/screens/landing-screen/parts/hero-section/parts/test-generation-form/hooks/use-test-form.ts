import { testFormSchema } from "@/features/landing/screens/landing-screen/parts/hero-section/parts/test-generation-form/presets";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { type TestFormValues } from "../types";

export function useTestForm() {
  return useForm<TestFormValues>({
    resolver: zodResolver(testFormSchema),
    defaultValues: {
      subject: "",
      topic: "",
      language: "",
    },
  });
}
