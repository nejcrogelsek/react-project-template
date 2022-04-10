import { FC } from 'react'

interface Props {
	type: 'button' | 'submit' | 'reset' | undefined
	className: string
	value: string
}

const Button: FC<Props> = ({ type, className, value }: Props) => {
	return <button className={className} type={type}>{value}</button>
}

export default Button
