import styles from './input.style'

const Input = ({ ...rest }: React.InputHTMLAttributes<HTMLInputElement>) => {
  return <styles.DefaultInput {...rest} />
}

export default Input
