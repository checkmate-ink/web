import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { MarketplaceScreen } from "@/features/marketplace/screens/marketplace-screen";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.marketplace");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default MarketplaceScreen;
