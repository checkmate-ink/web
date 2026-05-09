"use client";

import { Loader } from "lucide-react";

import { TestPreview } from "@/features/tests/parts/test-preview";
import { Footer } from "@/features/landing/screens/landing-screen/parts/footer";
import { $api } from "@/lib/api/client";

import { TestNav } from "./parts/test-nav";

interface TestScreenProps {
  testId?: string;
}

export function TestScreen({ testId }: TestScreenProps) {
  const testQuery = $api.useQuery(
    "get",
    "/v2/tests/{testId}",
    { params: { path: { testId: testId! } } },
    { enabled: !!testId },
  );

  return (
    <div className="bg-cream-background flex min-h-full flex-col">
      <TestNav />
      <main className="flex flex-1 justify-center py-10">
        {testQuery.isLoading && (
          <Loader className="text-deep-brown/30 size-8 animate-spin" />
        )}
        {testQuery.data && <TestPreview test={testQuery.data} />}
      </main>
      <Footer />
    </div>
  );
}
