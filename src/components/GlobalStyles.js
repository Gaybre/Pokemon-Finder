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

    --bug: #A8B820;
    --flying: #A890F0;
    --normal: #A8A878;
    --ground: #E0C068;
    --fairy: #E03A83;
    --psychic: #A65E9A;
    --rock: #B8A038;
    --ice: #98D8D8;
    --electric: #F8D030;
    --water: #6890F0;
    --fire: #E24242;
    --poison: #A040A0;
    --grass: #7DB808;
    --fighting: #FF501F;
    --steel: #B8B8D0;
    --ghost: #705898;
    --dark: #2C2E2B;
    --dragon: #C6A114;
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