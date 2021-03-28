import React, { useState } from "react"
import {
  Container,
  Content,
  Text,
  Title,
  Button,
  Input,
  Space,
  Switch,
  Modal
} from "../../src"

export function AllComponents(){
  const [showModal, setShowModal] = useState(false)
  return (
    <Container>
      <Content padder>
        <Title> Title - Lorem ipsum </Title>
        <Space size={10}/>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At magnam consequatur qui itaque, voluptatibus sint culpa delectus deleniti aut, blanditiis voluptas fuga, ratione reiciendis consectetur quibusdam optio facere eaque eveniet?
        </Text>
        <Space size={20}/>
        <Button> Normal Button </Button>
        <Space size={10}/>
        <Button loading> Loading Button </Button>
        <Space size={10}/>
        <Button outline> Outline Button </Button>
        <Space size={10}/>
        <Button outline loading> Outline Button </Button>
        <Space size={20}/>
        <Input placeholder="Placeholder" label="label - lorem ipsum" />
        <Space size={10}/>
        <Input placeholder="Placeholder" label="label - lorem ipsum" error errorMessage="Error message!" />
        <Space size={20}/>
        <Switch label="Switch on" value={true} />
        <Space size={10}/>
        <Switch label="Switch off" value={false} />
        <Space size={20}/>
        <Button onPress={() => {setShowModal(true)}}> Open modal </Button>
        <Modal padder animationType="slide" visible={showModal}>
          <Button onPress={() => {setShowModal(false)}}> Close modal </Button>
        </Modal>
        <Space size={40}/>
      </Content>
    </Container>
  )
}