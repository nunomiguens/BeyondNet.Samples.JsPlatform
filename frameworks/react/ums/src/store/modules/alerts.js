import { createSelector } from 'reselect'

const NAME = 'alerts'

const actionTypes = {
  PUSH: `${NAME}/PUSH`,
  POP: `${NAME}/POP`,
  OPEN: `${NAME}/OPEN`
}

const actions = {
  pushAlert: alert => ({
    type: actionTypes.PUSH,
    payload: { alert }
  }),
  popAlert: () => ({
    type: actionTypes.POP
  }),
  show: () => ({
    type: actionTypes.OPEN,
    payload: { value: true }
  }),
  hide: () => ({
    type: actionTypes.OPEN,
    payload: { value: false }
  })
}

const initialState = {
  queue: [],
  isProcessingQueue: false,
  open: false
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.PUSH:
      return {
        ...state,
        queue: [...state.queue, { ...payload.alert, id: Date.now() }]
      }

    case actionTypes.POP:
      return {
        ...state,
        queue: state.queue.filter((_, index) => index > 0),
        isProcessingQueue: false
      }

    case actionTypes.OPEN:
      return {
        ...state,
        open: payload.value,
        isProcessingQueue: !payload.value
      }

    default:
      return state
  }
}

const getAlerts = state => state[NAME].queue
const getNextAlert = createSelector(
  [getAlerts],
  queue => queue[0] || null
)

const getVisibility = state => state[NAME].open
const getIsProcessingQueue = state => state[NAME].isProcessingQueue

const selectors = {
  getNextAlert,
  getVisibility,
  getIsProcessingQueue
}

const alerts = {
  namespace: NAME,
  initialState,
  actionTypes,
  actions,
  reducer,
  selectors
}

export default alerts
