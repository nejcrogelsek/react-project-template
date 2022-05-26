import { FC } from 'react'
import isRestricted from 'routes/isRestricted'

interface Props {}

const ForgotPassword: FC<Props> = (props: Props) => {
  return (
    <div className="forgot-password">
      <h1>ForgotPassword</h1>
    </div>
  )
}

export default isRestricted(ForgotPassword)
