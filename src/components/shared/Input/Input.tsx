/* eslint-disable react/jsx-props-no-spreading */
import { FC, HTMLInputTypeAttribute, InputHTMLAttributes } from 'react'
import { UseFormRegister } from 'react-hook-form'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  type: HTMLInputTypeAttribute
  id: string
  register?: UseFormRegister<any>
}

const Input: FC<Props> = ({ register, id, ...rest }: Props) => {
  if (register) {
    return <input {...register(id)} id={id} {...rest} />
  }
  return <input id={id} {...rest} />
}

export default Input
