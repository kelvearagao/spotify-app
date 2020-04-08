import React from 'react'
import { Modal, ModalContent } from './Modal.style'

export default ({ handleClose, isVisible, children }) => {
  return (
    <Modal isVisible={isVisible} onClick={handleClose}>
      <ModalContent onClick={e => e.stopPropagation()}>{children}</ModalContent>
    </Modal>
  )
}
