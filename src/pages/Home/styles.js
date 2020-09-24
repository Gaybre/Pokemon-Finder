import styled from 'styled-components'

export const Container = styled.section`
  display: grid;
  grid-template: 90px 1fr 90px / 280px 1fr;
  grid-template-areas: 'title ash'
                        'gif ash'
                        'button ash';
  min-width: 600px;
  max-width: 750px;
  margin: 0 auto;
  margin-top: var(--large);
  text-align: center;
  h1 {
    filter: drop-shadow(-10px 10px 4px var(--blue));
    color: var(--blue);
    font-weight: bold;
    font-size: 1.8rem;
  }
  img {
    grid-area: gif;
    width: 60%;
    margin: 0 auto;
    border-radius: var(--border);
    filter: drop-shadow(-10px 10px 4px var(--blue));
  }
  div {
    grid-area: button;
    margin: 0 auto;
    align-self: end;
    a {
      text-decoration: none;
    }
  }
`

export const Image = styled.img`
  width: 100% !important;
  grid-area: ash !important;
`