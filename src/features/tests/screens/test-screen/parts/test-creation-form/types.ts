import { z } from "zod";

import { testCreationSchema } from "./presets";

export type TestCreationValues = z.infer<typeof testCreationSchema>;
