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

textarea,
input,
button {
  font-size: 1rem;
  font-family: inherit;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
  box-shadow:
    0 0px 1px hsla(0, 0%, 0%, 0.2),
    0 1px 2px hsla(0, 0%, 0%, 0.2);
  background-color: white;
  line-height: 1.5;
  margin: 0;
}

textarea:hover,
input:hover,
button:hover {
  box-shadow:
    0 0px 1px hsla(0, 0%, 0%, 0.6),
    0 1px 2px hsla(0, 0%, 0%, 0.2);
}

button:active {
  box-shadow: 0 0px 1px hsla(0, 0%, 0%, 0.4);
  transform: translateY(1px);
}

#root {
  height: 100%;
  width: 100%;
}
`

export default GlobalStyle