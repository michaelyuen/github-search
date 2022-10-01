import styled from "styled-components";
import { StyledInput } from "../Input";

export const SearchFormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 4em;

  ${StyledInput} {
    flex-grow: 1;
  }

  @media (min-width: 768px) {
    h3 {
      margin-right: 6em;
    }
  }
`;
