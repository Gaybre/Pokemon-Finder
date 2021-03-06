import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 100%;
`

export const MainSection = styled.div`
  display: flex;
  margin-bottom: var(--small);
  align-items: center;
  text-align: center;
  div {
    flex: 3;
  }
  div:nth-child(2) {
    flex: 2.2;
  }
`

export const Image = styled.img`
  width: 120px;
  margin-right: var(--large);
  filter: drop-shadow(-10px 10px 4px var(--blue));
`

export const Types = styled.div`
  display: flex;
  justify-content: center;
  h4 {
    margin-right: var(--medium);
    margin-bottom: var(--medium);
    text-align: left;
    color: var(--blue);
    font-weight: bold;
    letter-spacing: .1rem;
    filter: drop-shadow(-10px 10px 4px var(--blue));
  }
`