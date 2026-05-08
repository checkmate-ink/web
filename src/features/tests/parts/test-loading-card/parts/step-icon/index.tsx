"use client";

import { Circle, CircleCheck, Loader } from "lucide-react";
import * as m from "motion/react-client";

import type { StepStatus } from "../../types";

export function StepIcon({ status }: { status: StepStatus }) {
  switch (status) {
    case "completed":
      return <CircleCheck className="text-olive-green size-5 shrink-0" />;
    case "in-progress":
      return (
        <m.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="flex shrink-0"
        >
          <Loader className="text-warm-yellow size-5" />
        </m.div>
      );
    case "pending":
      return <Circle className="text-deep-brown size-5 shrink-0" />;
  }
}
