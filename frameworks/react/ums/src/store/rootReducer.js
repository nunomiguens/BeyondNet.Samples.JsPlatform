import { combineReducers } from 'redux'
import { ui, alerts, notifications } from './modules'

export default combineReducers({
  [notifications.namespace]: notifications.reducer,
  [ui.namespace]: ui.reducer,
  [alerts.namespace]: alerts.reducer
})
