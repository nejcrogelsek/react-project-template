import { useNavigate, useLocation } from '@tanstack/react-location'

export function useRouter() {
  const navigate = useNavigate()
  const location = useLocation()

  return {
    navigate,
    location,
  }
}
