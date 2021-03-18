import React from "react"
import {
  Container,
  Content,
  Text,
  Title
} from "../../src"

export function TypographyScreen(){
  return (
    <Container>
      <Content padder>
        <Text lowercase> This is a simple text </Text>
        <Text capitalize> This is a simple text </Text>
        <Text uppercase> This is a simple text </Text>
        <Text bold> This is a simple text </Text>
        <Text color="#ff0066"> This is a simple text </Text>
        <Text color="#00cc99"> This is a green text </Text>
        <Text uppercase bold color="#ff0066"> This is a simple text </Text>
        <Text fontSize={20} underline uppercase bold color="#ff0066">
          This is a simple text
        </Text>
        <Title>Hello world!</Title>
        <Title color="red">Hello world!</Title>
      </Content>
    </Container>
  )
}