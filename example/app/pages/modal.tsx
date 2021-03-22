import React, {useState} from "react"
import {
  Container,
  Content,
  Button,
  Modal
} from "../../src"

export function ModalScreen(){
  const [showModal, setShowModal] = useState(false)

  return (
    <Container>
      <Content padder>
        <Modal
          padder
          visible={showModal}
          hardwareAccelerated={true}
          animationType="slide"
          onRequestClose={() => {
            setShowModal(false)
          }}>

          <Button onPress={() => { setShowModal(false) }}> Close modal </Button>
        </Modal>

        <Button onPress={() => { setShowModal(true) }} > Open Modal </Button>
      </Content>
    </Container>
  )
}