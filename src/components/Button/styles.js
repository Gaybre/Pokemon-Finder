import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 150px;
  padding: 5px 20px;
  background: ${props => props.primary ? "#f00" : "transparent"};
  color: ${props => props.primary ? "white" : "#f00"};
  border: none;
  border-radius: 10px;
  border: 2px solid #f00;
  font-weight: bold;
  transition: 200ms;
  outline: none;
  cursor: pointer;
  :active {
    transform: scale(.8)
  }
`

export const OutlineButton = styled.button`

`

export const Image = styled.img`
  width: 30px;
`