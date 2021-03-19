import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from '@react-navigation/drawer'
import {
  HomeScreen,
  ButtonsScreen,
  TypographyScreen,
  InputScreen,
  SwicthScreen,
  GridScreen,
  ModalScreen
} from "../pages"
import { useTheme } from "styled-components/native"
import { Feather } from "@expo/vector-icons"
import styled from "styled-components/native"

const LeftButton = styled.TouchableOpacity`
  width: 27px;
  height: 27px;
  border-radius: 100px;
  margin-right: 15px;
  margin-top: 3px;
`

const Drawer = createDrawerNavigator()

type RoutesProps = {
  onPressLeftButton?: () => void
}

export function Routes(props: RoutesProps) {
  const theme = useTheme()

  function action(){
    if(props.onPressLeftButton){
      props.onPressLeftButton()
    }
  }

  const options = {
    headerShown: true,
    headerTintColor: theme.COLORS.TITLE,
    headerStyle: {
      elevation: 0,
      backgroundColor: theme.COLORS.BACKGROUND
    },
    headerRight: () => {
      return (
        <LeftButton onPress={action}>
          <Feather name={theme.NAME === "LIGHT" ? "moon" : "sun"} size={24} color={theme.COLORS.TITLE} />
        </LeftButton>
      )
    }
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: theme.COLORS.TITLE,
          activeBackgroundColor: theme.COLORS.BORDER,
          inactiveTintColor: theme.COLORS.TEXT,
        }}
        drawerStyle={{
          backgroundColor: theme.COLORS.BACKGROUND,
          width: 240,
        }}>
        <Drawer.Screen options={options} name="Home" component={HomeScreen} />
        <Drawer.Screen options={options} name="Buttons" component={ButtonsScreen} />
        <Drawer.Screen options={options} name="Typography" component={TypographyScreen} />
        <Drawer.Screen options={options} name="Inputs" component={InputScreen} />
        <Drawer.Screen options={options} name="Switch" component={SwicthScreen} />
        <Drawer.Screen options={options} name="Grid" component={GridScreen} />
        <Drawer.Screen options={options} name="Modal" component={ModalScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
