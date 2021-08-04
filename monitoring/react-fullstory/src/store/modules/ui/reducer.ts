import { SET_AUTHORIZATION, SET_ENTITY, UIActionTypes, UIState } from './types'

const initialState: UIState = {
  entity: '',
  authorizations: []
}

export const uiReducer = (
  state = initialState,
  action: UIActionTypes
): UIState => {
  switch (action.type) {
    case SET_ENTITY:
      return { ...state, entity: action.payload as string }
    case SET_AUTHORIZATION:
      return { ...state, authorizations: action.payload as [] }
    default:
      return state
  }
}

const getEntity = (state: UIState): string => state.entity
const getAuthorizations = (state: UIState): [] => state.authorizations

export const selectors = { getEntity, getAuthorizations }
