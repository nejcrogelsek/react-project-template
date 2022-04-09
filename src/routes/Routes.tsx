import { FC } from 'react'
import { RouteProps, Routes as Switch, Route } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'
import RestrictedRoute from './RestrictedRoute'

import { ForgotPassword, Home, Login, Page404, Profile, Register, ResetPassword } from '../pages'

export enum RouteType {
	PUBLIC,
	PRIVATE,
	RESTRICTED
}
interface AppRoute extends RouteProps {
	type?: RouteType
}
export const AppRoutes: AppRoute[] = [
	// Restricted Routes
	{
		type: RouteType.RESTRICTED,
		path: 'login',
		children: <Login />
	},
	{
		type: RouteType.RESTRICTED,
		path: 'register',
		children: <Register />
	},
	{
		type: RouteType.RESTRICTED,
		path: 'forgot-password',
		children: <ForgotPassword />
	},
	{
		type: RouteType.RESTRICTED,
		path: 'reset-password',
		children: <ResetPassword />
	},
	// Private Routes
	{
		type: RouteType.PRIVATE,
		path: 'my-profile',
		children: <Profile />
	},
	// Public Routes
	{
		type: RouteType.PUBLIC,
		path: '/',
		children: <Home />
	}
]

const Routes: FC = () => {
	return (
		<Switch>
			{AppRoutes.map((r) => {
				const { type, path, ...rest } = r
				if (type === RouteType.PRIVATE) {
					return (
						<Route key={`${r.path}`} path={`/${r.path}`} element={<PrivateRoute>{r.children}</PrivateRoute>} />
					)
				}
				if (type === RouteType.RESTRICTED) {
					return (
						<Route key={`${r.path}`} path={`/${r.path}`} element={<RestrictedRoute>{r.children}</RestrictedRoute>} />
					)
				}

				return <Route key={`${r.path}`} path={`/${r.path}`} element={r.children} />
			})}
			<Route path='*' element={<Page404 />} />
		</Switch>
	)
}

export default Routes
