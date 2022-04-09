import { useNavigate, useLocation, useParams } from 'react-router-dom'

export function useRouter() {
	const navigate = useNavigate()
	const location = useLocation()
	const params = useParams()

	return {
		navigate,
		location,
		params
	}
}
