import { FC } from 'react'

interface Props {
	type: 'button' | 'submit' | 'reset'
	className?: string
	text: string
	onClick?: () => void
}

const Button: FC<Props> = ({ type, className, text, onClick }: Props) => {
	return <button className={className} type={type} onClick={onClick}>{text}</button>
}

export default Button
