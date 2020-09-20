import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  width: 80%;
  margin: 0 auto;
  margin-top: var(--medium);
  padding: var(--small);
  border: 1px solid blue;
  border-radius: var(--border);
  text-align: center;
`

export const Div = styled.div`
  padding: var(--small);
  flex: 1;
  /* border: 1px solid blue; */
  border-radius: var(--border);
`

export const ActualPokemon = styled.div`
  width: 100%;
  height: 250px;
`

export const Buttons = styled.div`
display: flex;
justify-content: space-evenly;
width: 100%
`