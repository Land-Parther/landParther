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
    margin-bottom: 30px;
  }
`
const SignupButtonContainer = styled.div`
  padding-top: 25px;

  p {
    width: 100%;
    color: #979797;
    font-size: 11px;
    text-align: center;
    margin-bottom: 8px;
    font-weight: 400;
  }
`

const DivisionBox = styled.div`
  display: flex;
  padding-bottom: 10px;

  div {
    width: 100%;
    border-bottom: 1px solid #979797;
    margin-bottom: 15px;
  }
`
export default {
  Container,
  SignupButtonContainer,
  DivisionBox,
}
