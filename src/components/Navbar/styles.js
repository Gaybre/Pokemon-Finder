import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--large);
  background-color: var(--red);
`

export const Image = styled.img`
  height: 3rem;
`

export const Menu = styled.div`
  display: flex;
  line-height: 70px;
  a {
    margin-left: var(--small);
    padding: 0 calc(var(--small) / 2 );
    text-decoration: none;
    color: var(--grayscale-1);
    font-size: 1.5rem;
    font-weight: bold;
  }
  .active {
    box-shadow: inset 0 -3px var(--grayscale-1);
  }
`