import { FC } from 'react'
import { Navigate } from '@tanstack/react-location'
import authStore from 'lib/stores/auth.store'

const isRestricted = (OriginalComponent: any) => {
  const EnhancedComponent: FC = () => {
    return authStore.isAuthenticated ? <Navigate to="/" /> : <OriginalComponent />
  }

  return EnhancedComponent
}

export default isRestricted
