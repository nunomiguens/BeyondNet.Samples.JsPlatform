const NAME = 'ui'

const actionTypes = {
  // SHOW_ALERT: `${NAME}/SHOW_ALERT`,
  USER_LOGGED_IN: `${NAME}/USER_LOGGED_IN`,
  SET_ENTITY: `${NAME}/SET_ENTITY`,
  CLEAR_ALL: `${NAME}/CLEAR_ALL`
}

const actions = {
  // showAlert: ({ error, message, variant, logOnly = false }) => ({
  //   type: actionTypes.SHOW_ALERT,
  //   payload: { error, message, variant, logOnly }
  // }),
  userLogged: ({ userName, hubService }) => ({
    type: actionTypes.USER_LOGGED_IN,
    payload: { userName },
    meta: { hubService }
  }),
  setEntity: entity => ({
    type: actionTypes.SET_ENTITY,
    payload: { entity }
  }),
  clearAll: () => ({
    type: actionTypes.CLEAR_ALL
  })
}

const initialState = {
  entity: null
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_ENTITY:
      return { ...state, entity: payload.entity }
    default:
      return state
  }
}

const getEntity = state => state[NAME].entity

const selectors = { getEntity }

const ui = {
  namespace: NAME,
  initialState,
  actionTypes,
  actions,
  reducer,
  selectors
}

export default ui
