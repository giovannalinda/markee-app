import { App } from 'app'
import { ThemeProvider, createGlobalStyle, css } from 'styled-components'
import { theme } from 'types/theme'

export function Root () {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  )
}

export const GlobalStyle = createGlobalStyle`${({ theme }) => css`
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
    overflow-x: hidden;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  &::selection {
    color: ${theme.colors.white};
    background: ${theme.colors.primary};
  }
`}`
