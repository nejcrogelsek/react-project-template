import { FC } from 'react'
import * as API from 'api/Api'
import { useLoginForm } from 'lib/hooks/react-hook-form/useLoginForm'

import Button from 'components/shared/Button/Button'
import Input from 'components/shared/Input/Input'

const LoginForm: FC = () => {
  const { errors, handleSubmit, register, reset } = useLoginForm()

  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await API.login({
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
    <div className="login-form">
      <form className="form" name="form" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <Input type="email" id="email" placeholder="email" register={register} />
          {errors.email && <div className="error-message">{errors.email.message}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <Input type="password" id="password" placeholder="password" register={register} />
          {errors.password && <div className="error-message">{errors.password.message}</div>}
        </div>
        <Button className="btn-secondary" type="submit">
          Login
        </Button>
      </form>
    </div>
  )
}

export default LoginForm
