import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export interface RegisterFields {
	firstName: string
	lastName: string
	date_of_birth: string
	email: string
	password: string
}

export const useRegisterForm = () => {
  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    date_of_birth: Yup.string().required('Date of birth is required'),
    email: Yup.string()
      .email('Please enter a valid email!')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password should be more than 6 letters')
      .required('Password is required')
  })

  const { handleSubmit, formState: { errors }, register, reset } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      date_of_birth: '',
      email: '',
      password: ''
    },
    mode: 'onSubmit',
    resolver: yupResolver(RegisterSchema),
  })

  return { handleSubmit, errors, register, reset }
}

export type RegisterForm = ReturnType<typeof useRegisterForm>
