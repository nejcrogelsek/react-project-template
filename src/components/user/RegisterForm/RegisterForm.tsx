import { FC } from 'react'
import * as API from 'api/Api'
import { useRegisterForm } from 'lib/hooks/react-hook-form/useRegisterForm'

import Button from 'components/shared/Button/Button'
import Input from 'components/shared/Input/Input'

const RegisterForm: FC = () => {
  const { errors, handleSubmit, register, reset } = useRegisterForm()

  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await API.register({
        first_name: data.first_name,
        last_name: data.last_name,
        date_of_birth: data.date_of_birth,
        email: data.email,
        password: data.password,
      })

      console.log('res', res)

      reset()
    } catch (e) {
      console.log(e)
    }
  })

  return (
    <div className="register-form">
      <form className="form" onSubmit={onSubmit}>
        <div className="flex flex-col">
          <div className="flex-1">
            <div className="form-group">
              <label htmlFor="first_name">First name</label>
              <Input type="text" id="first_name" placeholder="first_name" register={register} />
              {errors.first_name && <div className="error-message">{errors.first_name.message}</div>}
            </div>
          </div>
          <div className="flex-1">
            <div className="form-group">
              <label htmlFor="last_name">Last name</label>
              <Input type="text" id="last_name" placeholder="last_name" register={register} />
              {errors.last_name && <div className="error-message">{errors.last_name.message}</div>}
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="form-group">
            <label htmlFor="date_of_birth">Date of birth</label>
            <Input type="date" id="date_of_birth" placeholder="date_of_birth" register={register} />
            {errors.date_of_birth && <div className="error-message">{errors.date_of_birth.message}</div>}
          </div>
        </div>
        <div className="flex-1">
          <div className="form-group">
            <label htmlFor="email">email</label>
            <Input type="email" id="email" placeholder="email" register={register} />
            {errors.email && <div className="error-message">{errors.email.message}</div>}
          </div>
        </div>
        <div className="flex-1">
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Input type="password" id="password" placeholder="password" register={register} />
            {errors.password && <div className="error-message">{errors.password.message}</div>}
          </div>
        </div>
        <div className="flex-1">
          <Button className="btn-secondary" type="submit">
            Create Account
          </Button>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm
