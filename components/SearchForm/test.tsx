import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { SearchForm } from "./SearchForm";

describe("SearchForm", () => {
  test("renders", () => {
    render(
      <SearchForm
        aria-label="mock aria label"
        onChange={jest.fn()}
        query=""
        title="GitHub Search Form"
      />
    );
    expect(screen.getByLabelText("mock aria label")).toBeInTheDocument();
  });

  test("renders error", () => {
    render(
      <SearchForm
        aria-label="mock aria label"
        error="Something went wrong. Please try again."
        onChange={jest.fn()}
        query=""
        title="GitHub Search Form"
      />
    );
    expect(screen.getByLabelText("mock aria label")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { container } = render(
      <SearchForm
        aria-label="mock aria label"
        onChange={jest.fn()}
        query=""
        title="GitHub Search Form"
      />
    );
    expect(container).toMatchSnapshot();
  });

  test("has no a11y violations", async () => {
    const { container } = render(
      <SearchForm
        aria-label="mock aria label"
        onChange={jest.fn()}
        query=""
        title="GitHub Search Form"
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
