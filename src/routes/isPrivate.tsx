import { FC } from 'react'
import { Navigate } from '@tanstack/react-location'
import authStore from 'lib/stores/auth.store'

const isPrivate = (OriginalComponent: FC) => {
  const EnhancedComponent: FC = () => {
    return authStore.isAuthenticated ? (
      <OriginalComponent />
    ) : (
      <Navigate to={`/login?redirect=${encodeURIComponent(location.pathname)}`} />
    )
  }

  return EnhancedComponent
}

export default isPrivate
