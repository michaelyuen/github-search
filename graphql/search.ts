import { gql } from "urql";
import { client } from "./client";

const searchQuery = gql`
  query searchRepos($query: String!) {
    repos: search(first: 10, query: $query, type: REPOSITORY) {
      nodes {
        ... on Repository {
          description
          id
          licenseInfo {
            name
          }
          name
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
  description: string | null;
  id: string;
  licenseInfo: License | null;
  name: string;
  stargazerCount: number;
  url: string;
}
