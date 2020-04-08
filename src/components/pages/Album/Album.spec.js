import React from 'react'
import { renderWithProviderAndRouter, mockStore } from '__tests__/utils'
import { createMemoryHistory } from 'history'
import Album from './Album'
import { fireEvent } from '@testing-library/dom'

window.HTMLMediaElement.prototype.play = jest.fn()

const item = {
  id: 1,
  artist: 'Katy',
  name: 'Katy Album',
  image: 'katy.jpeg',
  items: [
    {
      id: 1,
      name: 'Fireworks',
      duration_ms: 200000
    }
  ]
}

describe('Album', () => {
  it('Should render the Album component', () => {
    const match = {
      params: {
        id: 1
      }
    }
    const { getByText } = renderWithProviderAndRouter({
      history: createMemoryHistory(),
      store: mockStore({
        album: {
          data: {}
        }
      }),
      component: <Album match={match} />
    })

    expect(getByText('Voltar')).toBeInTheDocument()
    expect(
      getByText('Your browser does not support the audio element.')
    ).toBeInTheDocument()
  })

  it('Should render the track item', () => {
    const match = {
      params: {
        id: 1
      }
    }
    const { getByText } = renderWithProviderAndRouter({
      history: createMemoryHistory(),
      store: mockStore({
        album: {
          data: {
            [item.id]: {
              ...item
            }
          }
        }
      }),
      component: <Album match={match} />
    })

    expect(getByText('1.')).toBeInTheDocument()
    expect(getByText('Fireworks')).toBeInTheDocument()
    expect(getByText('3:20')).toBeInTheDocument()
  })

  it('Should play the track item when it is clicked', () => {
    const match = {
      params: {
        id: 1
      }
    }
    const { getByText } = renderWithProviderAndRouter({
      history: createMemoryHistory(),
      store: mockStore({
        album: {
          data: {
            [item.id]: {
              ...item
            }
          }
        }
      }),
      component: <Album match={match} />
    })

    fireEvent.click(getByText('Fireworks'))

    expect(window.HTMLMediaElement.prototype.play).toBeCalled()
  })
})
