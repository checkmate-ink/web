import type { components } from "@/lib/api/schema";

export function getTotalQuestions(
  groups: components["schemas"]["GroupConfig"][],
) {
  return groups.reduce((sum, g) => sum + g.amount, 0);
}

export function getUniqueTypes(groups: components["schemas"]["GroupConfig"][]) {
  return [...new Set(groups.map((g) => g.type))];
}
