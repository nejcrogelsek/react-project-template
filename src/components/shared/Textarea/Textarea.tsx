/* eslint-disable react/jsx-props-no-spreading */
import { FC, TextareaHTMLAttributes } from 'react'
import { UseFormRegister } from 'react-hook-form'

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string
  register?: UseFormRegister<any>
}

const Textarea: FC<Props> = ({ register, id, ...rest }: Props) => {
  if (register) {
    return <textarea {...register(id)} id={id} {...rest} />
  }

  return <textarea id={id} {...rest} />
}

export default Textarea
