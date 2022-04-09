import { FC, ReactChild } from 'react'

//components
import { Modal as ModalRS } from 'reactstrap'

interface Props {
	isOpen: boolean
	children: ReactChild | ReactChild[]
	title?: string
	big?: boolean
	toggle: () => void
}

const Modal: FC<Props> = (props: Props) => {
	return (
		<ModalRS className='Modal' isOpen={props.isOpen} toggle={props.toggle}>
			{props.title && <h3>{props.title}</h3>}
			{props.children}
		</ModalRS>
	)
}

export default Modal