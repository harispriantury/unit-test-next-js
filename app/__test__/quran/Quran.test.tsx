import { render, screen } from "@testing-library/react";
import Quran from "../../quran/page";
import Search from "../../components/quran/Search";
import "@testing-library/jest-dom";

it("renders Quran Page", () => {
  render(<Quran />);

  const page = render(<Quran />);
  expect(page).toMatchSnapshot();
});
