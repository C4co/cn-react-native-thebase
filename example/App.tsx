import { StatusBar } from "expo-status-bar"
import React from "react"
import { DARK, LIGHT } from "./src"
import { ThemeProvider } from "styled-components"
import { Routes } from "./app/navigation"

export default function App() {
  return (
    <ThemeProvider theme={LIGHT}>
      <Routes />
      <StatusBar style="auto" />
    </ThemeProvider>
  )
}
