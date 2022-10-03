import React from "react";
import {
  License,
  NameAndDescription,
  SearchResultContainer,
  Stars,
} from "./styles";
import { ComponentProps } from "../types";

export interface SearchResultProps extends Omit<ComponentProps, "aria-label"> {
  "aria-label"?: string;
  description: string;
  id: string;
  license: string | null;
  name: string;
  stars: number;
  url: string;
}

export const SearchResult: React.FC<SearchResultProps> = ({
  ["aria-label"]: ariaLabel,
  description,
  license,
  name,
  stars,
  url,
  ...props
}) => {
  return (
    <SearchResultContainer aria-label={ariaLabel || name} {...props}>
      <NameAndDescription>
        <h3>
          <a href={url} rel="noopener noreferrer" target="_blank">
            {name}
          </a>
        </h3>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </NameAndDescription>
      <Stars>
        <p>Stars:</p>
        <p>{stars}</p>
      </Stars>
      <License>
        <p>License:</p>
        {license && <p>{license}</p>}
      </License>
    </SearchResultContainer>
  );
};
