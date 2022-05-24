/* eslint-disable react/jsx-props-no-spreading */
import { FC, TextareaHTMLAttributes } from 'react'
import styled from 'styled-components'
import { UseFormRegister } from 'react-hook-form'

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string
  register?: UseFormRegister<any>
}

export const TextareaStyle = styled.textarea<Props>``

const Textarea: FC<Props> = ({ register, id, ...rest }: Props) => {
  if (register) {
    return <TextareaStyle {...register(id)} id={id} {...rest} />
  }

  return <TextareaStyle id={id} {...rest} />
}

export default Textarea
