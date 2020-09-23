import styled from 'styled-components'

export const Label = styled.article`
  width: fit-content;
  height: fit-content;
  padding: 0 calc(var(--small) / 2);
  margin-right: var(--small);
  border-radius: var(--border);
  color: var(--grayscale-1);
  font-weight: bold;
  background: ${props => `var(--${props.type})`};
  filter: drop-shadow(-10px 10px 4px var(--blue));
`