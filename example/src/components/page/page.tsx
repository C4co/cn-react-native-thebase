import styled, { css } from "styled-components/native"
import { THEME_LIGHT } from "../../themes"

export const Container = styled.View`
  background-color: ${props => props.theme.COLORS.BACKGROUND};
  flex: 1;
`
Container.defaultProps = { theme: THEME_LIGHT }

type ContentProps = {
  padder?: boolean
}

export const Content = styled.ScrollView<ContentProps>`
  background-color: ${props => props.theme.COLORS.BACKGROUND};
  flex: 1;

  ${props => props.padder && css`
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 15px;
  `}
`
Content.defaultProps = { theme: THEME_LIGHT }

export const Center = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
