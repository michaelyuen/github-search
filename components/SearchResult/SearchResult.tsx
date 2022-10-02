import React from "react";
import {
  License,
  NameAndDescription,
  SearchResultContainer,
  Stars,
} from "./styles";

export interface SearchResult {
  description: string;
  id: string;
  license: string | null;
  name: string;
  stars: number;
  url: string;
}

export const SearchResult: React.FC<SearchResult> = ({
  description,
  license,
  name,
  stars,
  url,
}) => {
  return (
    <SearchResultContainer>
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
