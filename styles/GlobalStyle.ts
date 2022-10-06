import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { breakpoints } from "./breakpoints";

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  :root {
    --background-color: white;
    --border-color: #d0d7de;
    --border-radius: 6px;
    --color: #24292f;
    --card-background-color: #f6f8fa;
    --error-color: #f85149;
    --link-color: #0969da;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --background-color: #0d1117;;
      --border-color: #30363d;
      --border-radius: 6px;
      --color: #c9d1d9;
      --card-background-color: #161b22;
      --error-color: #f85149;
      --link-color: #58a6ff;
    }
  }

  body {
    background-color: var(--background-color);
    color: var(--color);
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    margin: 0 auto;
    max-width: ${breakpoints.lg};
    padding: 0 1em;
  }

  a {
    color: var(--link-color);
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }

    &:focus {
      border-radius: var(--border-radius);
      box-shadow: 0 0 0 3px #58a6ff;
      outline: none;
    }
  }

  input {
    color: var(--color);
    background-color: var(--card-background-color);

    &:focus {
      border-radius: var(--border-radius);
      box-shadow: 0 0 0 3px #58a6ff;
      outline: none;
    }
  }
`;
