import { FC } from 'react'
import isRestricted from 'routes/isRestricted'

import LoginForm from 'components/user/LoginForm/LoginForm'

interface Props {}

const Login: FC<Props> = (props: Props) => {
  return (
    <div className="login">
      <LoginForm />
    </div>
  )
}

export default isRestricted(Login)
