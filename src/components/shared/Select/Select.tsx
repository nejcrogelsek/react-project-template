/* eslint-disable react/jsx-props-no-spreading */
import { FC, ReactNode, SelectHTMLAttributes } from 'react'
import { UseFormRegister } from 'react-hook-form'

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  id: string
  register?: UseFormRegister<any>
  children: ReactNode | ReactNode[]
}

const Select: FC<Props> = ({ register, id, children, ...rest }: Props) => {
  if (register) {
    return (
      <select {...register(id)} id={id} {...rest}>
        <option></option>
        {children}
      </select>
    )
  }
  return (
    <select id={id} {...rest}>
      <option></option>
      {children}
    </select>
  )
}

export default Select
