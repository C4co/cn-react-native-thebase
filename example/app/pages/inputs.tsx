import React from "react"
import { Container, Content, Input, Space, Row } from "../../src/"

export function InputScreen(){
  return (
    <Container>
      <Content padder>
        <Input placeholder="Placeholder" />
        <Space size={15}/>
        <Input label="Label" placeholder="Placeholder" />
        <Space size={15}/>
        <Input label="Label" placeholder="Placeholder" error />
        <Space size={15}/>
        <Input label="Label" placeholder="Placeholder" error errorMessage="Error message" />
        <Space size={15}/>

        <Row>
          <Input placeholder="Placeholder" />
          <Space horizontal size={10}/>
          <Input placeholder="Placeholder" />
        </Row>

        <Space size={10}/>

        <Row>
          <Input placeholder="Placeholder" />
          <Space horizontal size={10}/>
          <Input placeholder="Placeholder" />
          <Space horizontal size={10}/>
          <Input placeholder="Placeholder" />
        </Row>

      </Content>
    </Container>
  )
}
