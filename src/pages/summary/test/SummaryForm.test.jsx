import { render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

test("initial test", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });

  expect(checkbox).not.toBeChecked();

  const confirmButton = screen.getByRole("button", { name: /confirm order/i });
  expect(confirmButton).toBeDisabled();
});

test("Checkbox disables button on first click and enables on second click", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const confirmButton = screen.getByRole("button", { name: /confirm order/i });

  userEvent.click(checkbox);
  expect(confirmButton).toBeEnabled();

  userEvent.click(checkbox);
  expect(confirmButton).toBeDisabled();
});

test("popover responds to hover", () => {
  // popover starts out hidden
  // popover appears upon mouseover of checkbox label
  // popover disappears when we mouse out
});
