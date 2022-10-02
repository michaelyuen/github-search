import { SearchResultsProps } from ".";
import { Data } from "../../graphql";

export const normalizeRepos = (
  data: Data
): SearchResultsProps["results"] | null => {
  if (!data?.repos?.nodes) {
    return null;
  }

  return data.repos.nodes.map((repo) => ({
    description: repo.description,
    id: repo.id,
    license: repo.licenseInfo?.name ?? null,
    name: repo.name,
    stars: repo.stargazerCount,
    url: repo.url,
  }));
};
