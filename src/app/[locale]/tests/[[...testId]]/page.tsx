import { TestScreen } from "@/features/tests/screens/test-screen";

export default async function TestsPage({
  params,
}: {
  params: Promise<{ testId?: string[] }>;
}) {
  const { testId } = await params;

  return <TestScreen testId={testId?.[0]} />;
}
