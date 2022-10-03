import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Form } from "./Form";

describe("Form", () => {
  test("renders", () => {
    render(
      <Form aria-label="mock aria label" name="Mock Name">
        0
      </Form>
    );
    expect(screen.getByLabelText("mock aria label")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { container } = render(
      <Form aria-label="mock aria label" name="Mock Name">
        0
      </Form>
    );
    expect(container).toMatchSnapshot();
  });

  test("has no a11y violations", async () => {
    const { container } = render(
      <Form aria-label="mock aria label" name="Mock Name">
        0
      </Form>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
