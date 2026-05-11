import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { TestScreen } from "@/features/tests/screens/test-screen";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.tests");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function TestsPage({
  params,
}: {
  params: Promise<{ testId?: string[] }>;
}) {
  const { testId } = await params;

  return <TestScreen testId={testId?.[0]} />;
}
