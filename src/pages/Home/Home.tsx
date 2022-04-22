import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import Icon from 'components/shared/Icon/Icon'

const Home: FC = () => {
	return (
		<div className='home'>
			<h1>Home component</h1>
			<NavLink to='/login'> Go to Login</NavLink>

			<Icon icon='close' alt='Close' />
			<Icon icon='logo' alt='Logo' />
		</div>
	)
}

export default Home
