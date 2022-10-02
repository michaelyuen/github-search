import { gql } from "urql";
import { client } from "./client";

const searchQuery = gql`
  query searchRepos($query: String!) {
    repos: search(first: 10, query: $query, type: REPOSITORY) {
      nodes {
        ... on Repository {
          descriptionHTML
          id
          licenseInfo {
            name
          }
          nameWithOwner
          stargazerCount
          url
        }
      }
      repositoryCount
    }
  }
`;

// update type
export const search = async (query: string) =>
  client.query(searchQuery, { query }).toPromise();

export interface Data {
  repos?: {
    nodes?: Repository[];
    repositoryCount: number;
  };
}

interface License {
  name: string;
}

interface Repository {
  descriptionHTML: string;
  id: string;
  licenseInfo: License | null;
  nameWithOwner: string;
  stargazerCount: number;
  url: string;
}
