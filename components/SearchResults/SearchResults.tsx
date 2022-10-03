import { SearchResultsContainer } from "./styles";
import { SearchResult, SearchResultProps } from "../SearchResult";
import { ComponentProps } from "../types";

export interface SearchResultsProps extends ComponentProps {
  noResultsMessage: string;
  results?: SearchResultProps[];
  title: string;
}

export const SearchResults: React.FC<SearchResultsProps> = ({
  noResultsMessage,
  results,
  title,
  ...props
}) => {
  const hasResults = results && results.length > 0;
  return (
    <SearchResultsContainer {...props}>
      <h2>{title}</h2>
      {!hasResults && <p>{noResultsMessage}</p>}
      {hasResults &&
        results.map((result, i) => (
          <SearchResult key={result.id} {...result} />
        ))}
    </SearchResultsContainer>
  );
};
