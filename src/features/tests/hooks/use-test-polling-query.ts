import { $api } from "@/lib/api/client";

export function useTestPollingQuery(testId?: string) {
  return $api.useQuery(
    "get",
    "/v2/tests/{testId}",
    { params: { path: { testId: testId! } } },
    {
      enabled: !!testId,
      refetchInterval: (query) => {
        const status = query.state.data?.status;
        return status === "pending" ? 1000 : false;
      },
    },
  );
}
