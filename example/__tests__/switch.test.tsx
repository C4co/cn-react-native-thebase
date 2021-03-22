import React from "react"
import "jest-styled-components"
import { render } from "@testing-library/react-native"
import { Switch, THEME_LIGHT } from "../src"

describe("<Switch/>", () => {
  test("Check initial render", () => {
    const { getByTestId } = render(<Switch theme={THEME_LIGHT} label="switch label"/>)

    expect(getByTestId("switch-wrapper")).toBeTruthy()
    expect(getByTestId("switch-label")).toBeTruthy()
    expect(getByTestId("switch-data")).toBeTruthy()
  })
})
