import styled from "styled-components";
import { StyledInput } from "../Input";
import { Form } from "../Form";
import { breakpoints } from "../../styles/breakpoints";

export const SearchFormContainer = styled(Form)`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 4em;

  ${StyledInput} {
    flex-grow: 1;
  }

  @media (min-width: ${breakpoints.md}) {
    h2 {
      margin-right: 6em;
    }
  }
`;
