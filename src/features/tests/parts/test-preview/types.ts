import type { components } from "@/lib/api/schema";

export type TestItemV2 = components["schemas"]["TestItemV2"];
export type ResponseGroup = components["schemas"]["ResponseGroup"];
export type ResponseQuestion = components["schemas"]["ResponseQuestion"];

export type QuestionType = ResponseQuestion["type"];
export type BadgeVariant = "yellow" | "blue" | "green" | "pink";
