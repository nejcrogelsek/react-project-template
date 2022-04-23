import { ButtonHTMLAttributes, FC } from 'react'
import styled from 'styled-components'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const ButtonStyle = styled.button<Props>``

const Button: FC<Props> = ({ children, className, onClick, type }: Props) => {
  return (
    <ButtonStyle className={className} type={type} onClick={onClick}>
      {children}
    </ButtonStyle>
  )
}

export default Button
