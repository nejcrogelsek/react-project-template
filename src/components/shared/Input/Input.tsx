import { FC } from 'react'
import { UseFormRegister } from 'react-hook-form'

interface Props {
	register: UseFormRegister<any>
	type: string
	id: string
	className?: string
	placeholder?: string
	checked?: boolean
	name?: string
}

const Input: FC<Props> = (props: Props) => {
	const { register, id, ...rest } = props
	return <input {...register(id)} id={id} {...rest} />
}

export default Input
