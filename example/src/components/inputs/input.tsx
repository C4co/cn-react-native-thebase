import React from "react"
import styled, { useTheme, css } from "styled-components/native"
import { TextInputProps } from "react-native"
import { THEME_LIGHT } from "../../themes"

const InputWrapper = styled.View`
  flex: 1;
`

type InputDataProps = {
  error?: boolean
}

const InputData = styled.TextInput<InputDataProps>`
  border: solid ${props => props.theme.COLORS.INPUT_BORDER} 1px;
  background:  ${props => props.theme.COLORS.INPUT_BACKGROUND};
  color: ${props => props.theme.COLORS.INPUT_TEXT};
  padding: 10px;
  font-size: 15px;
  border-radius: 3px;
  height: 45px;
  flex: 1;

  ${props => props.error && css`
    border: solid ${props => props.theme.COLORS.INPUT_ERROR} 1px;
  `}
`
InputData.defaultProps = { theme: THEME_LIGHT }

const InputLabel = styled.Text`
  font-size: 12px;
  margin-bottom: 4px;
  color: ${props => props.theme.COLORS.INPUT_LABEL};
`
InputLabel.defaultProps = { theme: THEME_LIGHT }

const InputErrorMessage = styled.Text`
  font-size: 12px;
  font-style: italic;
  margin-top: 4px;
  color: ${props => props.theme.COLORS.INPUT_ERROR};
`
InputErrorMessage.defaultProps = { theme: THEME_LIGHT }

interface InputProps extends TextInputProps{
  label?: string
  placeholder?: string
  errorMessage?: string
  error?: boolean,
  theme?: any
}

export function Input(props: InputProps){
  let theme = useTheme()

  if(!theme){
    theme = props.theme
  }

  return (
    <InputWrapper testID="input-wrapper">
      {
        props.label &&
          <InputLabel testID="input-label">
            {props.label}
          </InputLabel>
      }

      <InputData
        {...props}
        testID="input-data"
        error={props.error}
        placeholderTextColor={theme.COLORS.INPUT_PLACEHOLDER}
        placeholder={props.placeholder}
      />

      {
        props.errorMessage &&
          <InputErrorMessage testID="input-error-message">
            {props.errorMessage}
          </InputErrorMessage>
      }
    </InputWrapper>
  )
}
