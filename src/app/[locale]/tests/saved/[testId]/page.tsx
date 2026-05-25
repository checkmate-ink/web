import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { SavedTestScreen } from "@/features/tests/screens/saved-test-screen";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("tests.savedDetail");

  return {
    title: t("metaTitle"),
  };
}

export default async function SavedTestDetailPage({
  params,
}: {
  params: Promise<{ testId: string }>;
}) {
  const { testId } = await params;

  return <SavedTestScreen testId={testId} />;
}
