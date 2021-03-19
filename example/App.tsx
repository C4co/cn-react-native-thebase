import { StatusBar } from "expo-status-bar"
import React, { useState } from "react"
import { DARK, LIGHT } from "./src"
import { ThemeProvider } from "styled-components"
import { Routes } from "./app/navigation"

export default function App() {
  const [appTheme, setAppTheme] = useState(LIGHT)

  return (
    <ThemeProvider theme={appTheme}>
      <Routes onPressLeftButton={() => {
        if(appTheme.NAME === "LIGHT"){
          setAppTheme(DARK)
        }

        if(appTheme.NAME === "DARK"){
          setAppTheme(LIGHT)
        }
      }} />
      <StatusBar style="auto" />
    </ThemeProvider>
  )
}
