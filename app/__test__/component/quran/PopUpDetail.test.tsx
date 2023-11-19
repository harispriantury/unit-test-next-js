import { render, screen } from "@testing-library/react";
import PopUpDetail from "@/app/components/quran/PopUpDetail";
import "@testing-library/jest-dom";

it("renders PopUpDetail Component", () => {
  const page = render(<PopUpDetail detail={null} handleClose={() => {}} />);
  expect(page).toMatchSnapshot();
});
