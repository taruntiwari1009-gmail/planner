import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the planner dashboard and widget controls", () => {
  render(<App />);

  expect(screen.getByText("Timer")).toBeInTheDocument();
  expect(screen.getAllByText("+ Add Widget")).toHaveLength(3);
});
