import { FC } from 'react'
import isRestricted from 'routes/isRestricted'

interface Props {}

const ResetPassword: FC<Props> = (props: Props) => {
  return (
    <div className="reset-password">
      <h1>ResetPassword</h1>
    </div>
  )
}

export default isRestricted(ResetPassword)
