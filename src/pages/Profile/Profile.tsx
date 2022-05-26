import { FC } from 'react'
import isPrivate from 'routes/isPrivate'

interface Props {}

const Profile: FC<Props> = (props: Props) => {
  return (
    <div className="profile">
      <h1>Profile</h1>
    </div>
  )
}

export default isPrivate(Profile)
