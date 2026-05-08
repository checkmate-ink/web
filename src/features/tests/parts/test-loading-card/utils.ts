import type { StepStatus } from "./types";

export function getStepStatus(index: number, currentStep: number): StepStatus {
  if (index < currentStep) return "completed";
  if (index === currentStep) return "in-progress";
  return "pending";
}
