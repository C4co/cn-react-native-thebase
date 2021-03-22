import React from "react"
import { Container, Text, Title, Space } from "../../src/"
import styled, { useTheme, css } from "styled-components/native"
import { Fontisto } from "@expo/vector-icons"

type IconColor = {
  color: string
}

const Icon = styled(Fontisto)<IconColor>`
  margin: 0 auto;
  font-size: 80px;

  ${props => props.color && css`
    color: ${props.color};
  `}
`

const Center = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

export function HomeScreen(){
  const theme = useTheme()

  return (
    <Container>
      <Center>
        <Icon color={theme.COLORS.PRIMARY} name="react"/>

        <Space size={30} />

        <Title fontSize={35}> TheBase </Title>

        <Space size={10} />

        <Text width={250} textAlign="center">
          Basic react native components to start a new application.
        </Text>

        <Space size={10} />

        <Text width={250} textAlign="center" color={theme.COLORS.PRIMARY}>
          Design and coded by Carlos Costa
        </Text>
      </Center>
    </Container>
  )
}
