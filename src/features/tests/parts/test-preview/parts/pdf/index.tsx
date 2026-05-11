import { pdf } from "@react-pdf/renderer";

import type { TestEditValues } from "../../types";
import "./fonts";
import { TestDocument } from "./test-document";
import type { PdfLabels } from "./types";

export type { PdfLabels } from "./types";

function sanitizeFilename(name: string): string {
  return name
    .replace(/[^a-zA-Z0-9\s\-_]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export async function generateTestPdf(
  data: TestEditValues,
  labels: PdfLabels,
) {
  const blob = await pdf(<TestDocument data={data} labels={labels} />).toBlob();

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${sanitizeFilename(data.title) || "test"}.pdf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
