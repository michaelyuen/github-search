import { SearchResultsContainer } from "./styles";
import { SearchResult } from "../SearchResult";

export interface SearchResultsProps {
  noResultsMessage: string;
  results?: SearchResult[];
  title: string;
}

export const SearchResults: React.FC<SearchResultsProps> = ({
  noResultsMessage,
  results,
  title,
}) => {
  const hasResults = results && results.length > 0;
  return (
    <SearchResultsContainer>
      <h3>{title}</h3>
      {!hasResults && <p>{noResultsMessage}</p>}
      {hasResults &&
        results.map((result, i) => (
          <SearchResult key={result.id} {...result} />
        ))}
    </SearchResultsContainer>
  );
};
