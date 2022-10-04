import styled from "styled-components";
import { SearchResultContainer } from "../SearchResult/styles";

export const SearchResultsContainer = styled.div`
  ul {
    margin: 0;
    padding: 0;
  }

  ${SearchResultContainer} {
    margin-bottom: 1em;
  }
`;
