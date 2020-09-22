import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 150px;
  padding: calc(var(--small) / 4) var(--small);
  margin: 0 var(--small);
  border-radius: var(--border);
  border: 2px solid var(--red);
  background: ${props => props.primary ? "var(--red)" : "transparent"};
  color: ${props => props.primary ? "var(--grayscale-1)" : "var(--red)"};
  font-weight: bold;
  transition: 200ms;
  outline: none;
  cursor: pointer;
  :active {
    transform: scale(.8)
  }
`

export const Image = styled.img`
  width: var(--medium);
`