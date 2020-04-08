import { createEpicMiddleware } from 'redux-observable'
import { createStore, applyMiddleware } from 'redux'
import { compose } from 'redux'
import rootReducer from './reducers'
import rootEpic from 'epics'

const epicMiddleware = createEpicMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(epicMiddleware))
)

epicMiddleware.run(rootEpic)

export default store
