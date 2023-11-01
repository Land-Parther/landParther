import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  h1 {
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    line-height: 20px;
    color: var(--primary);
    margin-bottom: 30px;
  }
`
const FormContainer = styled.form``

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
`

export default {
  Container,
  FormContainer,
  GridContainer,
}
