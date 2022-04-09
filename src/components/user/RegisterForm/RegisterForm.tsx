import { FC } from 'react'
import * as API from '../../../api/Api'
import { useRegisterForm } from '../../../lib/hooks/react-hook-form/useRegisterForm'

//Components
import {
	Row,
	Col,
	FormGroup,
	Label,
	Input,
	Form,
	FormFeedback,
	Button
} from 'reactstrap'

const RegisterForm: FC = () => {
	const { errors, handleSubmit, register, reset } = useRegisterForm()

	const onSubmit = handleSubmit(async (data) => {
		try {
			const res = await API.register({
				first_name: data.firstName,
				last_name: data.lastName,
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
						<FormGroup className='form-group-custom'>
							<Label for='firstName'>First name</Label>
							<Input
								type='text'
								id='firstName'
								className='form-control-custom'
								{...register('firstName')}
							/>
							{errors.firstName && <FormFeedback style={{ color: '#ff0000' }}>{errors.firstName.message}</FormFeedback>}
						</FormGroup>
					</Col>
					<Col xs='12' sm='6'>
						<FormGroup className='form-group-custom'>
							<Label for='lastName'>Last name</Label>
							<input
								type='text'
								id='lastName'
								className='form-control-custom'
								{...register('lastName')}
							/>
							{errors.lastName && <FormFeedback style={{ color: '#ff0000' }}>{errors.lastName.message}</FormFeedback>}
						</FormGroup>
					</Col>
					<Col xs='12' sm='12'>
						<FormGroup className='form-group-custom'>
							<Label for='date_of_birth'>Date of Birth</Label>
							<input
								type='date'
								id='date_of_birth'
								className='form-control-custom'
								{...register('date_of_birth')}
							/>
							{errors.date_of_birth && <FormFeedback style={{ color: '#ff0000' }}>{errors.date_of_birth.message}</FormFeedback>}
						</FormGroup>
					</Col>
					<Col xs='12' sm='12'>
						<FormGroup className='form-group-custom'>
							<Label for='email'>Email Address</Label>
							<input
								type='email'
								id='email'
								className='form-control-custom'
								{...register('email')}
							/>
							{errors.email && <FormFeedback style={{ color: '#ff0000' }}>{errors.email.message}</FormFeedback>}
						</FormGroup>
					</Col>
					<Col xs='12' sm='12'>
						<FormGroup className='form-group-custom'>
							<Label for='password'>Password</Label>
							<input
								type='password'
								id='password'
								className='form-control-custom'
								{...register('password')}
							/>
							{errors.password && <FormFeedback style={{ color: '#ff0000' }}>{errors.password.message}</FormFeedback>}
						</FormGroup>
					</Col>
					<Col xs='12'>
						<FormGroup>
							<Button
								color='secondary'
								type='submit'
							>
								Create Account
							</Button>
						</FormGroup>
					</Col>
				</Row>
			</Form>
		</div>
	)
}

export default RegisterForm