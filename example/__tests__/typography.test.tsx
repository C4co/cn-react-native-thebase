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
          <Title testID="title-color" color="#000000">Title color</Title>

          <Text testID="text">Text component</Text>
          <Text testID="text-align-left" textAlign="left">Text align left</Text>
          <Text testID="text-align-right" textAlign="right">Text align right</Text>
          <Text testID="text-align-right" textAlign="center">Text align center</Text>
          <Text testID="text-width" width={200}>Text width</Text>
          <Text testID="text-fontsize" fontSize={20}>Text font size</Text>
          <Text testID="text-underline" underline>Text underline</Text>
          <Text testID="text-bold" bold>Text bold</Text>
          <Text testID="text-color" color="#000000">Text color</Text>
          <Text testID="text-uppercase" uppercase>Text uppercase</Text>
          <Text testID="text-lowercase" lowercase>Text lowercase</Text>
          <Text testID="text-capitalize" capitalize>Text capitalize</Text>
        </Content>
      </Container>
    )

    expect(getByTestId("title")).toBeTruthy()
    expect(getByTestId("text")).toBeTruthy()
  })
})
