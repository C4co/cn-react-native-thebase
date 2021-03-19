import React from "react"
import {
  Container,
  Content,
  Text,
  Title,
  Space
} from "../../src"

export function TypographyScreen(){
  return (
    <Container>
      <Content padder>
        <Title fontSize={30}>
          Big title
        </Title>

        <Space size={10} />

        <Title fontSize={23}>
          Middle title
        </Title>

        <Space size={10} />

        <Title fontSize={18}>
          Middle title
        </Title>

        <Space size={10} />

        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Text>

        <Space size={10} />

        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore possimus nostrum magni reiciendis laboriosam rem quaerat fugit non laborum ea. Ipsa eum quia officia, deleniti consequuntur corporis? Eum, quo aperiam?
        </Text>

        <Space size={10} />

        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore possimus nostrum magni reiciendis laboriosam rem quaerat fugit non laborum ea. Ipsa eum quia officia, deleniti consequuntur corporis? Eum, quo aperiam?
        </Text>
      </Content>
    </Container>
  )
}