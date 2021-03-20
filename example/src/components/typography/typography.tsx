import styled, {css}  from "styled-components/native"
import { THEME_LIGHT } from "../../themes"

type TextProps = {
  color?: string
  uppercase?: boolean
  lowercase?: boolean
  bold?: boolean
  fontSize?: number
  capitalize?: boolean
  underline?: boolean
}

export const Text = styled.Text<TextProps>`
  font-size: 15px;
  color: ${props => props.theme.COLORS.TEXT};

  ${props => props.color && css`
    color: ${props.color}
  `}

  ${props => props.uppercase && css`
    text-transform: uppercase;
  `}

  ${props => props.capitalize && css`
    text-transform: capitalize;
  `}

  ${props => props.lowercase && css`
    text-transform: lowercase;
  `}

  ${props => props.bold && css`
    font-weight: bold;
  `}

  ${props => props.fontSize && css`
    font-size: ${props.fontSize}px;
  `}

  ${props => props.underline && css`
    text-decoration: underline
  `}
`

Text.defaultProps = { theme: THEME_LIGHT }

type TitleProps = {
  color?: string
}

export const Title = styled(Text)<TitleProps>`
  color: ${props => props.theme.COLORS.TITLE};
  font-weight: bold;

  ${props => props.color && css`
    color: ${props.color}
  `}
`

Title.defaultProps = { theme: THEME_LIGHT }
