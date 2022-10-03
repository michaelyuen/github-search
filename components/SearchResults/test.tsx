import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { SearchResults } from "./SearchResults";
import { normalizedResults } from "../../__mocks__/normalizedResults";

describe("SearchResults", () => {
  test("renders", () => {
    render(
      <SearchResults
        aria-label="mock aria label"
        noResultsMessage=""
        results={[]}
        title="mock title"
      />
    );
    expect(screen.getByLabelText("mock aria label")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { container } = render(
      <SearchResults
        aria-label="mock aria label"
        noResultsMessage=""
        title="mock title"
      />
    );
    expect(container).toMatchSnapshot();
  });

  test("has no a11y violations", async () => {
    const { container } = render(
      <SearchResults
        aria-label="mock aria label"
        noResultsMessage=""
        title="mock title"
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  test("renders with mock data", () => {
    render(
      <SearchResults
        aria-label="mock aria label"
        noResultsMessage=""
        results={normalizedResults}
        title="mock title"
      />
    );
    expect(screen.getByLabelText("mock aria label")).toBeInTheDocument();
  });
});
