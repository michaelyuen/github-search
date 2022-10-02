import {
  License,
  NameAndDescription,
  SearchResultContainer,
  Stars,
} from "./styles";

export interface SearchResult {
  description: string | null;
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
        {description && <p>{description}</p>}
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
