import { render, screen, fireEvent } from "@testing-library/react";
import App, { replaceCamelWithSpaces } from "./App";

// 초반에 버튼이 올바르게 있는지 확인한다.
test("button has correct initial color", () => {
  render(<App />);

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole("button", {
    name: "Change to MidnightBlue",
  });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({
    backgroundColor: "MidnightBlue",
  });

  // expect the button text to be 'Change to red'
  expect(colorButton.textContent).toBe("Change to MediumVioletRed");
});

test("initial condition", () => {
  render(<App />);

  // check that the button starts out enabled
  const colorButton = screen.getByRole("button", {
    name: "Change to MidnightBlue",
  });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("체크박스 체크 시 버튼 비활성화", () => {
  render(<App />);

  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const button = screen.getByRole("button", { name: "Change to MidnightBlue" });

  // 체크박스 체크
  fireEvent.click(checkbox);

  // 체크박스가 체크가 된 후 버튼의 비활성화 확인
  expect(button).toBeDisabled();

  // 체크박스 다시 클릭
  fireEvent.click(checkbox);

  // 버튼 다시 활성화 되는지 확인
  expect(button).toBeEnabled();
});

test("Disabled button has gray background and reverts to red", () => {
  render(<App />);
  const button = screen.getByRole("button");
  const checkbox = screen.getByRole("checkbox");

  // disable button
  fireEvent.click(checkbox);
  expect(button).toHaveStyle("background-color : gray");

  // re-enable button
  fireEvent.click(checkbox);
  expect(button).toHaveStyle("background-color : MediumVioletRed");
});

test("Clicked disabled has gray background and reverts to blue", () => {
  render(<App />);
  const button = screen.getByRole("button");
  const checkbox = screen.getByRole("checkbox");

  // change button to blue
  fireEvent.click(button);

  // disable button
  fireEvent.click(checkbox);
  expect(button).toHaveStyle("background-color : gray");

  // re-enable button
  fireEvent.click(checkbox);
  expect(button).toHaveStyle("background-color : MidnightBlue");
});

describe("spaces before camel-cases capital letters", () => {
  test("Works for no inner capitel letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });
  test("Works for one inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("Works for multiple inner capital letters", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
