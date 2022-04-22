import { FC, ReactChild } from 'react'
import styled from 'styled-components'

interface Props {
  isOpen: boolean
  children: ReactChild | ReactChild[]
  title?: string
  big?: boolean
  toggle: () => void
}

interface ModalStyleProps {
  isOpen: boolean
  toggle: () => void
}

export const ModalStyle = styled.div<ModalStyleProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 1rem;
`

const Modal: FC<Props> = ({ title, isOpen, toggle, children }: Props) => {
  return (
    <ModalStyle isOpen={isOpen} toggle={toggle}>
      {title && <h3>{title}</h3>}
      {children}
    </ModalStyle>
  )
}

export default Modal
