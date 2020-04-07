import React from 'react'
import { Modal, ModalContent, ModalClose } from './Modal.style'

export default ({ handleClose, isVisible, showClose = false, children }) => {
    return (
        <Modal isVisible={isVisible} onClick={handleClose} >
            <ModalContent onClick={e => e.stopPropagation()}>
                { showClose && <ModalClose onClick={handleClose}>&times;</ModalClose> }
                { children }
            </ModalContent>
        </Modal>
    )
}