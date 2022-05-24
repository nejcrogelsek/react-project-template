import { Dispatch, FC, HTMLAttributes, ReactChild, SetStateAction } from 'react'
import styled from 'styled-components'

interface Props extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean
  children: ReactChild | ReactChild[]
  title?: string
  big?: boolean
  toggle: Dispatch<SetStateAction<boolean>>
  close?: boolean
}

interface ModalStyleProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean
  toggle: Dispatch<SetStateAction<boolean>>
}

export const ModalStyle = styled.div<ModalStyleProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 1rem;
`

const Modal: FC<Props> = ({ title, isOpen, toggle, children, className }: Props) => {
  return (
    <ModalStyle className={className} isOpen={isOpen} toggle={toggle}>
      {title && <h3>{title}</h3>}
      {children}
    </ModalStyle>
  )
}

export default Modal
