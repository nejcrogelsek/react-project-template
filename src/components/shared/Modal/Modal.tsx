import { FC, ReactChild } from 'react'

import { Modal as ModalRS } from 'reactstrap'

interface Props {
	isOpen: boolean
	children: ReactChild | ReactChild[]
	title?: string
	big?: boolean
	toggle: () => void
}

const Modal: FC<Props> = ({title, isOpen, toggle, children}: Props) => {
	return (
		<ModalRS className='modal' isOpen={isOpen} toggle={toggle}>
			{title && <h3>{title}</h3>}
			{children}
		</ModalRS>
	)
}

export default Modal