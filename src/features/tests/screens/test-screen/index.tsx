"use client";

import { Loader } from "lucide-react";
import { AnimatePresence } from "motion/react";
import * as m from "motion/react-client";

import { useTestPollingQuery } from "@/features/tests/hooks/use-test-polling-query";
import { TestPreview } from "@/features/tests/parts/test-preview";
import { Footer } from "@/features/landing/screens/landing-screen/parts/footer";

import { TestNav } from "./parts/test-nav";
import { TestCreationForm } from "./parts/test-creation-form";

interface TestScreenProps {
  testId?: string;
}

export function TestScreen({ testId }: TestScreenProps) {
  const testQuery = useTestPollingQuery(testId);

  return (
    <div className="bg-cream-background flex min-h-full flex-col">
      <TestNav showCreateNew={!!testId} />
      <main className="flex flex-1 justify-center py-10">
        <AnimatePresence mode="wait">
          {testId ? (
            testQuery.isLoading ? (
              <m.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Loader className="text-deep-brown/30 size-8 animate-spin" />
              </m.div>
            ) : (
              testQuery.data && (
                <m.div
                  key="preview"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <TestPreview test={testQuery.data} />
                </m.div>
              )
            )
          ) : (
            <m.div
              key="form"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <TestCreationForm />
            </m.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
