import { FC } from 'react'
import { Link } from 'react-router-dom'

const Header: FC = () => {
  return (
    <header className="header">
      <Link to="/login">login</Link>
      <Link to="/register">register</Link>
    </header>
  )
}

export default Header
