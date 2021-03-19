import { ThemeBase } from "./themes"

declare module "styled-components" {
  export interface DefaultTheme extends ThemeBase {}
}

export * from "./components/index"
export * from "./themes/index"
