import React, {useState} from "react"
import {
  Container,
  Content,
  Text,
  Button,
  Modal
} from "../../src"

export function ModalScreen(){
  const [modal, setModal] = useState(false)

  return (
    <Container>
      <Content padder>
        <Text> Modal example </Text>

        <Modal
          padder
          visible={modal}
          hardwareAccelerated={true}
          animationType="slide"
          onRequestClose={() => {
            setModal(false)
          }}>

          <Button> button </Button>
        </Modal>

        <Button onPress={() => { setModal(true) }} > Modal </Button>

      </Content>
    </Container>
  )
}