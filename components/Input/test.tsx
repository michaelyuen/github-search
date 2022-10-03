import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Input } from "./Input";

describe("Input", () => {
  test("renders", () => {
    render(<Input aria-label="mock aria label" />);
    expect(screen.getByLabelText("mock aria label")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { container } = render(<Input aria-label="mock aria label" />);
    expect(container).toMatchSnapshot();
  });

  test("has no a11y violations", async () => {
    const { container } = render(<Input aria-label="mock aria label" />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
