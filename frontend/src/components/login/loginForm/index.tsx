import { useState } from 'react'
import LoginInput from '../loginInput'
import LoginButton from '../loginButton'
import styles from './loginForm.styles'

export default function LoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

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
      <LoginButton />
    </styles.Container>
  )
}
