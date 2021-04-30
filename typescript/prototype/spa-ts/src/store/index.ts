import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './rootReducer'
// import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const coreMiddleware: any = []
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const featureMiddleware: any = []

const middlewares = [sagaMiddleware, ...featureMiddleware, ...coreMiddleware]

const initialState = {}

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
)

// sagaMiddleware.run(rootSaga)

export default store
