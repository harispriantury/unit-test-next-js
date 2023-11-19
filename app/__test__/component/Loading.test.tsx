import { render, screen } from "@testing-library/react";
import Footer from "@/app/components/footer";
import "@testing-library/jest-dom";

it("renders Loading Component", () => {
  const page = render(<Footer />);
  expect(page).toMatchSnapshot();
});
