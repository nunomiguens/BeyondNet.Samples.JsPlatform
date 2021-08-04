import { uiReducer } from './modules'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  ui: uiReducer
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
