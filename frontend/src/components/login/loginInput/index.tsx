import Input from '@/components/shared/input'
import styles from './loginInput.styles'

export default function LoginInput({ ...rest }) {
  return (
    <styles.Wrapper>
      <Input {...rest} />
    </styles.Wrapper>
  )
}
