import React from 'react'
import { createMemoryHistory } from 'history'
import { renderWithProviderAndRouter, mockStore } from '__tests__/utils'
import Play from './Play'

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
})
