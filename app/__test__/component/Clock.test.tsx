import { render, screen } from "@testing-library/react";
import Clock from "@/app/components/Clock";
import "@testing-library/jest-dom";

it("renders clock component", () => {
  const page = render(<Clock />);
  expect(page).toMatchSnapshot();
});
