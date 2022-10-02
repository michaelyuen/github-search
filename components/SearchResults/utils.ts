import { SearchResultsProps } from ".";
import { Data } from "../../graphql";

export const normalizeRepos = (
  data: Data
): SearchResultsProps["results"] | null => {
  if (!data?.repos?.nodes) {
    return null;
  }

  return data.repos.nodes.map((repo) => ({
    description: repo.descriptionHTML,
    id: repo.id,
    license: repo.licenseInfo?.name ?? null,
    name: repo.nameWithOwner,
    stars: repo.stargazerCount,
    url: repo.url,
  }));
};
