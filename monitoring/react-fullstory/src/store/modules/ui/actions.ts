import { SET_ENTITY, SET_AUTHORIZATION } from './types'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const setEntity = (entity: string): any => {
  return {
    type: SET_ENTITY,
    payload: entity
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const setAuthorizations = (authorizations: []): any => {
  return {
    type: SET_AUTHORIZATION,
    payload: authorizations
  }
}

export const actions = { setEntity, setAuthorizations }
