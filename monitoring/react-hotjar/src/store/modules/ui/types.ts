export const NAME = 'ui'
export const SET_ENTITY = `${NAME}/SET_ENTITY`
export const SET_AUTHORIZATION = `${NAME}/SET_AUTHORIZATION`

export interface UIState {
  entity: string
  authorizations: []
}

interface setEntityAction {
  type: typeof SET_ENTITY
  payload: string
}

interface setAuthorizationAction {
  type: typeof SET_AUTHORIZATION
  payload: []
}

export type UIActionTypes = setEntityAction | setAuthorizationAction
