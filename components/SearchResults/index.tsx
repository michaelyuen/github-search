import { SearchResultsContainer } from "./SearchResults.styles";

export interface SearchResultsProps {
  noResultsMessage: string;
  results?: Array<{
    description: string;
    fork: boolean;
    license: string;
    name: string;
    stars: number;
    url: string;
  }>;
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
      {hasResults && results.map((result, i) => <p key={i}>i am a result</p>)}
    </SearchResultsContainer>
  );
};
export { SearchResultsContainer };
