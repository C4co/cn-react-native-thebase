import "jest-styled-components"
import {
  // Components
  Button,
  Container,
  Content,
  Input,
  Modal,
  Row,
  Space,
  Switch,
  Text,
  Title,

  // Theme interface
  ThemeBase,

  // Themes
  THEME_DARK,
  THEME_LIGHT,
} from "cn-react-native-thebase"

describe("Integration", () => {
  test("Check all components and theme", () => {
    expect(Button).toBeDefined()
    expect(Container).toBeDefined()
    expect(Content).toBeDefined()
    expect(Input).toBeDefined()
    expect(Modal).toBeDefined()
    expect(Row).toBeDefined()
    expect(Space).toBeDefined()
    expect(Switch).toBeDefined()
    expect(Text).toBeDefined()
    expect(Title).toBeDefined()

    expect(THEME_DARK).toBeDefined()
    expect(THEME_LIGHT).toBeDefined()
  })
})
