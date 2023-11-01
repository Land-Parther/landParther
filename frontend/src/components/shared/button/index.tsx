import { ReactNode } from 'react'
import styles from './buttton.style'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  bgColor: string
}

const Button = ({ children, bgColor, ...rest }: ButtonProps) => {
  return (
    <styles.DefaultButton bgColor={bgColor} {...rest}>
      {children}
    </styles.DefaultButton>
  )
}

export default Button
