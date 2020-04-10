import React from 'react'
import { renderWithProvider, mockStore } from '__tests__/utils'
import App from './App'
import { tokenRequest } from 'store/reducers/token'

describe('App', () => {
  beforeEach(() => {
    window.location.href = '/#/'
    window.localStorage.setItem('access_token', '')
    window.location.search = ''
  })

  it('Should render the App and Home component', () => {
    const { getByText } = renderWithProvider({
      store: mockStore({
        home: {
          data: {}
        },
        token: {},
        play: {
          data: {}
        }
      }),
      component: <App />
    })

    expect(
      getByText('Busque por artistas, álbuns ou músicas')
    ).toBeInTheDocument()
  })

  it('Should get access token from location search when it exists', () => {
    window.location.search = '?access_token=12345'

    renderWithProvider({
      store: mockStore({
        home: {
          data: {}
        },
        token: {},
        play: {
          data: {}
        }
      }),
      component: <App />
    })

    expect(window.localStorage.getItem('access_token')).toBe('12345')
  })

  it('Should not get access token from location search when does not exists', () => {
    window.location.search = ''

    renderWithProvider({
      store: mockStore({
        home: {
          data: {}
        },
        token: {},
        play: {
          data: {}
        }
      }),
      component: <App />
    })

    expect(window.localStorage.getItem('access_token')).toBeNull()
  })

  it('Should dispatch tokenRequest when there not access_token', () => {
    const store = mockStore({
      home: {
        data: {}
      },
      token: {},
      play: {
        data: {}
      }
    })

    store.dispatch = jest.fn()

    renderWithProvider({
      store,
      component: <App />
    })

    expect(store.dispatch).toBeCalledWith(tokenRequest())
  })

  it('Should not dispatch tokenRequest when there is access_token', () => {
    window.localStorage.setItem('access_token', '12345')

    const store = mockStore({
      home: {
        data: {}
      },
      token: {},
      play: {
        data: {}
      }
    })

    store.dispatch = jest.fn()

    renderWithProvider({
      store,
      component: <App />
    })

    expect(store.dispatch).not.toBeCalledWith(tokenRequest())
  })
})
