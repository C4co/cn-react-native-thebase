import React from "react"
import "jest-styled-components"
import { render } from "@testing-library/react-native"
import { Row, Space, Text } from "../src/components"

describe("<Row/> and <Space/>", () => {
  test("Check initial rendering", () => {
    const { getByText, getByTestId } = render(
      <Row>
        <Space testID="space" size={10}/>
        <Space testID="horizontal-space" horizontal size={10}/>
        <Text>Row and spaces</Text>
        <Space/>
      </Row>
    )

    expect(getByText("Row and spaces")).toBeTruthy()
    expect(getByTestId("space").props.style[0].height).toBe(10)
    expect(getByTestId("horizontal-space").props.style[0].marginLeft).toBe(5)
    expect(getByTestId("horizontal-space").props.style[0].marginRight).toBe(5)
  })
})
