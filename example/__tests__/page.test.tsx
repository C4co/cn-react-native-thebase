import React from "react"
import "jest-styled-components"
import { render } from "@testing-library/react-native"
import { Container, Content, Text } from "../src"

describe("<Container/> & <Content/>",() => {
  test("Check initial render", () => {
    const { getByTestId } = render(
      <Container testID="container">
        <Content padder testID="content">
          <Text testID="text">Page test</Text>
        </Content>
      </Container>
    )

    expect(getByTestId("container")).toBeTruthy();
    expect(getByTestId("content")).toBeTruthy();
    expect(getByTestId("text")).toBeTruthy();
  })
})
