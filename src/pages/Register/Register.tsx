import { FC } from 'react'
import RegisterForm from '../../components/user/RegisterForm/RegisterForm'

interface Props { }

const Register: FC<Props> = (props: Props) => {
	return (
		<div className='Register'>
			<RegisterForm />
		</div>
	)
}

export default Register
