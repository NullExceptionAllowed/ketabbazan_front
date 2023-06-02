import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

test("Start test with a passing test", async () => {
  render(<div>Hello test world</div>);
  const testDiv = await screen.findByText("Hello test world");
  expect(testDiv).toBeInTheDocument;
});
