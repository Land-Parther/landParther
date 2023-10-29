import { ReactNode } from 'react'
import styles from './buttton.style'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const Button = ({ children, ...rest }: ButtonProps) => {
  return <styles.DefaultButton {...rest}>{children}</styles.DefaultButton>
}

export default Button
