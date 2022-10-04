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
    license: repo.licenseInfo?.key
      ? `${repo.licenseInfo.key.toUpperCase()} license`
      : "N/A",
    name: repo.nameWithOwner.split("/")[1],
    owner: repo.nameWithOwner.split("/")[0],
    stars: repo.stargazerCount,
    url: repo.url,
  }));
};
