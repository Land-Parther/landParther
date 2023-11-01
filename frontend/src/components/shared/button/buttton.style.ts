import styled from 'styled-components'

const DefaultButton = styled.button<{ bgColor?: string }>`
  border: none;
  cursor: pointer;
  width: 300px;
  padding: 1em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  transition: border-color 0.25s;
  border-radius: 8px;

  background-color: ${({ bgColor }) => (bgColor === 'primary' ? 'var(--primary)' : 'var(--white)')};
  color: ${({ bgColor }) => (bgColor === 'primary' ? 'var(--white)' : 'var(--primary)')};
  border: 1px solid var(--primary);

  &:hover {
    background-color: var(--primary-light);
    color: var(--primary);
  }

  &:focus,
  &:focus-visible {
    outline: none;
  }
`

export default { DefaultButton }
