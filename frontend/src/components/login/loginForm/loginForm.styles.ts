import styled from 'styled-components'

const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  h1 {
    font-size: 24px;
    font-weight: 600;
    line-height: 20px;
    color: var(--primary);
    margin-bottom: 20px;
  }
`

export default {
  Container,
}
