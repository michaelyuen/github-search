import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { SearchResult } from "./SearchResult";

describe("SearchResult", () => {
  test("renders", () => {
    render(
      <ul>
        <SearchResult
          aria-label="mock aria label"
          description="mock description"
          id="0"
          license="mit"
          name="name"
          owner="owner"
          stars={0}
          url="https://google.com"
        />
      </ul>
    );
    expect(screen.getByLabelText("mock aria label")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { container } = render(
      <ul>
        <SearchResult
          aria-label="mock aria label"
          description="mock description"
          id="0"
          license="mit"
          name="name"
          owner="owner"
          stars={0}
          url="https://google.com"
        />
      </ul>
    );
    expect(container).toMatchSnapshot();
  });

  test("matches snapshot for skeleton", () => {
    const { container } = render(
      <ul>
        {/* @ts-ignore */}
        <SearchResult isLoading />
      </ul>
    );
    expect(container).toMatchSnapshot();
  });

  test("has no a11y violations", async () => {
    const { container } = render(
      <ul>
        <SearchResult
          aria-label="mock aria label"
          description="mock description"
          id="0"
          license="mit"
          name="name"
          owner="owner"
          stars={0}
          url="https://google.com"
        />
      </ul>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
