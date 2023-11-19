import { render, screen } from "@testing-library/react";
import Search from "@/app/components/quran/Search";
import "@testing-library/jest-dom";

it("renders Search Component", () => {
  const page = render(<Search handleChange={() => {}} />);
  expect(page).toMatchSnapshot();
});
