import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-bottom: calc(var(--medium) * 2);
  div {
    flex: 1;
    text-align: center;
    /* border: 1px solid var(--blue); */
  }
  h4 {
    text-align: left;
    margin-top: var(--medium);
    margin-bottom: calc(var(--small) / 2);
  }
`

export const Image = styled.img`
  width: 120px;
  filter: drop-shadow(-10px 10px 4px var(--blue));
`

export const Types = styled.div`
  display: flex;
`