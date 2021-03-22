import styled, { useTheme } from "styled-components/native"
import React from "react"
import { SwitchProps as ReactSwitchProps } from "react-native"
import { THEME_LIGHT } from "../../themes"

const SwitchWrapper = styled.View`
  justify-content: space-around;
  flex-direction: row;
  padding-bottom: 8px;
  padding-top: 7px;
  padding-right: 8px;
  border-bottom-width: 1px;
  border-style: solid;
  border-bottom-color: ${props => props.theme.COLORS.BORDER} ;
`
SwitchWrapper.defaultProps = { theme: THEME_LIGHT }

const SwitchLabel = styled.Text`
  flex: 1;
  font-size: 15px;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  color: ${props => props.theme.COLORS.TEXT} ;
`
SwitchLabel.defaultProps = { theme: THEME_LIGHT }

const SwitchData = styled.Switch`
  width: 56px;
`

interface SwitchProps extends ReactSwitchProps {
  label: string,
  value?: boolean,
  theme?: any
}

export function Switch(props: SwitchProps){
  let theme = useTheme()

  if(!theme){
    theme = props.theme
  }

  return (
    <SwitchWrapper testID="switch-wrapper">
      <SwitchLabel testID="switch-label">
      { props.label }
      </SwitchLabel>
      <SwitchData
        {...props}
        testID="switch-data"
        trackColor={{
          true: theme.COLORS.SWITCH_TRACK,
          false: theme.COLORS.SWITCH_TRACK
        }}
        thumbColor={props.value ? theme.COLORS.SWITCH_THUMB_ON : theme.COLORS.SWITCH_THUMB_OFF}
      />
    </SwitchWrapper>
  )
}

Switch.defaultProps = {
  value: false
}
