import { FC } from 'react'
import { Link } from 'react-router-dom'

const Header: FC = () => {
	return (
    <div className='Header'>
      <Link to='/login'>login</Link>
      <Link to='/register'>register</Link>
    </div>
  )
}

export default Header

