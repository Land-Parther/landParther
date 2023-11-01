import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  align-items: center;
  margin-bottom: 30px;
  label {
    min-width: 100px;
    font-size: 0.9rem;
    color: var(--primary);
  }
`

export default {
  Wrapper,
}
