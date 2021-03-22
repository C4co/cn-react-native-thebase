import React, { Fragment } from "react"
import { Modal as ReactModal, ModalProps as ReactModalProps } from "react-native"
import styled, { css } from "styled-components/native"
import { THEME_LIGHT } from "../../themes/"

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
ModalContent.defaultProps = { theme: THEME_LIGHT }

interface ModalProps extends ReactModalProps {
  children: any
  padder?: boolean
}

export function Modal(props: ModalProps){
  return (
    <Fragment>
      <ReactModal testID="modal-main" transparent={true} {...props}>
        <ModalContainer testID="modal-container">
          <ModalContent testID="modal-content" padder={props.padder} style={{elevation: 30}}>
            {props.children}
          </ModalContent>
        </ModalContainer>
      </ReactModal>
    </Fragment>
  )
}
