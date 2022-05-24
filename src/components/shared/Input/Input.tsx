/* eslint-disable react/jsx-props-no-spreading */
import { FC, HTMLInputTypeAttribute, InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import { UseFormRegister } from 'react-hook-form'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  type: HTMLInputTypeAttribute
  id: string
  register?: UseFormRegister<any>
}

export const InputStyle = styled.input<Props>``

const Input: FC<Props> = ({ register, id, ...rest }: Props) => {
  if (register) {
    return <input {...register(id)} id={id} {...rest} />
  }
  return <InputStyle id={id} {...rest} />
}

export default Input
