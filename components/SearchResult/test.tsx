import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { SearchResult } from "./SearchResult";

describe("SearchResult", () => {
  test("renders", () => {
    render(
      <SearchResult
        aria-label="mock aria label"
        description="mock description"
        id="0"
        license="mit"
        name="name"
        stars={0}
        url="https://google.com"
      />
    );
    expect(screen.getByLabelText("mock aria label")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { container } = render(
      <SearchResult
        aria-label="mock aria label"
        description="mock description"
        id="0"
        license="mit"
        name="name"
        stars={0}
        url="https://google.com"
      />
    );
    expect(container).toMatchSnapshot();
  });

  test("has no a11y violations", async () => {
    const { container } = render(
      <SearchResult
        aria-label="mock aria label"
        description="mock description"
        id="0"
        license="mit"
        name="name"
        stars={0}
        url="https://google.com"
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
