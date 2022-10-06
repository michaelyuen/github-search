import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Error } from "./Error";

describe("Error", () => {
  test("renders", () => {
    render(<Error message="Something went wrong" />);
    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { container } = render(<Error message="Something went wrong" />);
    expect(container).toMatchSnapshot();
  });

  test("has no a11y violations", async () => {
    const { container } = render(<Error message="Something went wrong" />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
