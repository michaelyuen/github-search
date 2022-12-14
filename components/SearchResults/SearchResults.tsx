import { SearchResultsContainer } from "./styles";
import { SearchResult, SearchResultProps } from "../SearchResult";
import { ComponentProps } from "../types";

const syntaxLink = (
  <>
    <span>
      This search only supports the &ldquo;user&rdquo; and &ldquo;stars&rdquo;
      qualifiers.
    </span>{" "}
    <a
      href="https://docs.github.com/en/enterprise-cloud@latest/search-github/searching-on-github/searching-for-repositories"
      rel="noopener noreferrer"
      target="_blank"
    >
      See here for syntax.
    </a>
  </>
);
const defaultMessage = <p>Please enter a query above. {syntaxLink}</p>;
const defaultNoResultsMessage = (
  <p>No results. Please update your query and try again. {syntaxLink}</p>
);
const loadingItems = Array.from("x".repeat(10));

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
  isLoading,
  noResultsMessage = defaultNoResultsMessage,
  results,
  title,
  ...props
}) => {
  const hasResults = results && results.length > 0;
  return (
    <SearchResultsContainer {...props}>
      <h2>{title}</h2>
      {isLoading &&
        loadingItems.map((_, i) => (
          // Explicit ignore because `isLoading` will render a skeleton and not use any data
          // @ts-ignore
          <SearchResult isLoading key={i} />
        ))}
      {!isLoading && !hasSearched && <div>{initialMessage}</div>}
      {!isLoading && hasSearched && !hasResults && (
        <div>{noResultsMessage}</div>
      )}
      {!isLoading && hasSearched && hasResults && (
        <ul>
          {results.map((result, i) => (
            <SearchResult key={result.id} {...result} />
          ))}
        </ul>
      )}
    </SearchResultsContainer>
  );
};
