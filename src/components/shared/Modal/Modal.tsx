/* eslint-disable react/jsx-props-no-spreading */
import { Dispatch, FC, HTMLAttributes, ReactNode, SetStateAction } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean
  children: ReactNode | ReactNode[]
  title?: string
  big?: boolean
  toggle: Dispatch<SetStateAction<boolean>>
  close?: boolean
}

const Modal: FC<Props> = ({ title, isOpen, toggle, children, ...rest }: Props) => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4" {...rest}>
      {title && <h3>{title}</h3>}
      {children}
    </div>
  )
}

export default Modal
