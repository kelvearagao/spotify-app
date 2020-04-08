import React, { useState } from 'react'
import Modal, { ModalBody, ModalHeader, ModalFooter } from 'components/Modal'
import Wrapper from './ModalToken.style'
import Button from 'components/Button'

export default ({ requestToken }) => {
  const [token, setToken] = useState('')
  const handleInputChange = e => {
    setToken(e.target.value)
  }
  const handleAddToken = () => {
    localStorage.setItem('access_token', token)
    document.location.reload()
  }
  const handleLogin = () => {
    window.location.href = process.env.REACT_APP_LOGIN_ENDPOINT
  }

  return (
    <Modal isVisible={requestToken}>
      <Wrapper>
        <ModalHeader>Login</ModalHeader>
        <ModalBody>
          <input
            type="text"
            placeholder="Cole o token aqui!"
            onChange={handleInputChange}
          />
        </ModalBody>
        <ModalFooter>
          <Button variante="secondary" onClick={handleLogin}>
            Não tenho Token
          </Button>
          <Button disabled={!token} onClick={handleAddToken}>
            Adicionar Token
          </Button>
        </ModalFooter>
      </Wrapper>
    </Modal>
  )
}
