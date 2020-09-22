import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: var(--small) 0;
  div {
    flex: 1;
    text-align: center;
    border: 1px solid var(--blue);
  }
`

export const Image = styled.img`
  width: 80px;
`