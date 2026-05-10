"use client";

import { ArrowRight, Store } from "lucide-react";
import { useTranslations } from "next-intl";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { $api } from "@/lib/api/client";

import { FadeIn } from "../fade-in";
import { MarketplaceCard } from "./parts/marketplace-card";

export function Marketplace() {
  const t = useTranslations("landing");

  const { data, isLoading } = $api.useQuery("get", "/v2/tests", {
    params: { query: { limit: 3 } },
  });

  const tests = data?.items ?? [];

  return (
    <section className="flex w-full flex-col items-center gap-12 px-20 py-25">
      <FadeIn className="flex flex-col items-center gap-5">
        <Badge variant="green" hasIcon>
          <Store />
          {t("marketplace.badge")}
        </Badge>
        <h2 className="font-heading text-deep-brown text-center text-5xl font-bold">
          {t("marketplace.title")}
        </h2>
        <p className="text-deep-brown/55 max-w-[550px] text-center text-lg leading-relaxed">
          {t("marketplace.subtitleLine1")}
          <br />
          {t("marketplace.subtitleLine2")}
        </p>
      </FadeIn>

      <div className="flex w-full max-w-[1100px] gap-5">
        {isLoading &&
          Array.from({ length: 3 }).map((_, i) => (
            <FadeIn
              key={i}
              delay={i * 0.1}
              className="border-deep-brown/4 flex flex-1 flex-col gap-4 rounded-[20px] border bg-white p-6"
            >
              <div className="bg-deep-brown/5 h-6 w-20 animate-pulse rounded-full" />
              <div className="bg-deep-brown/5 h-5 w-3/4 animate-pulse rounded" />
              <div className="bg-deep-brown/5 h-4 w-full animate-pulse rounded" />
            </FadeIn>
          ))}
        {tests.map((test, i) => (
          <MarketplaceCard key={test.id} test={test} index={i} />
        ))}
      </div>

      <FadeIn delay={0.3}>
        <Link href="/marketplace">
          <Button variant="ghost">
            {t("marketplace.browseAll")}
            <ArrowRight className="size-4.5" />
          </Button>
        </Link>
      </FadeIn>
    </section>
  );
}
