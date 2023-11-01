import { useState } from 'react'
import { useNavigate } from 'react-router'
import Button from '@/components/shared/button'
import styles from './loginForm.styles'
import LoginInput from '../loginInput'

export default function LoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  return (
    <styles.Container onSubmit={handleSubmit}>
      <h1>LOGIN</h1>
      <LoginInput placeholder='아이디' name='username' onChange={handleInputChange} />
      <LoginInput
        placeholder='비밀번호'
        type='password'
        name='password'
        onChange={handleInputChange}
      />
      <Button type='submit' bgColor='primary'>
        로그인
      </Button>

      <styles.SignupButtonContainer>
        <styles.DivisionBox>
          <div />
          <p>계정이 없으신가요?</p>
          <div />
        </styles.DivisionBox>
        <Button bgColor='sub' onClick={() => navigate('/signup')}>
          회원가입
        </Button>
      </styles.SignupButtonContainer>
    </styles.Container>
  )
}
