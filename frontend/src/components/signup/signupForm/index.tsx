import { useState } from 'react'
import SignupInput from '../signupInput'
import styles from './signForm.styles'
import Button from '@/components/shared/button'

export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    password: '',
    passwordConfirm: '',
    address: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <styles.Container>
      <styles.FormContainer onSubmit={handleSubmit}>
        <styles.GridContainer>
          <div />
          <h1>SIGN UP</h1>
        </styles.GridContainer>

        <SignupInput
          label='이름'
          placeholder='이름을 입력해주세요'
          name='name'
          onChange={handleInputChange}
        />
        <SignupInput
          label='아이디'
          placeholder='아이디를 입력해주세요'
          name='id'
          onChange={handleInputChange}
        />
        <SignupInput
          label='비밀번호'
          placeholder='비밀번호를 입력해주세요'
          name='password'
          type='password'
          onChange={handleInputChange}
        />
        <SignupInput
          label='비밀번호 확인'
          placeholder='비밀번호를 확인해주세요'
          name='passwordConfirm'
          type='password'
          onChange={handleInputChange}
        />
        <SignupInput label='주소' placeholder='주소' name='address' onChange={handleInputChange} />
        <styles.GridContainer>
          <div />
          <Button type='submit' bgColor='primary'>
            회원가입
          </Button>
        </styles.GridContainer>
      </styles.FormContainer>
    </styles.Container>
  )
}
