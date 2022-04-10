import { FC } from 'react'
import { Form } from 'reactstrap'
import { useLoginForm } from '../../../lib/hooks/react-hook-form/useLoginForm'

import * as API from '../../../api/Api'
import FormGroup from '../../shared/FormGroup/FormGroup'
import Button from '../../shared/Button/Button'

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
			<Form inline onSubmit={onSubmit}>
				<FormGroup
					type='email'
					id='email'
					placeholder='Email'
					classNameInput='LoginForm-input'
					register={register}
					label='Email'
					error={errors.email}
				/>
				<FormGroup
					type='password'
					id='password'
					placeholder='Password'
					classNameInput='LoginForm-input'
					register={register}
					label='Password'
					error={errors.password}
				/>
				<Button
					className='btn-secondary'
					type='submit'
					value='Login'
				/>
			</Form>
		</div>
	)
}

export default LoginForm