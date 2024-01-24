import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html,
body {
  height: 100%;
  margin: 0;
  line-height: 1.5;
  color: #121212;
}

#root {
  height: 100%;
  width: 100%;
}
`

export default GlobalStyle
