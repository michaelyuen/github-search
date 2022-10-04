import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const SearchResultContainer = styled.li`
  background-color: var(--card-background-color);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  list-style: none;

  @media (min-width: ${breakpoints.md}) {
    display: grid;
    grid-template-columns: 1fr minmax(auto, 150px) minmax(auto, 150px);
  }
`;

export const NameAndDescription = styled.div`
  padding: 1em;

  h3 {
    margin-top: 0;
    margin-bottom: 0.5em;
  }

  a {
    display: flex;
    flex-wrap: wrap;
    font-weight: normal;

    span:last-child {
      font-weight: bold;
    }
  }

  > div div {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Stars = styled.div`
  border-top: 1px solid var(--border-color);
  display: flex;
  padding: 1em;

  p {
    margin: 0;

    &:first-child {
      font-weight: bold;
      margin-right: 0.5em;
    }
  }

  @media (min-width: ${breakpoints.md}) {
    display: block;
    border-left: 1px solid var(--border-color);
    border-top: none;
    text-align: center;

    p:first-child {
      margin-bottom: 1em;
      margin-right: 0;
    }
  }
`;

export const License = styled.div`
  border-top: 1px solid var(--border-color);
  display: flex;
  padding: 1em;

  p {
    margin: 0;

    &:first-child {
      font-weight: bold;
      margin-right: 0.5em;
    }
  }

  @media (min-width: ${breakpoints.md}) {
    display: block;
    border-left: 1px solid var(--border-color);
    border-top: none;
    text-align: center;

    p:first-child {
      margin-bottom: 1em;
      margin-right: 0;
    }
  }
`;
