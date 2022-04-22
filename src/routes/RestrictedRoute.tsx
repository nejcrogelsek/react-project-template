import { FC } from 'react'
import { RouteProps, Navigate } from 'react-router-dom'
import { observer } from 'mobx-react'
import authStore from 'lib/stores/auth.store'

const RestrictedRoute: FC<RouteProps> = ({ children }: RouteProps) => {
  if (authStore.isAuthenticated) {
    return <Navigate to="/" />
  }
  return children as JSX.Element
}

export default observer(RestrictedRoute)
