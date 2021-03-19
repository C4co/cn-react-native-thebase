import React from "react"
import { TouchableOpacityProps } from "react-native"
import styled, { useTheme } from "styled-components/native"
import { LIGHT } from "../../themes"

const ButtonSolid = styled.TouchableOpacity`
  padding: 0px 15px;
  height: 45px;
  flex: 1;
  max-width: 100%;
  align-items: center;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  border-radius: 3px;
  background-color: ${props => props.theme.COLORS.BUTTON_BACKGROUND};
  overflow: hidden;
`
ButtonSolid.defaultProps = { theme: LIGHT }

const ButtonSolidLoading = styled.View`
  padding: 0px 15px;
  height: 45px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  border-radius: 3px;
  background-color: ${props => props.theme.COLORS.BUTTON_BACKGROUND};
  overflow: hidden;
  opacity: 0.7;
`
ButtonSolidLoading.defaultProps = { theme: LIGHT }

const ButtonText = styled.Text`
  color: ${props => props.theme.COLORS.BUTTON_TEXT};
  font-size: 13px;
  text-transform: uppercase;
  font-weight: bold;
`
ButtonText.defaultProps = { theme: LIGHT }

const ButtonOutline = styled(ButtonSolid)`
  border: solid ${props => props.theme.COLORS.BUTTON_BACKGROUND} 1px;
  background-color: transparent;
`
ButtonOutline.defaultProps = { theme: LIGHT }

const ButtonOutlineLabel = styled(ButtonText)`
  color: ${props => props.theme.COLORS.BUTTON_BACKGROUND};
`
ButtonOutlineLabel.defaultProps = { theme: LIGHT }

const Load = styled.ActivityIndicator`
  margin-right: 0px;
`

interface ButtonProps extends TouchableOpacityProps {
  children?: string,
  loading?: boolean,
  outline?: boolean,
  theme?: any
}

export function Button(props: ButtonProps){
  let theme = useTheme()

  if(!theme){
    theme = props.theme
  }

  // Loading and outline
  if(props.loading && props.outline){
    return (
      <ButtonOutline testID="button-outline-loading" activeOpacity={0.8}>
        <Load testID="button-load" color={theme.COLORS.BUTTON_BACKGROUND} />
      </ButtonOutline>
    )
  }

  // Outline
  if(props.outline){
    return (
      <ButtonOutline testID="button-outline" activeOpacity={0.8} {...props}>
        <ButtonOutlineLabel testID="button-outline-label"> {props.children} </ButtonOutlineLabel>
      </ButtonOutline>
    )
  }

  // Loading
  if(props.loading){
    return (
      <ButtonSolidLoading testID="button-solid-loading">
        <Load testID="button-load" color={theme.COLORS.BUTTON_TEXT} />
      </ButtonSolidLoading>
    )
  }

  // Default
  return (
    <ButtonSolid testID="button-solid" activeOpacity={0.8} {...props}>
      <ButtonText testID="button-label">
        {props.children}
      </ButtonText>
    </ButtonSolid>
  )
}
