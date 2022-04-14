import { FC } from 'react'
import * as API from '../../../api/Api'
import { useRegisterForm } from '../../../lib/hooks/react-hook-form/useRegisterForm'

import { Col, Row, Form, FormGroup, Label, FormFeedback } from '../../../styles/components'
import { Button, Input } from '../..'

const RegisterForm: FC = () => {
	const { errors, handleSubmit, register, reset } = useRegisterForm()

	const onSubmit = handleSubmit(async (data) => {
		try {
			const res = await API.register({
				first_name: data.first_name,
				last_name: data.last_name,
				date_of_birth: data.date_of_birth,
				email: data.email,
				password: data.password
			})

			console.log('res', res)

			reset()
		} catch (e) { console.log(e) }
	})

	return (
		<div className='RegisterForm'>
			<Form onSubmit={onSubmit}>
				<Row>
					<Col size={1}>
						<FormGroup>
							<Label htmlFor='first_name'>First name</Label>
							<Input
								type='text'
								id='first_name'
								placeholder='first_name'
								register={register}
							/>
							{errors.first_name && <FormFeedback>{errors.first_name.message}</FormFeedback>}
						</FormGroup>
					</Col>
					<Col size={1}>
						<FormGroup>
							<Label htmlFor='last_name'>Last name</Label>
							<Input
								type='text'
								id='last_name'
								placeholder='last_name'
								register={register}
							/>
							{errors.last_name && <FormFeedback>{errors.last_name.message}</FormFeedback>}
						</FormGroup>
					</Col>
					<Col size={1}>
						<FormGroup>
							<Label htmlFor='date_of_birth'>Date of birth</Label>
							<Input
								type='date'
								id='date_of_birth'
								placeholder='date_of_birth'
								register={register}
							/>
							{errors.date_of_birth && <FormFeedback>{errors.date_of_birth.message}</FormFeedback>}
						</FormGroup>
					</Col>
					<Col size={1}>
						<FormGroup>
							<Label htmlFor='email'>email</Label>
							<Input
								type='email'
								id='email'
								placeholder='email'
								register={register}
							/>
							{errors.email && <FormFeedback>{errors.email.message}</FormFeedback>}
						</FormGroup>
					</Col>
					<Col size={1}>
						<FormGroup>
							<Label htmlFor='password'>Password</Label>
							<Input
								type='password'
								id='password'
								placeholder='password'
								register={register}
							/>
							{errors.password && <FormFeedback>{errors.password.message}</FormFeedback>}
						</FormGroup>
					</Col>
					<Col size={1}>
						<Button
							className='btn-secondary'
							type='submit'
							text='Create Account'
						/>
					</Col>
				</Row>
			</Form>
		</div>
	)
}

export default RegisterForm