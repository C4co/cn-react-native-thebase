import React from "react"
import "jest-styled-components"
import { render } from "@testing-library/react-native"
import { Input, THEME_LIGHT } from "../src"

describe("<Input />", () => {
  test("Check initial render", () => {
    const { getByTestId } = render(<Input theme={THEME_LIGHT}/>)

    expect(getByTestId("input-wrapper")).toBeTruthy()
    expect(getByTestId("input-data")).toBeTruthy()
  })

  test("Check input label", () => {
    const { getByTestId } = render(<Input label="Input test" theme={THEME_LIGHT}/>)

    expect(getByTestId("input-label")).toBeTruthy()
  })

  test.only("Check error state", () => {
    const { getByTestId } = render(<Input error errorMessage="Input error" label="Input test" theme={THEME_LIGHT}/>)

    expect(getByTestId("input-data").props.style[0].borderColor).toBe(THEME_LIGHT.COLORS.INPUT_ERROR)
    expect(getByTestId("input-error-message")).toBeTruthy()
  })
})
