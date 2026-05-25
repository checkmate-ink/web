import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { SavedTestsScreen } from "@/features/tests/screens/saved-tests-screen";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("tests.saved");

  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default function SavedTestsPage() {
  return <SavedTestsScreen />;
}
