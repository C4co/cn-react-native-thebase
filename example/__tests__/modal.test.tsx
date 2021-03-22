import React from "react"
import "jest-styled-components"
import { render } from "@testing-library/react-native"
import { Modal, Text } from "../src"

describe("<Modal>", () => {
  test("Check initial render", () => {
    const { getByTestId } = render(<Modal padder> <Text>Hello world!</Text> </Modal>)

    expect(getByTestId("modal-main")).toBeTruthy()
    expect(getByTestId("modal-container")).toBeTruthy()
    expect(getByTestId("modal-content")).toBeTruthy()
  })
})