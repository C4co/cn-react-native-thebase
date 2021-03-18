import { ThemeBase } from "./src/themes"

declare module "styled-components" {
  export interface DefaultTheme extends ThemeBase {}
}
