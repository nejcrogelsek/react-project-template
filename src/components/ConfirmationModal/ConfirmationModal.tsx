import { FC, useEffect } from 'react'
import { useRouter } from 'lib/hooks/useRouter'

import Button from 'components/shared/Button/Button'
import Modal from 'components/shared/Modal/Modal'

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

const ConfirmationModal: FC<Props> = ({ confirmationData }: Props) => {
  const router = useRouter()

  useEffect(() => {
    cancel()
  }, [router.location.pathname])

  const confirm = () => {
    if (confirmationData.onConfirm) {
      confirmationData.onConfirm()
    }
  }

  const cancel = () => {
    if (confirmationData.onCancel) {
      confirmationData.onCancel()
    }
  }

  return (
    <Modal isOpen={confirmationData.isOpen} toggle={() => cancel()}>
      <h4 className="confirmation-text">{confirmationData.text}</h4>
      <Button color="success" onClick={confirm}>
        ok
      </Button>
      <Button color="danger" onClick={cancel}>
        cancel
      </Button>
    </Modal>
  )
}

export default ConfirmationModal
