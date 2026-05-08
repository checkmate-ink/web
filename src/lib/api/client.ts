import createClient from "openapi-fetch";
import createQueryClient from "openapi-react-query";

import type { paths } from "./schema";

const api = createClient<paths>({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
});

export const $api = createQueryClient(api);
