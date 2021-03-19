import React, { Fragment } from "react"
import { Modal as ReactModal, ModalProps as ReactModalProps } from "react-native"
import styled, { css } from "styled-components/native"

interface ModalProps extends ReactModalProps {
  children: any
  padder?: boolean;
}

const ModalContainer = styled.View`
  width: 100%;
  flex: 1px;
  padding-top: 30px;
  background-color: rgba(0, 0, 0, 0.3);
`

type ModalContentProps = {
  padder?: boolean
}

const ModalContent = styled.ScrollView<ModalContentProps>`
  background: ${props => props.theme.COLORS.BACKGROUND};
  flex: 1px;
  ${props => props.padder && css`
    padding: 15px;
  `}
`

export function Modal(props: ModalProps){
  return (
    <Fragment>
      <ReactModal transparent={true} {...props}>
        <ModalContainer>
          <ModalContent padder={props.padder} style={{elevation: 30}}>
            {props.children}
          </ModalContent>
        </ModalContainer>
      </ReactModal>
    </Fragment>
  )
}
