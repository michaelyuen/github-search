import styled from "styled-components";
import { StyledInput } from "../Input";
import { Form } from "../Form";
import { breakpoints } from "../../styles/breakpoints";
import { ErrorContainer } from "../Error";

export const SearchFormContainer = styled(Form)`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 4em;

  h2 {
    flex-shrink: 0;
  }

  div {
    display: flex;
    flex-grow: 1;
    flex-wrap: wrap;
    position: relative;

    ${StyledInput} {
      flex-grow: 1;
    }

    ${ErrorContainer} {
      margin-bottom: 0;
    }
  }

  @media (min-width: ${breakpoints.md}) {
    flex-wrap: nowrap;

    h2 {
      margin-right: 6em;
    }

    ${ErrorContainer} {
      left: 0;
      margin: 0;
      position: absolute;
      top: 100%;
    }
  }
`;
