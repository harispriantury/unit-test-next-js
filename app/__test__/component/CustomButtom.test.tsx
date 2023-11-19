import { render, screen } from "@testing-library/react";
import { CustomButton } from "@/app/components/CustomButton";
import "@testing-library/jest-dom";

it("renders Customer Button", () => {
  const page = render(<CustomButton text={""} style={""} />);
  expect(page).toMatchSnapshot();
});
