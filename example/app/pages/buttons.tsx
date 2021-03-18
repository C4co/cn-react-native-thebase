import React from "react"
import {
  Container,
  Content,
  Space,
  Button,
  Row
} from "../../src"

export function ButtonsScreen(){
  return (
    <Container>
      <Content padder>
        <Button> Normal button  </Button>
        <Space size={10} />
        <Button loading />
        <Space size={10} />
        <Button outline> Button outline  </Button>
        <Space size={10} />
        <Button outline loading> Button outline  </Button>
        <Space size={10} />

        <Row>
          <Button> button </Button>
          <Space size={10} horizontal />
          <Button> button </Button>
        </Row>

        <Space size={10} />

        <Row>
          <Button> button </Button>
          <Space size={10} horizontal />
          <Button> button </Button>
          <Space size={10} horizontal />
          <Button> button </Button>
        </Row>

        <Space size={10} />

        <Row>
          <Button outline> button </Button>
          <Space size={10} horizontal />
          <Button outline> button </Button>
        </Row>

        <Space size={10} />

        <Row>
          <Button outline> button </Button>
          <Space size={10} horizontal />
          <Button outline> button </Button>
          <Space size={10} horizontal />
          <Button outline> button </Button>
        </Row>
      </Content>
    </Container>
  )
}