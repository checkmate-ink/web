import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { LandingScreen } from "@/features/landing/screens/landing-screen";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.landing");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default LandingScreen;
