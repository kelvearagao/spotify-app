import React from 'react'
import { renderWithProviderAndRouter, mockStore } from '__tests__/utils'
import { createMemoryHistory } from 'history'
import Album from './Album'
import { fireEvent } from '@testing-library/dom'
import { playSetMusic } from 'store/reducers/play'

const item = {
  id: 1,
  artist: 'Katy',
  name: 'Katy Album',
  image: 'katy.jpeg',
  items: [
    {
      id: 1,
      name: 'Fireworks',
      preview_url: 'music.mp3',
      duration_ms: 200000,
      artists: [
        {
          name: 'Katy'
        }
      ]
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
    const store = mockStore({
      album: {
        data: {
          [item.id]: {
            ...item
          }
        }
      },
      play: {
        data: {}
      }
    })
    store.dispatch = jest.fn()
    const match = {
      params: {
        id: 1
      }
    }
    const { getByText } = renderWithProviderAndRouter({
      history: createMemoryHistory(),
      store,
      component: <Album match={match} />
    })

    fireEvent.click(getByText('Fireworks'))

    expect(store.dispatch).toBeCalledWith(
      playSetMusic({
        albumImg: 'katy.jpeg',
        artist: 'Katy',
        musicName: 'Fireworks',
        previewUrl: 'music.mp3'
      })
    )
  })
})
