import { App } from 'app'
import 'normalize.css'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from 'assets/theme/theme'

export function Root () {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </>
  )
}

export const GlobalStyle = createGlobalStyle`
  :root {
    --black: #1E293B;
    --lightBlack: #293445;
    --gray: #E4E5E7;
    --white: rgb(250, 250, 250);
    --primary: #1FC8E1;
    --primaryDark: '#18A1B5';
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'DM Sans', sans-serif;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  &::selection {
    color: var(--white);
    background: var(--primary);
  }
`
