import Input from '@/components/shared/input'
import styles from './signupInput.styles'

export default function SignupInput({ label, ...rest }) {
  return (
    <styles.Wrapper>
      <label>{label}</label>
      <Input {...rest} />
    </styles.Wrapper>
  )
}
