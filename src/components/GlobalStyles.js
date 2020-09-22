import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --small: 20px;
    --medium: 30px;
    --large: 50px;

    --border: 10px;

    --blue: #426CB8;
    --red: #f00;
    --grayscale-1: #fff;
  }

  * {
    margin: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }

  html {
    font-size: 16px;
  }
`