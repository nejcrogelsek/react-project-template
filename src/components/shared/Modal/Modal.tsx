/* eslint-disable react/jsx-props-no-spreading */
import { Dispatch, FC, HTMLAttributes, ReactNode, SetStateAction } from 'react'
import styled from 'styled-components'

interface Props extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean
  children: ReactNode | ReactNode[]
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

const Modal: FC<Props> = ({ title, isOpen, toggle, children, ...rest }: Props) => {
  return (
    <ModalStyle isOpen={isOpen} toggle={toggle} {...rest}>
      {title && <h3>{title}</h3>}
      {children}
    </ModalStyle>
  )
}

export default Modal
