import React from "react"
import styled, { useTheme, css } from "styled-components/native"
import { TextInputProps } from "react-native"

export const InputWrapper = styled.View`
  flex: 1;
`

type InputDataProps = {
  error?: boolean
}

export const InputData = styled.TextInput<InputDataProps>`
  border: solid ${props => props.theme.COLORS.INPUT_BORDER} 1px;
  padding: 10px;
  font-size: 16px;
  border-radius: 3px;
  height: 45px;
  flex: 1;

  ${props => props.error && css`
    border: solid ${props => props.theme.COLORS.INPUT_ERROR} 1px;
  `}
`

export const InputLabel = styled.Text`
  font-size: 12px;
  margin-bottom: 4px;
  color: ${props => props.theme.COLORS.INPUT_LABEL};
`

export const InputErrorMessage = styled.Text`
  font-size: 12px;
  font-style: italic;
  margin-top: 4px;
  color: ${props => props.theme.COLORS.INPUT_ERROR};
`

interface InputProps extends TextInputProps{
  label?: string
  placeholder?: string
  errorMessage?: string
  error?: boolean
}

export function Input(props: InputProps){
  const theme = useTheme()

  return (
    <InputWrapper>
      {
        props.label &&
          <InputLabel>
            {props.label}
          </InputLabel>
      }

      <InputData
        {...props}
        error={props.error}
        placeholderTextColor={theme.COLORS.INPUT_PLACEHOLDER}
        placeholder={props.placeholder}
      />

      {
        props.errorMessage &&
          <InputErrorMessage>
            {props.errorMessage}
          </InputErrorMessage>
      }
    </InputWrapper>
  )
}
