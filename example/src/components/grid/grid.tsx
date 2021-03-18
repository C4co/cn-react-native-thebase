import styled, { css } from "styled-components/native"

export const Row = styled.View`
  flex-direction: row;
`

type SpaceProps = {
  size?: number
  horizontal?: boolean
}

export const Space = styled.View<SpaceProps>`
  height: 10px;

  ${props => props.size && css`
    height: ${props.size}px;
  `}

  ${props => (props.horizontal && props.size) && css`
    margin-left: ${props.size / 2}px;
    margin-right: ${props.size / 2}px;
  `}
`
