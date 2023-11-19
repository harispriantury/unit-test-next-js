import { render, screen } from "@testing-library/react";
import JadwalSholat from "../../jadwal/page";
import "@testing-library/jest-dom";

it("renders detail page", () => {
  const page = render(<JadwalSholat />);
  expect(page).toMatchSnapshot();
});
