import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${props => props.large ? "100%" : "fit-content"};
  padding: calc(var(--small) / 4) var(--small);
  margin: ${props => props.large ? "0" : "0 var(--small)"};
  border-radius: var(--border);
  border: 2px solid var(--red);
  background: ${props => props.primary ? "var(--red)" : "transparent"};
  color: ${props => props.primary ? "var(--grayscale-1)" : "var(--red)"};
  filter: drop-shadow(-10px 10px 4px var(--blue));
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: .1rem;
  transition: 200ms;
  outline: none;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
  :active {
    transform: scale(.8)
  }
  img {
    width: var(--medium);
    margin-left: calc(var(--small) / 4);
    filter: drop-shadow(0 0 2px var(--blue));
  }
`