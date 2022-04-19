import { useEffect, useState } from 'react'

const useMediaQuery = (breakpoint: number) => {
	const [isLarge, toggle] = useState<boolean>(false)

	const checkWidth = () => {
		if (window.innerWidth < breakpoint) {
			toggle(true)
		} else {
			toggle(false)
		}
	}

	useEffect(() => {
		checkWidth()
		window.addEventListener('resize', checkWidth)
		return () => {
			window.removeEventListener('resize', checkWidth)
		}
	}, [])

	return { isLarge }
}

export default useMediaQuery
