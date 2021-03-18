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

const Drawer = createDrawerNavigator();

export function Routes() {
  const theme = useTheme()

  const options = {
    headerShown: true,
    headerTintColor: theme.COLORS.TITLE,
    headerStyle: {
      elevation: 0,
    }
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator>
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
