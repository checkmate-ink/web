import { useCallback, useState } from "react";

import type { TestEditValues } from "../../../types";

interface PdfLabels {
  nameLabel: string;
  dateLabel: string;
  items: string;
  subtitle: string;
  sectionTitle: (index: number, name: string) => string;
}

export function useGeneratePdf() {
  const [isGenerating, setIsGenerating] = useState(false);

  const generate = useCallback(
    async (data: TestEditValues, labels: PdfLabels) => {
      setIsGenerating(true);
      try {
        const { generateTestPdf } = await import("../../pdf");
        await generateTestPdf(data, labels);
      } finally {
        setIsGenerating(false);
      }
    },
    [],
  );

  return { generate, isGenerating };
}
