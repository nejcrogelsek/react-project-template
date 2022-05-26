import { FC } from 'react'
import { Link } from '@tanstack/react-location'
import Icon from 'components/shared/Icon/Icon'

const Home: FC = () => {
  return (
    <div className="home">
      <h1>Home component</h1>
      <Link to="/login"> Go to Login</Link>

      <Icon icon="close" />
      <Icon icon="logo" />
    </div>
  )
}

export default Home
