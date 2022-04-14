import { FC } from 'react'
import { useLoginForm } from '../../../lib/hooks/react-hook-form/useLoginForm'
import * as API from '../../../api/Api'
import Button from '../../shared/Button/Button'
import Input from '../../shared/Input/Input'
import { Form, FormGroup, Label, FormFeedback } from '../../../styles/components/form/form'

const LoginForm: FC = () => {
	const { errors, handleSubmit, register, reset } = useLoginForm()

	const onSubmit = handleSubmit(async (data) => {
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
			<Form onSubmit={onSubmit}>
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
				<Button
					className='btn-secondary'
					type='submit'
					text='Login'
				/>
			</Form>
		</div>
	)
}

export default LoginForm