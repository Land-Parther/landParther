import styled from 'styled-components'

const DefaultButton = styled.button`
  border: none;
  cursor: pointer;
  width: 300px;
  padding: 1em 1.2em;
  background-color: var(--primary);
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  transition: border-color 0.25s;
  border-radius: 8px;
  color: var(--white);

  &:hover {
    background-color: var(--primary-light);
    border-color: var(--primary);
    color: var(--primary);
  }

  &:focus,
  &:focus-visible {
    outline: none;
  }
`

export default { DefaultButton }
