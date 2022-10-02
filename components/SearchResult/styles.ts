import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const SearchResultContainer = styled.div`
  border: 1px solid #858585;
  border-radius: 2px;

  @media (min-width: ${breakpoints.md}) {
    display: flex;
    flex-wrap: nowrap;
  }

  @media (prefers-color-scheme: dark) {
    color-scheme: dark;
    background-color: #3b3b3b;
  }
`;

export const NameAndDescription = styled.div`
  padding: 1em 0.5em;

  @media (min-width: ${breakpoints.md}) {
    flex-basis: 80%;
    flex-grow: 1;
    padding: 1empx;
  }
`;

export const Stars = styled.div`
  border-top: 1px solid #858585;
  display: flex;
  padding: 1em 0.5em;

  @media (min-width: ${breakpoints.md}) {
    display: block;
    border-left: 1px solid #858585;
    border-top: none;
    min-width: 150px;
    text-align: center;

    p:first-child {
      margin-bottom: 1em;
    }
  }
`;

export const License = styled.div`
  border-top: 1px solid #858585;
  display: flex;
  padding: 1em 0.5em;

  @media (min-width: ${breakpoints.md}) {
    display: block;
    border-left: 1px solid #858585;
    border-top: none;
    min-width: 150px;
    text-align: center;

    p:first-child {
      margin-bottom: 1em;
    }
  }
`;
