import styled, { useTheme } from "styled-components/native"
import React from "react"
import { SwitchProps as ReactSwitchProps } from "react-native"

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

const SwitchLabel = styled.Text`
  flex: 1;
  font-size: 15px;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  color: ${props => props.theme.COLORS.TEXT} ;
`

const SwitchData = styled.Switch`
  width: 56px;
`

interface SwitchProps extends ReactSwitchProps {
  label: string,
  value?: boolean,
}

export function Switch(props: SwitchProps){
  const theme = useTheme()

  return (
    <SwitchWrapper>
      <SwitchLabel>
      { props.label }
      </SwitchLabel>
      <SwitchData
        {...props}
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
