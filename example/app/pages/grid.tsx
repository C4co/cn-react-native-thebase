import React from "react"
import {
  Container,
  Content,
  Row,
  Space
} from "../../src"

import styled from "styled-components/native"

const Image = styled.Image`
  flex: 1;
  height: 120px;
  background: ${props => props.theme.COLORS.PRIMARY};
`

export function GridScreen(){
  const gridSize = 5

  return (
    <Container>
      <Content padder>
        <Row>
          <Image source={{ uri: "https://images.unsplash.com/photo-1459478309853-2c33a60058e7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8Y29sb3J8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}} />
        </Row>

        <Space size={gridSize}/>

        <Row>
          <Image source={{ uri: "https://images.unsplash.com/photo-1487222444179-52db5bc15efe?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjN8fGNvbG9yZnVsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}} />
          <Space horizontal size={gridSize}/>
          <Image source={{ uri: "https://images.unsplash.com/photo-1490487135801-031cf13ab462?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fGNvbG9yZnVsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}} />
        </Row>

        <Space size={gridSize}/>

        <Row>
          <Image source={{ uri: "https://images.unsplash.com/photo-1481016570479-9eab6349fde7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fGNvbG9yZnVsfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60"}} />
          <Space horizontal size={gridSize}/>
          <Image source={{ uri: "https://images.unsplash.com/photo-1500043204644-768d20653f32?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTR8fGNvbG9yfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}} />
          <Space horizontal size={gridSize}/>
          <Image source={{ uri: "https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDV8fGNvbG9yZnVsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}} />
        </Row>

        <Space size={gridSize}/>

        <Row>
          <Image source={{ uri: "https://images.unsplash.com/photo-1541746059718-2dbda57663c0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODZ8fGNvbG9yfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}} />
        </Row>
      </Content>
    </Container>
  )
}