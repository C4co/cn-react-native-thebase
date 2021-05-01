import { StatusBar } from "expo-status-bar"
import React, { useState } from "react"
import { THEME_DARK, THEME_LIGHT } from "./src"
import { ThemeProvider } from "styled-components"
import { Routes } from "./app/navigation"

export default function App() {
  const [appTheme, setAppTheme] = useState(THEME_LIGHT)

  return (
    <ThemeProvider theme={appTheme}>
      <Routes onPressLeftButton={() => {
        if(appTheme.NAME === "LIGHT"){
          setAppTheme(THEME_DARK)
        }

        if(appTheme.NAME === "DARK"){
          setAppTheme(THEME_LIGHT)
        }
      }} />
      <StatusBar style={appTheme.NAME === "DARK" ? "light" : "dark"} />
    </ThemeProvider>
  )
}
