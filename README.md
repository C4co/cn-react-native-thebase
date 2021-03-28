<h1> React Native TheBase </h1>

[![Node.js CI](https://github.com/C4co/cn-react-native-thebase/actions/workflows/ci.yml/badge.svg)](https://github.com/C4co/cn-react-native-thebase/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/C4co/cn-react-native-thebase/badge.svg?branch=master)](https://coveralls.io/github/C4co/cn-react-native-thebase?branch=master)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
[![Check live example](https://img.shields.io/badge/example%20with%20Expo-000000.svg?style=flat&logo=EXPO&labelColor=000000&logoColor=ffffff)](https://expo.io/@carlosnc/projects/thebase)

<p>
  Some basic components to start a new react native app
</p>

✅ Basic components(typography, buttons, inputs, switch etc...)

✅ Suport Themes

[Check the exemple (expo application)](https://expo.io/@carlosnc/projects/thebase)

```
npm install cn-react-native-thebase styled-components
```

if you are using typescript with react-native use:

```
npm install cn-react-native-thebase styled-components
npm install --save-dev @types/styled-components-react-native
```

## Support and tested platforms

| Android | Ios | Web |
|---------|-----|-----|
| ✅      | ❌    | ❌    |

## Dependêncies
[Styled components](https://styled-components.com/)

## First Step
Wrap aplication with ```<ThemeProvider/>``` from styled-components

```jsx
import React from "react"
import { THEME_LIGHT } from "cn-react-native-thebase"
import { ThemeProvider } from "styled-components"

export default function App() {
  return (
    <ThemeProvider theme={THEME_LIGHT}>
      {/* Your app */}
    </ThemeProvider>
  )
}

```

## Components

<details>
  <summary> Buttons </summary>
  ...
</details>

---

<details>
  <summary> Inputs </summary>
  ...
</details>

---

<details>
  <summary> Content </summary>
  ...
</details>

---

<details>
  <summary> Container </summary>
  ...
</details>

---

<details>
  <summary> Row </summary>
  ...
</details>

---

<details>
  <summary> Space </summary>
  ...
</details>

---

<details>
  <summary> Modal </summary>
  ...
</details>

---

<details>
  <summary> Switch </summary>
  ...
</details>


## Development

**Publishing a new version**

Updating main components
```
npm run update
```

Compile and generate package files
```
npm run prepate
```

Generate a .tgz package to tests
```
npm pack
```

Publishing to NPM
```
npm publish
```

---

MIT @ Carlos Costa | 2020
