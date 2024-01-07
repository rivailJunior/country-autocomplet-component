import { render, screen } from "@testing-library/react";
import { Main as App } from "./main";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Auto Complete Component/i);
  expect(linkElement).toBeInTheDocument();
});
