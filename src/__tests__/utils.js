import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createEpicMiddleware } from 'redux-observable'
import configureStore from 'redux-mock-store'
import { Router } from 'react-router-dom'

export const mockStore = store => {
  const epicMiddleware = createEpicMiddleware()
  const middlewares = [epicMiddleware]

  return configureStore(middlewares)(store)
}

export const renderWithProvider = ({ store, component } = {}) => (
  render(!store ? component : (
    <Provider store={store}>
      {component}
    </Provider>
  ))
)

export const renderWithProviderAndRouter = ({ store, history, component } = {}) => (
  render(!store ? component : (
    <Provider store={store}>
      <Router history={history}>
        {component}
      </Router>
    </Provider>
  ))
)
