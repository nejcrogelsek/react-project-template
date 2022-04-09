import { FC } from 'react'
import { RouteProps, useLocation, Navigate } from 'react-router-dom'
import { observer } from 'mobx-react'
import authStore from '../lib/stores/auth.store'

const PrivateRoute: FC<RouteProps> = ({ children }: RouteProps) => {
	const location = useLocation()

	if (!authStore.isAuthenticated) {
		return (
			<Navigate
				to={`/login?redirect=${encodeURIComponent(location.pathname)}`}
			/>
		)
	}

	return children as JSX.Element
}

export default observer(PrivateRoute)
