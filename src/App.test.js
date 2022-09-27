import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

// 초반에 버튼이 올바르게 있는지 확인한다.
test("button has correct initial color", () => {
  render(<App />);

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({
    backgroundColor: "blue",
  });

  // expect the button text to be 'Change to red'
  expect(colorButton.textContent).toBe("Change to red");
});

test("initial condition", () => {
  render(<App />);

  // check that the button starts out enabled
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("체크박스 체크 시 버튼 비활성화", () => {
  render(<App />);

  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const button = screen.getByRole("button", { name: "Change to blue" });

  // 체크박스 체크
  fireEvent.click(checkbox);

  // 체크박스가 체크가 된 후 버튼의 비활성화 확인
  expect(button).toBeDisabled();

  // 체크박스 다시 클릭
  fireEvent.click(checkbox);

  // 버튼 다시 활성화 되는지 확인
  expect(button).toBeEnabled();
});
