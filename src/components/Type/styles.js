import styled from 'styled-components'

export const Label = styled.article`
  width: fit-content;
  padding: 0 calc(var(--small) / 2);
  margin-right: calc(var(--small) / 2);
  border-radius: var(--border);
  color: var(--grayscale-1);
  font-weight: bold;
  background: ${props => `var(--${props.type})`};
  filter: drop-shadow(-10px 10px 4px var(--blue));
`