import React from "react"
import "jest-styled-components"
import { render } from "@testing-library/react-native"
import { Button } from "../../components"
import { LIGHT } from  "../../themes"

describe("Button test", () =>{
  test("Check initial rendering (solid button)", () => {
    const { getByTestId, getByText } = render(
      <Button>Test Button</Button>
    )

    expect(getByTestId("button-solid")).toBeTruthy()
    expect(getByTestId("button-label")).toBeTruthy()
    expect(getByText("Test Button")).toBeTruthy()
    expect(getByTestId("button-solid").props.style.backgroundColor).toBe(LIGHT.COLORS.BUTTON_BACKGROUND)
  })

  test("Check outline button", () => {
    const { getByTestId } = render(
      <Button outline>Test Button</Button>
    )

    expect(getByTestId("button-outline").props.style.backgroundColor).toBe("transparent")
    expect(getByTestId("button-outline-label").props.style[0].color).toBe(LIGHT.COLORS.BUTTON_BACKGROUND)
  })

  test("Check solid loading button", () => {
    const { queryByTestId, getByTestId } = render(
      <Button theme={LIGHT} loading>Test Button</Button>
    )

    expect(queryByTestId("button-label")).toBeFalsy()
    expect(queryByTestId("button-outline-label")).toBeFalsy()
    expect(getByTestId("button-solid-loading")).toBeTruthy()
    expect(getByTestId("button-load")).toBeTruthy()
  })

  test("Check outline solid button", () => {
    const { getByTestId } = render(
      <Button theme={LIGHT} loading outline>Test Button</Button>
    )

    expect(getByTestId("button-outline-loading")).toBeTruthy()
    expect(getByTestId("button-load")).toBeTruthy()
  })
})
