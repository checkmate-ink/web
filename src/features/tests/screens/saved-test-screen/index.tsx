"use client";

import { Loader } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Footer } from "@/features/landing/screens/landing-screen/parts/footer";
import { useSavedTest } from "@/features/tests/hooks/use-saved-test";
import { TestPreview } from "@/features/tests/parts/test-preview";
import { Link } from "@/i18n/navigation";

import { TestNav } from "../test-screen/parts/test-nav";

interface SavedTestScreenProps {
  testId: string;
}

export function SavedTestScreen({ testId }: SavedTestScreenProps) {
  const t = useTranslations("tests.savedDetail");
  const state = useSavedTest(testId);

  return (
    <div className="bg-cream-background flex min-h-svh flex-col">
      <TestNav showCreateNew />
      <main className="flex w-full flex-1 flex-col items-center px-5 py-6 md:px-10 md:py-10 lg:px-20">
        {state.status === "loading" && (
          <Loader className="text-deep-brown/30 size-8 animate-spin" />
        )}
        {state.status === "missing" && (
          <div className="flex flex-col items-center gap-4 py-16 text-center">
            <h1 className="font-heading text-deep-brown text-2xl font-semibold">
              {t("missingTitle")}
            </h1>
            <p className="text-deep-brown/55 max-w-md text-sm">
              {t("missingBody")}
            </p>
            <Link href="/tests/saved">
              <Button variant="secondary">{t("backToSaved")}</Button>
            </Link>
          </div>
        )}
        {state.status === "found" && (
          <div className="flex w-full max-w-190 flex-col">
            <TestPreview
              test={state.entry.test}
              initialValues={state.entry.formValues}
              autoSaveId={state.entry.id}
            />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
