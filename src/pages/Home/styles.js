import styled from 'styled-components'

export const Container = styled.section`
  display: grid;
  grid-template: 50px 150px 1fr / 260px 1fr;
  grid-template-areas: 'title title'
                        'button ash'
                        'gif ash';
  min-width: 600px;
  max-width: 750px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  margin-top: var(--large);
  text-align: center;
  h1 {
    grid-area: title;
    color: var(--blue);
    font-weight: bold;
    font-size: 2.7rem;
    filter: drop-shadow(-10px 10px 4px var(--blue));
  }
  img {
    grid-area: gif;
    width: 80%;
    margin: 0 auto;
    border-radius: var(--border);
    filter: drop-shadow(-10px 10px 4px var(--blue));
  }
  div {
    grid-area: button;
    align-self: center;
    transition: 300ms;
    :hover {
      transform: scale(1.2);
    }
    a {
      text-decoration: none;
    }
    img {
      margin: 0;
    }
    button {
      font-size: 1.1rem;
      letter-spacing: .3rem;
      justify-content: space-evenly;
    }
  }
  /* @media and screen(max-width: 768px) {

  } */
`

export const Image = styled.img`
  width: 100% !important;
  grid-area: ash !important;
`