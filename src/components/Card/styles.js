import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: inherit;
  gap: calc(var(--small) / 2);
`

export const CardContainer = styled.article`
  position: relative;
  display: flex;
  min-width: 200px;
  max-width: 250px;
  height: 150px;
  border-radius: var(--border);
  border-top-left-radius: var(--border);
  border-top-right-radius: var(--border);
  box-shadow: -1px 1px 5px var(--blue);
  background: ${props => `var(--${props.type})`};
`

export const CardDetails = styled.div`
  align-self: flex-end;
  width: 100%;
  height: 100px;
  padding: 0 var(--small);
  padding-top: 25px;
  border-radius: var(--border);
  border-top-left-radius: calc(var(--border)*3);
  border-top-right-radius: calc(var(--border)*3);
  color: var(--grayscale-3);
  background-color: var(--grayscale-1);
  h4 {
    text-align: center;
  }
  hr {
    width: 70%;
    margin: 0 auto;
    margin-bottom: calc(var(--small) / 2);
    border: 1px solid ${props => `var(--${props.type})`};
  }
`

export const Image = styled.img`
  position: absolute;
  top: -5px;
  left: 0;
  right: 0;
  width: 90px;
  margin: 0 auto;
`