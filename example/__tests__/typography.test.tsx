import React, { Fragment } from "react"
import "jest-styled-components"
import { render } from "@testing-library/react-native"
import { Container, Title, Text, Content } from "../src"

describe("<Text/> and <Title/>", () => {
  test("Check initial render", () => {
    const { getByTestId } = render(
      <Container>
        <Content>
          <Title testID="title">Title component</Title>
          <Text testID="text">Text component</Text>
        </Content>
      </Container>
    )

    expect(getByTestId("title")).toBeTruthy()
    expect(getByTestId("text")).toBeTruthy()
  })
})
