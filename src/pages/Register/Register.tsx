import { FC } from 'react'
import isRestricted from 'routes/isRestricted'

import RegisterForm from 'components/user/RegisterForm/RegisterForm'

interface Props {}

const Register: FC<Props> = (props: Props) => {
  return (
    <div className="register">
      <RegisterForm />
    </div>
  )
}

export default isRestricted(Register)
