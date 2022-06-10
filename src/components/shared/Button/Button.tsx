import { ButtonHTMLAttributes, FC } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<Props> = ({ children, onClick, type, ...rest }: Props) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <button type={type} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}

export default Button
