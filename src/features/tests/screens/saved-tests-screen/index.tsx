"use client";

import { ChevronRight, Trash2, TriangleAlert } from "lucide-react";
import { useFormatter, useTranslations } from "next-intl";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/features/landing/screens/landing-screen/parts/footer";
import { useSavedTests } from "@/features/tests/hooks/use-saved-tests";
import { removeSavedTest } from "@/features/tests/lib/saved-tests";
import { Link } from "@/i18n/navigation";

import { TestNav } from "../test-screen/parts/test-nav";

export function SavedTestsScreen() {
  const t = useTranslations("tests.saved");
  const format = useFormatter();
  const tests = useSavedTests();

  function handleDelete(id: string, title: string) {
    if (window.confirm(t("deleteConfirm", { title }))) {
      removeSavedTest(id);
    }
  }

  return (
    <div className="bg-cream-background flex min-h-svh flex-col">
      <TestNav showCreateNew showSavedTests={false} />
      <main className="flex w-full flex-1 flex-col items-center px-5 py-8 md:px-10 md:py-10 lg:px-20">
        <div className="flex w-full max-w-3xl flex-col gap-8">
          <header className="flex flex-col gap-1">
            <h1 className="font-heading text-deep-brown text-2xl font-semibold md:text-3xl">
              {t("title")}
            </h1>
            <p className="text-deep-brown/50 text-sm">{t("subtitle")}</p>
          </header>

          <Alert variant="warning">
            <TriangleAlert />
            <AlertTitle>{t("warningTitle")}</AlertTitle>
            <AlertDescription>{t("warningBody")}</AlertDescription>
          </Alert>

          <section className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="font-heading text-deep-brown text-lg font-semibold">
                {t("listTitle")}
              </h2>
              <Badge variant="blue">
                {t("count", { count: tests.length })}
              </Badge>
            </div>

            {tests.length === 0 ? (
              <div className="border-deep-brown/12 flex flex-col items-center gap-2 rounded-lg border border-dashed px-6 py-12 text-center">
                <p className="text-deep-brown font-medium">{t("emptyTitle")}</p>
                <p className="text-deep-brown/55 max-w-sm text-sm">
                  {t("emptyBody")}
                </p>
              </div>
            ) : (
              <ul className="flex flex-col gap-3">
                {tests.map((entry) => (
                  <li
                    key={entry.id}
                    className="border-deep-brown/12 hover:border-deep-brown/25 bg-cream-background group flex items-center gap-2 rounded-lg border pr-2 transition-colors"
                  >
                    <Link
                      href={`/tests/saved/${entry.id}`}
                      className="hover:bg-deep-brown/2 flex flex-1 items-center justify-between gap-4 rounded-l-lg px-5 py-4 transition-colors"
                    >
                      <div className="flex flex-col gap-1">
                        <span className="text-deep-brown font-semibold">
                          {entry.title}
                        </span>
                        <span className="text-deep-brown/55 text-sm">
                          {t("questionCount", {
                            count: entry.questionCount,
                          })}
                          {" · "}
                          {t("savedOn", {
                            date: format.dateTime(new Date(entry.savedAt), {
                              dateStyle: "medium",
                            }),
                          })}
                        </span>
                      </div>
                      <ChevronRight className="text-deep-brown/40 group-hover:text-deep-brown/70 size-5 shrink-0 transition-colors" />
                    </Link>
                    <button
                      type="button"
                      aria-label={t("deleteLabel")}
                      onClick={() => handleDelete(entry.id, entry.title)}
                      className="text-deep-brown/40 hover:bg-error/10 hover:text-error focus-visible:ring-warm-yellow focus-visible:ring-offset-cream-background inline-flex size-9 shrink-0 items-center justify-center rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                    >
                      <Trash2 className="size-4.5" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
