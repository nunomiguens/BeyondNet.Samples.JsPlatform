import { createStore, applyMiddleware } from 'redux'
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import createSagaMiddleware from 'redux-saga'

import { alertsMiddleware } from './middleware'

import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()
const coreMiddleware = [alertsMiddleware]
// const featureMiddleware = [filtersMiddleware]

// const middlewares = [sagaMiddleware, ...featureMiddleware, ...coreMiddleware]

const middlewares = [sagaMiddleware, ...coreMiddleware]

const initialState = {}

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
)

sagaMiddleware.run(rootSaga)

export default store
