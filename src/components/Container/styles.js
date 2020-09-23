import styled from 'styled-components'

export const Section = styled.section`
  position: relative;
  width: 80%;
  height: 90%;
  margin: 0 auto;
  margin-top: var(--medium);
  padding: var(--small) var(--large);
  padding-top: var(--large);
  border-radius: var(--border);
  background: rgba(255,255,255,.2);
  box-shadow: -1px 1px 5px var(--blue);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Header = styled.div`
  position: absolute;
  top: -15px;
  left: 0;
  right: 0;
  width: 40%;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  clip-path: polygon(0 0, 100% 0, 90% 100%, 10% 100%);
  background-color: var(--blue);
  color: var(--grayscale-1);
`
