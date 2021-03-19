import React from "react"
import "jest-styled-components"
import { render } from "@testing-library/react-native"
import { Row, Space, Text } from "../src/components"

describe("<Row/> and <Space/>", () => {
  test("Check initial rendering", () => {
    const { getByText } = render(
      <Row>
        <Space size={10} horizontal />
        <Text>Row and spaces</Text>
        <Space/>
      </Row>
    )

    expect(getByText("Row and spaces")).toBeTruthy()
  })
})
