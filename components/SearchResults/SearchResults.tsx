import { SearchResultsContainer } from "./styles";
import { SearchResult, SearchResultProps } from "../SearchResult";
import { ComponentProps } from "../types";

const defaultMessage = (
  <p>
    Please enter a query above.{" "}
    <a
      href="https://docs.github.com/en/enterprise-cloud@latest/search-github/searching-on-github/searching-for-repositories"
      rel="noopener noreferrer"
      target="_blank"
    >
      See here for syntax.
    </a>
  </p>
);
const defaultNoResultsMessage =
  "No results. Please update your query and try again.";
export interface SearchResultsProps extends ComponentProps {
  initialMessage?: string | JSX.Element;
  hasSearched: boolean;
  noResultsMessage?: string | JSX.Element;
  results?: SearchResultProps[];
  title: string;
}

export const SearchResults: React.FC<SearchResultsProps> = ({
  initialMessage = defaultMessage,
  hasSearched,
  noResultsMessage = defaultNoResultsMessage,
  results,
  title,
  ...props
}) => {
  const hasResults = results && results.length > 0;
  return (
    <SearchResultsContainer {...props}>
      <h2>{title}</h2>
      {!hasSearched && <div>{initialMessage}</div>}
      {hasSearched && !hasResults && <p>{noResultsMessage}</p>}
      {hasSearched && hasResults && (
        <ul>
          {results.map((result, i) => (
            <SearchResult key={result.id} {...result} />
          ))}
        </ul>
      )}
    </SearchResultsContainer>
  );
};
