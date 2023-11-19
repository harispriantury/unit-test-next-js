import { render, screen } from "@testing-library/react";
import About from "@/app/components/home/About";
import "@testing-library/jest-dom";

it("renders about component", () => {
  const page = render(<About />);
  expect(page).toMatchSnapshot();
});
