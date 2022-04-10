import { FC } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { FormFeedback, Label, FormGroup as Fg } from 'reactstrap'
import Input from '../Input/Input'

interface Props {
	type: string
	id: string
	classNameInput?: string
	placeholder?: string
	register: UseFormRegister<any>
	error: any
	label: string
}

const FormGroup: FC<Props> = ({ register, id, error, label, ...rest }: Props) => {
	return (
		<Fg>
			<Label for={id} hidden>
				{label}
			</Label>
			<Input
				className={rest.classNameInput}
				type={rest.type}
				id={id}
				placeholder={rest.placeholder ?? ''}
				register={register}
			/>
			{error && <FormFeedback style={{ color: '#ff0000' }}>{error.message}</FormFeedback>}
		</Fg>
	)
}

export default FormGroup
