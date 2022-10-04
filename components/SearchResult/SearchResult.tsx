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
  owner: string;
  stars: number;
  url: string;
}

export const SearchResult: React.FC<SearchResultProps> = ({
  ["aria-label"]: ariaLabel,
  description,
  license,
  name,
  owner,
  stars,
  url,
  ...props
}) => {
  return (
    <SearchResultContainer aria-label={ariaLabel || name} {...props}>
      <NameAndDescription>
        <h3>
          <a href={url} rel="noopener noreferrer" target="_blank">
            <span>{name}/</span>
            <span>{owner}</span>
          </a>
        </h3>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </NameAndDescription>
      <Stars>
        <p>Stars:</p>
        <p>
          <a href={`${url}/stargazers`}>{stars}</a>
        </p>
      </Stars>
      <License>
        <p>License:</p>
        {license && <p>{license}</p>}
      </License>
    </SearchResultContainer>
  );
};
