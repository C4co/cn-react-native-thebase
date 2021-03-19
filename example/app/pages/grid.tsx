import React from "react"
import {
  Container,
  Content,
  Row,
  Space
} from "../../src"

import styled, { css, useTheme } from "styled-components/native"

type BlockProps = {
  color: string
}

const Block = styled.View<BlockProps>`
  flex: 1;
  height: 80px;

  ${props => props.color && css`
    background-color: ${props.color};
  `}
`

export function GridScreen(){
  const gridSize = 2

  const theme = useTheme()

  return (
    <Container>
      <Content padder>
        <Row>
          <Block color={theme.COLORS.PRIMARY} />
        </Row>

        <Space size={gridSize}/>

        <Row>
          <Block color={theme.COLORS.PRIMARY} />
          <Space size={gridSize} horizontal/>
          <Block color={theme.COLORS.PRIMARY} />
        </Row>

        <Space size={gridSize}/>

        <Row>
          <Block color={theme.COLORS.PRIMARY} />
          <Space size={gridSize} horizontal/>
          <Block color={theme.COLORS.PRIMARY} />
          <Space size={gridSize} horizontal/>
          <Block color={theme.COLORS.PRIMARY} />
        </Row>

        <Space size={gridSize}/>

        <Row>
          <Block color={theme.COLORS.PRIMARY} />
          <Space size={gridSize} horizontal/>
          <Block color={theme.COLORS.PRIMARY} />
          <Space size={gridSize} horizontal/>
          <Block color={theme.COLORS.PRIMARY} />
          <Space size={gridSize} horizontal/>
          <Block color={theme.COLORS.PRIMARY} />
        </Row>

        <Space size={gridSize}/>

        <Row>
          <Block color={theme.COLORS.PRIMARY} />
          <Space size={gridSize} horizontal/>
          <Block color={theme.COLORS.PRIMARY} />
          <Space size={gridSize} horizontal/>
          <Block color={theme.COLORS.PRIMARY} />
          <Space size={gridSize} horizontal/>
          <Block color={theme.COLORS.PRIMARY} />
          <Space size={gridSize} horizontal/>
          <Block color={theme.COLORS.PRIMARY} />
        </Row>

      </Content>
    </Container>
  )
}