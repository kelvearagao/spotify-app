import React from 'react'
import { createMemoryHistory } from 'history'
import { renderWithProviderAndRouter, mockStore } from '__tests__/utils'
import { playSetMusic } from 'store/reducers/play'
import Play from './Play'
import { waitFor, fireEvent } from '@testing-library/react'

window.HTMLMediaElement.prototype.play = jest.fn(() => ({
  catch: () => {}
}))

const state = {
  play: {
    data: {}
  }
}

describe('Play', () => {
  it('Should render the Play component', () => {
    const { getByText } = renderWithProviderAndRouter({
      history: createMemoryHistory(),
      store: mockStore(state),
      component: <Play />
    })

    getByText('Your browser does not support the audio element.')
  })

  it('Should render the album img when it exists', () => {
    const { container } = renderWithProviderAndRouter({
      history: createMemoryHistory(),
      store: mockStore({
        play: {
          data: {
            albumImg: 'katy.img',
            artist: 'Katy'
          }
        }
      }),
      component: <Play />
    })

    expect(container.querySelector('img[alt="Katy"]')).toBeInTheDocument()
  })

  it('Should play music when it has musiciName', async () => {
    window.HTMLMediaElement.prototype.play = jest.fn(() => ({
      catch: () => {}
    }))

    const { container } = renderWithProviderAndRouter({
      history: createMemoryHistory(),
      store: mockStore({
        play: {
          data: {
            albumImg: 'katy.img',
            artist: 'Katy',
            musicName: 'fireworks',
            index: 0,
            items: [
              {
                preview_url: '01.mp3'
              }
            ]
          }
        }
      }),
      component: <Play />
    })

    await waitFor(() => {
      expect(window.HTMLMediaElement.prototype.play).toBeCalled()
      expect(container.querySelector('audio[src="01.mp3"]')).toBeInTheDocument()
    })
  })

  it('Should play the next music when the ended event is fired', async () => {
    window.HTMLMediaElement.prototype.play = jest.fn(() => ({
      catch: () => {}
    }))
    const store = mockStore({
      play: {
        data: {
          albumImg: 'katy.img',
          artist: 'Katy',
          musicName: 'fireworks',
          index: 0,
          albumId: '123333',
          albumName: 'Fireworks',
          items: [
            {
              name: 'fireworks',
              preview_url: '01.mp3'
            },
            {
              name: 'roar',
              preview_url: '02.mp3'
            }
          ]
        }
      }
    })
    store.dispatch = jest.fn()

    const { container } = renderWithProviderAndRouter({
      history: createMemoryHistory(),
      store,
      component: <Play />
    })

    fireEvent(container.querySelector('audio'), new Event('ended'))

    await waitFor(() =>
      expect(store.dispatch).toBeCalledWith(
        playSetMusic({
          albumId: '123333',
          albumName: 'Fireworks',
          index: 1,
          items: [
            {
              name: 'fireworks',
              preview_url: '01.mp3'
            },
            {
              name: 'roar',
              preview_url: '02.mp3'
            }
          ],
          musicName: 'roar',
          previewUrl: '02.mp3'
        })
      )
    )
  })

  it('Should play the first music when the last has finished', async () => {
    Object.defineProperty(window.HTMLMediaElement, 'src', {
      value: '1'
    })
    window.HTMLMediaElement.prototype.play = jest.fn(() => ({
      catch: () => {}
    }))
    const store = mockStore({
      play: {
        data: {
          albumImg: 'katy.img',
          artist: 'Katy',
          musicName: 'roar',
          index: 1,
          albumId: '123333',
          albumName: 'Fireworks',
          items: [
            {
              name: 'fireworks',
              preview_url: '01.mp3'
            },
            {
              name: 'roar',
              preview_url: '02.mp3'
            }
          ]
        }
      }
    })
    store.dispatch = jest.fn()

    const { container } = renderWithProviderAndRouter({
      history: createMemoryHistory(),
      store,
      component: <Play />
    })

    fireEvent(container.querySelector('audio'), new Event('ended'))

    await waitFor(() =>
      expect(store.dispatch).toBeCalledWith(
        playSetMusic({
          albumId: '123333',
          albumName: 'Fireworks',
          index: 0,
          items: [
            {
              name: 'fireworks',
              preview_url: '01.mp3'
            },
            {
              name: 'roar',
              preview_url: '02.mp3'
            }
          ],
          musicName: 'fireworks',
          previewUrl: '01.mp3'
        })
      )
    )
  })
})
