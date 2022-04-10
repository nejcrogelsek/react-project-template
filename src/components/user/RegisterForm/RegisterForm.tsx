import { FC } from 'react'
import * as API from '../../../api/Api'
import { useRegisterForm } from '../../../lib/hooks/react-hook-form/useRegisterForm'

//Components
import {
	Row,
	Col,
	Form
} from 'reactstrap'
import FormGroup from '../../shared/FormGroup/FormGroup'
import Button from '../../shared/Button/Button'

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
					<Col xs='12' sm='6'>
						<FormGroup
							type='text'
							id='first_name'
							placeholder='first_name'
							classNameInput='form-control-custom'
							register={register}
							label='first_name'
							error={errors.first_name}
						/>
					</Col>
					<Col xs='12' sm='6'>
						<FormGroup
							type='text'
							id='last_name'
							placeholder='last_name'
							classNameInput='form-control-custom'
							register={register}
							label='last_name'
							error={errors.last_name}
						/>
					</Col>
					<Col xs='12' sm='12'>
						<FormGroup
							type='date'
							id='date_of_birth'
							classNameInput='form-control-custom'
							register={register}
							label='Date of birth'
							error={errors.date_of_birth}
						/>
					</Col>
					<Col xs='12' sm='12'>
						<FormGroup
							type='email'
							id='email'
							placeholder='Email'
							classNameInput='form-control-custom'
							register={register}
							label='Email'
							error={errors.email}
						/>
					</Col>
					<Col xs='12' sm='12'>
						<FormGroup
							type='password'
							id='password'
							placeholder='Password'
							classNameInput='form-control-custom'
							register={register}
							label='Password'
							error={errors.password}
						/>
					</Col>
					<Col xs='12'>
						<Button
							className='btn-secondary'
							type='submit'
							value='Create Account'
						/>
					</Col>
				</Row>
			</Form>
		</div>
	)
}

export default RegisterForm