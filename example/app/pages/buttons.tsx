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
        <Button onPress={() => {}}> Normal button  </Button>
        <Space size={10} />
        <Button loading />
        <Space size={10} />
        <Button onPress={() => {}} outline> Button outline  </Button>
        <Space size={10} />
        <Button outline loading> Button outline  </Button>
        <Space size={10} />

        <Row>
          <Button onPress={() => {}}> button </Button>
          <Space size={10} horizontal />
          <Button onPress={() => {}}> button </Button>
        </Row>

        <Space size={10} />

        <Row>
          <Button onPress={() => {}}> button </Button>
          <Space size={10} horizontal />
          <Button onPress={() => {}}> button </Button>
          <Space size={10} horizontal />
          <Button onPress={() => {}}> button </Button>
        </Row>

        <Space size={10} />

        <Row>
          <Button onPress={() => {}} outline> button </Button>
          <Space size={10} horizontal />
          <Button onPress={() => {}} outline> button </Button>
        </Row>

        <Space size={10} />

        <Row>
          <Button onPress={() => {}} outline> button </Button>
          <Space size={10} horizontal />
          <Button onPress={() => {}} outline> button </Button>
          <Space size={10} horizontal />
          <Button onPress={() => {}} outline> button </Button>
        </Row>
      </Content>
    </Container>
  )
}