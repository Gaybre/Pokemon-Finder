import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 100%;
  margin-bottom: calc(var(--medium) * 2);
`

export const MainSection = styled.div`
  display: flex;
  justify-content: center;
  div {
    flex: 1;
    text-align: center;
  }
`

export const Image = styled.img`
  width: 120px;
  filter: drop-shadow(-10px 10px 4px var(--blue));
`

export const Types = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  h4 {
    text-align: left;
    margin-right: var(--medium);
    margin-bottom: var(--medium);
    filter: drop-shadow(-10px 10px 4px var(--blue));
  }
`