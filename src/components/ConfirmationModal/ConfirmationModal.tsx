import { FC, useEffect } from 'react'
import { useRouter } from '../../lib/hooks/useRouter'

import { Button } from 'reactstrap'
import { Modal } from '..'

export interface Props {
	showCloseButton?: boolean
	confirmationData: {
		text?: string
		isOpen: boolean
		isLoading?: boolean
		onConfirm: () => void
		onCancel: () => void
	}
}

const ConfirmationModal: FC<Props> = (props: Props) => {
	const router = useRouter()

	useEffect(() => {
		cancel()
	}, [router.location.pathname])

	const confirm = () => {
		if (props.confirmationData.onConfirm) {
			props.confirmationData.onConfirm()
		}
	}

	const cancel = () => {
		if (props.confirmationData.onCancel) {
			props.confirmationData.onCancel()
		}
	}

	return (
		<Modal isOpen={props.confirmationData.isOpen} toggle={() => cancel()}>
			<h4 className='Confirmation-text'>{props.confirmationData.text}</h4>
			<Button color='success' onClick={confirm}>
				ok
			</Button>
			<Button color='danger' onClick={cancel}>
				cancel
			</Button>
		</Modal>
	)
}

export default ConfirmationModal
