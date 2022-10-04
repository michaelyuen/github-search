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
            key
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

export const search = async (query: string) =>
  client.query(searchQuery, { query }).toPromise();

export interface Data {
  repos?: {
    nodes?: Repository[];
    repositoryCount: number;
  };
}

interface License {
  key: string;
}

interface Repository {
  descriptionHTML: string;
  id: string;
  licenseInfo: License | null;
  nameWithOwner: string;
  stargazerCount: number;
  url: string;
}
