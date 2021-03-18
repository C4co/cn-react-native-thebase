import React, { useState } from "react"
import {
  Container,
  Content,
  Switch,
  Space,
} from "../../src"

export function SwicthScreen(){
  const [first, setFirst] = useState(false)
  const [second, setSecond] = useState(false)
  const [third, setThird] = useState(false)

  return (
    <Container>
      <Content padder>
        <Switch
          label="Lorem Ipsum"
          value={first}
          onValueChange={() => {setFirst(!first)}}
        />
        <Space size={15} />
        <Switch
          label="Lorem Ipsum is simply dummy text"
          value={second}
          onValueChange={() => {setSecond(!second)}}
        />
        <Space size={15} />
        <Switch
          label="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          value={third}
          onValueChange={() => {setThird(!third)}}
        />
        <Space size={15} />
      </Content>
    </Container>
  )
}