import { FC } from 'react'
import { NavLink } from 'react-router-dom'

const Home:FC = () => {
	return (
		<div className='home'>
      <h1>Home component</h1>
      <NavLink to='/login'> Go to Login</NavLink>
    </div>
	)
}

export default Home
