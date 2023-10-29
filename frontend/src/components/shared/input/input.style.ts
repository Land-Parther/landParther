import styled from 'styled-components'

const DefaultInput = styled.input`
  width: calc(300px - 2.4em - 4px);
  padding: 0.8em 1.2em;
  background-color: white;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  border-radius: 8px;
  border: 1px solid var(--primary);
  color: var(--primary);

  &:focus,
  &:focus-visible {
    outline: none;
  }
  &::placeholder {
    color: var(--primary-light);
  }
`

export default { DefaultInput }
