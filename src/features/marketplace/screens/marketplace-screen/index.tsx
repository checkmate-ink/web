"use client";

import { ArrowLeft, Plus, Search, Store } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "@/features/landing/parts/logo";
import { Link } from "@/i18n/navigation";
import { $api } from "@/lib/api/client";

import { TestCard } from "./parts/test-card";
import { TestCardSkeletonGrid } from "./parts/test-card-skeleton";

export function MarketplaceScreen() {
  const t = useTranslations("marketplace");

  const [search, setSearch] = useState("");

  const { data, isLoading } = $api.useQuery("get", "/v2/tests", {
    params: { query: { limit: 100, search: search || undefined } },
  });

  const tests = data?.items ?? [];

  return (
    <div className="flex min-h-screen flex-col">
      <nav className="border-deep-brown/5 flex h-16 w-full items-center justify-between border-b px-10">
        <Link href="/">
          <Logo className="text-2xl" />
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/tests">
            <Button variant="secondary" size="sm">
              <Plus className="size-4.5" />
              {t("createOwn")}
            </Button>
          </Link>
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="size-4.5" />
              {t("back")}
            </Button>
          </Link>
        </div>
      </nav>

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-10 py-10">
        <div className="flex flex-col gap-3">
          <Badge variant="green" hasIcon>
            <Store />
            {t("title")}
          </Badge>
          <h1 className="font-heading text-deep-brown text-3xl-plus font-bold">
            {t("title")}
          </h1>
          <p className="text-deep-brown/55 text-base">{t("subtitle")}</p>
        </div>

        <div className="relative max-w-sm">
          <Search className="text-deep-brown/40 absolute top-1/2 left-4 size-4.5 -translate-y-1/2" />
          <Input
            placeholder={t("searchPlaceholder")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-11"
          />
        </div>

        {isLoading && <TestCardSkeletonGrid />}

        {!isLoading && tests.length === 0 && (
          <p className="text-deep-brown/40 py-20 text-center text-lg">
            {t("empty")}
          </p>
        )}

        {!isLoading && tests.length > 0 && (
          <div className="grid grid-cols-3 gap-5">
            {tests.map((test, i) => (
              <TestCard key={test.id} test={test} index={i} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
