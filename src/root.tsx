import { App } from 'app'
import 'normalize.css'
import { createGlobalStyle } from 'styled-components/macro'

export function Root () {
  return (
    <>
      <GlobalStyle />
      <App />
    </>
  )
}

export const GlobalStyle = createGlobalStyle`
  :root {
    --black: #1E293B;
    --lightBlack: #293445;
    --gray: #E4E5E7;
    --white: #FAFAFA;
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
`
