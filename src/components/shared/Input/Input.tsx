import { FC } from 'react'
import styled from 'styled-components'
import { UseFormRegister } from 'react-hook-form'

export enum InputType {
	BUTTON = 'button',
	SUBMIT = 'submit',
	RESET = 'reset',
	SEARCH = 'search',
	TEXT = 'text',
	NUMBER = 'number',
	FILE = 'file',
	HIDDEN = 'hidden',
	PASSWORD = 'password',
	RANGE = 'range',
	TEL = 'tel',
	CHECKBOX = 'checkbox',
	RADIO = 'radio',
	EMAIL = 'email',
	COLOR = 'color',
	DATE = 'date',
	DATETIME_LOCAL = 'datetime-local',
	IMAGE = 'image',
	MONTH = 'month',
	WEEK = 'week',
	TIME = 'time',
	URL = 'url',
}

interface Props {
	id: string
	type: string
	className?: string
	name?: string
	placeholder?: string
	checked?: boolean
	value?: any
	register?: UseFormRegister<any>
	onClick?: () => void
}

export const InputStyle = styled.input<Props>``

const Input: FC<Props> = ({ register, id, className, ...rest }: Props) => {
	if (register) {
		return <input {...register(id)} id={id} {...rest} />
	}
	return <InputStyle className={className} id={id} {...rest} />
}

export default Input
