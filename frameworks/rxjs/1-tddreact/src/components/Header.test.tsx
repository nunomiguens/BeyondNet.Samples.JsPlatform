import { getByTestId, render } from "@testing-library/react";
import Header from "./Header";

let container: any = null;

beforeEach(() => {
  container = render(<Header />).container;
});

it("should show logo", () => {
  expect(getByTestId(container, "logo")).toBeTruthy();
});

it("should show search", () => {
  expect(getByTestId(container, "search")).toBeTruthy();
});
