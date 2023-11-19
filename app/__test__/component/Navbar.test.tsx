import { render, screen } from "@testing-library/react";
import { Navbar } from "../../components/Navbar";
import "@testing-library/jest-dom";

it("renders Navbar Component", () => {
  const page = render(<Navbar />);
  expect(page).toMatchSnapshot();
});
