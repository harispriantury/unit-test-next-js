import { render, screen } from "@testing-library/react";
import Home from "../page";
import "@testing-library/jest-dom";

it("renders Home Page", () => {
  const page = render(<Home />);
  expect(page).toMatchSnapshot();
});
