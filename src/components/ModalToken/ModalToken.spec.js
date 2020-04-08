import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ModalToken from './ModalToken'

describe('ModalToken', () => {
  it('Should render the ModalToken component', () => {
    const { getByText, getByPlaceholderText } = render(<ModalToken />)

    expect(getByText('Login')).toBeInTheDocument()
    expect(getByPlaceholderText('Cole o token aqui!')).toBeInTheDocument()
    expect(getByText('Não tenho Token')).toBeInTheDocument()
    expect(getByText('Adicionar Token')).toBeInTheDocument()
  })

  it('Should add access token in the localStorage when click on add button', () => {
    const { location } = window
    delete window.location
    window.location = { reload: jest.fn() }
    const { getByText, getByPlaceholderText } = render(<ModalToken />)

    fireEvent.change(getByPlaceholderText('Cole o token aqui!'), {
      target: {
        value: 'token12345'
      }
    })

    fireEvent.click(getByText('Adicionar Token'))

    expect(localStorage.getItem('access_token')).toBe('token12345')
    expect(window.location.reload).toBeCalled()

    window.location = location
  })

  it('Should change href when the button access without login is clicked', () => {
    const { getByText, getByPlaceholderText } = render(<ModalToken />)

    fireEvent.change(getByPlaceholderText('Cole o token aqui!'), {
      target: {
        value: 'token12345'
      }
    })

    fireEvent.click(getByText('Não tenho Token'))

    expect(window.location.href).toBe(process.env.REACT_APP_LOGIN_ENDPOINT)
  })
})
