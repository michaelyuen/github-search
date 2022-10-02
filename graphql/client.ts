import { createClient } from "urql";

export const client = createClient({
  url: "https://api.github.com/graphql",
  fetchOptions: {
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_PAT}`,
    },
  },
});
