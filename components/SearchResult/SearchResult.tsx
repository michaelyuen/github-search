import React from "react";
import {
  License,
  NameAndDescription,
  SearchResultContainer,
  Skeleton,
  Stars,
} from "./styles";
import { ComponentProps } from "../types";

export interface SearchResultProps extends Omit<ComponentProps, "aria-label"> {
  "aria-label"?: string;
  description: string;
  id: string;
  license: string;
  name: string;
  owner: string;
  stars: number;
  url: string;
}

export const SearchResult: React.FC<SearchResultProps> = ({
  ["aria-label"]: ariaLabel,
  description,
  isLoading,
  license,
  name,
  owner,
  stars,
  url,
  ...props
}) => {
  if (isLoading) {
    return (
      <SearchResultContainer {...props}>
        <NameAndDescription>
          <Skeleton as="h3" height="21px" width="200px"></Skeleton>
          <Skeleton height="1em" width="90%"></Skeleton>
        </NameAndDescription>
        <Stars>
          <p>Stars:</p>
          <Skeleton height="1em"></Skeleton>
        </Stars>
        <License>
          <p>License:</p>
          <Skeleton height="1em"></Skeleton>
        </License>
      </SearchResultContainer>
    );
  }
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
