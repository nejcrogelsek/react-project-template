import { FC } from 'react'
import { FormGroup, Label, Form, Button, FormFeedback } from 'reactstrap'
import { useLoginForm } from '../../../lib/hooks/react-hook-form/useLoginForm'

import * as API from '../../../api/Api'

const LoginForm: FC = () => {
	const { errors, handleSubmit, register, reset } = useLoginForm()

	const onSubmit = handleSubmit(async(data) => {
		try {
			const res = await API.login({
				email: data.email,
				password: data.password
			})

			console.log('res', res)

			reset()
		} catch (e) { console.log(e) }
	})

	return (
		<div className='LoginForm'>
			<Form inline onSubmit={onSubmit}>
				<FormGroup>
					<Label for='email' hidden>
						Email
					</Label>
					<input
						className='LoginForm-input'
						type='email'
						id='email'
						placeholder='Email'
						{...register('email')}
					/>
					{errors.email && <FormFeedback style={{ color: '#ff0000' }}>{errors.email.message}</FormFeedback>}
				</FormGroup>
				<FormGroup>
					<Label for='password' hidden>
						Password
					</Label>
					<input
						type='password'
						id='password'
						placeholder='Password'
						{...register('password')}
					/>
					{errors.password && <FormFeedback style={{ color: '#ff0000' }}>{errors.password.message}</FormFeedback>}
				</FormGroup>
				<Button type='submit' color='secondary'>
					Login
				</Button>
			</Form>
		</div>
	)
}

export default LoginForm