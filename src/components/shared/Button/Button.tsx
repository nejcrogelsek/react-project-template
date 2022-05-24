import { ButtonHTMLAttributes, FC } from 'react'
import styled from 'styled-components'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const ButtonStyle = styled.button<Props>``

const Button: FC<Props> = ({ children, onClick, type, ...rest }: Props) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ButtonStyle type={type} onClick={onClick} {...rest}>
      {children}
    </ButtonStyle>
  )
}

export default Button
