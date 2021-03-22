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
  THEME_LIGHT
} from "cn-react-native-thebase"

describe("Integration", () => {
  const MY_THEME: ThemeBase = {
    NAME: "Test theme",
    COLORS: {
      BACKGROUND: "#000000",
      BORDER: "#000000",
      BUTTON_BACKGROUND: "#000000",
      BUTTON_TEXT: "#000000",
      INPUT_BACKGROUND: "#000000",
      INPUT_BORDER: "#000000",
      INPUT_ERROR: "#000000",
      INPUT_LABEL: "#000000",
      INPUT_PLACEHOLDER: "#000000",
      INPUT_TEXT: "#000000",
      PRIMARY: "#000000",
      SWITCH_THUMB_OFF: "#000000",
      SWITCH_THUMB_ON: "#000000",
      SWITCH_TRACK: "#000000",
      TEXT: "#000000",
      TITLE: "#000000"
    }
  }

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
    expect(MY_THEME).toBeDefined()
  })
})
