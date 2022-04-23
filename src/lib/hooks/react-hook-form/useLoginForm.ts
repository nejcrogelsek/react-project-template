import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export interface LoginFields {
  email: string
  password: string
}

export const useLoginForm = () => {
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Please enter a valid email').required('Email is required'),
    password: Yup.string().min(6, 'Password should be more than 6 letters').required('Password is required'),
  })

  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur', // when input is unfocused
    resolver: yupResolver(LoginSchema),
  })

  return { handleSubmit, errors, register, reset }
}

export type LoginReactHookForm = ReturnType<typeof useLoginForm>
