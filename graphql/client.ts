import { createClient } from "urql";

export const client = createClient({
  url: "https://api.github.com/graphql",
  fetchOptions: {
    headers: {
      authorization: "Bearer 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",
    },
  },
});
