import React from 'react'
import { renderWithProvider, mockStore } from '__tests__/utils'
import Home from './Home'
import { fireEvent } from '@testing-library/dom'
import * as homeReducer from 'store/reducers/home'

jest.mock('store/reducers/home')

const items = [
  {
    id: 1,
    images: [{ url: 'katy.jpeg' }],
    name: 'Katy Album',
    artists: [{ name: 'Katy' }]
  }
]

describe('Home', () => {
  beforeEach(() => {
    homeReducer.searchRequest = jest.fn(() => ({
      type: 'TEST'
    }))
  })

  it('Should render the Home component', () => {
    const { getByText, getByPlaceholderText } = renderWithProvider({
      store: mockStore({
        home: {
          data: {}
        }
      }),
      component: <Home />
    })

    expect(
      getByText('Busque por artistas, álbuns ou músicas')
    ).toBeInTheDocument()
    expect(getByPlaceholderText('Comece a escrever...')).toBeInTheDocument()
  })

  it('Should fire the searchRequest when the InputSearch is changed ', () => {
    const { getByPlaceholderText } = renderWithProvider({
      store: mockStore({
        home: {
          data: {}
        }
      }),
      component: <Home />
    })

    fireEvent.change(getByPlaceholderText('Comece a escrever...'), {
      target: {
        value: 'Katy'
      }
    })

    expect(homeReducer.searchRequest).toBeCalledWith('Katy')
  })

  it('Should render Card has a searh', () => {
    const { getByText } = renderWithProvider({
      store: mockStore({
        home: {
          data: {
            search: 'Katy',
            Katy: {
              items: [...items]
            }
          }
        }
      }),
      component: <Home />
    })

    expect(getByText('Katy Album'))
    expect(getByText('Katy'))
  })

  it('Should call history push when the Card is clicked', () => {
    const history = {
      push: jest.fn()
    }
    const { getByText } = renderWithProvider({
      store: mockStore({
        home: {
          data: {
            search: 'Katy',
            Katy: {
              items: [...items]
            }
          }
        }
      }),
      component: <Home history={history} />
    })

    fireEvent.click(getByText('Katy Album'))

    expect(history.push).toBeCalledWith('/album/1')
  })

  it('Should fire searchRequest when localStorage has the last search', () => {
    localStorage.setItem('search', 'Mc Kevin')

    renderWithProvider({
      store: mockStore({
        home: {
          data: {}
        }
      }),
      component: <Home history={history} />
    })

    expect(homeReducer.searchRequest).toBeCalledWith('Mc Kevin')
  })
})
