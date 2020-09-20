import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --small: 20px;
    --medium: 30px;
    --large: 50px;

    --border: 10px;
  }

  * {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }

  html {
    font-size: 16px;
  }
`