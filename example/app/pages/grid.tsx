import React from "react"
import {
  Container,
  Content,
  Row,
  Space
} from "../../src"

import styled from "styled-components/native"

const Block = styled.View`
  flex: 1;
  height: 80px;
  background: #cccccc;
`

export function GridScreen(){
  const gridSize = 2

  return (
    <Container>
      <Content padder>
        <Row>
          <Block/>
        </Row>

        <Space size={gridSize}/>

        <Row>
          <Block/>
          <Space size={gridSize} horizontal/>
          <Block/>
        </Row>

        <Space size={gridSize}/>

        <Row>
          <Block/>
          <Space size={gridSize} horizontal/>
          <Block/>
          <Space size={gridSize} horizontal/>
          <Block/>
        </Row>

        <Space size={gridSize}/>

        <Row>
          <Block/>
          <Space size={gridSize} horizontal/>
          <Block/>
          <Space size={gridSize} horizontal/>
          <Block/>
          <Space size={gridSize} horizontal/>
          <Block/>
        </Row>

        <Space size={gridSize}/>

        <Row>
          <Block/>
          <Space size={gridSize} horizontal/>
          <Block/>
          <Space size={gridSize} horizontal/>
          <Block/>
          <Space size={gridSize} horizontal/>
          <Block/>
          <Space size={gridSize} horizontal/>
          <Block/>
        </Row>

      </Content>
    </Container>
  )
}