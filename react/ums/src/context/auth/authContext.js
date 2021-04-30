import { createContext } from 'react'

const AuthContext = createContext({
  signinRedirectCallback: () => ({}),
  logout: () => ({}),
  signoutRedirectCallback: () => ({}),
  isAuthenticated: () => ({}),
  signinRedirect: () => ({}),
  signinSilentCallback: () => ({}),
  createSigninRequest: () => ({})
})

export const AuthConsumer = AuthContext.Consumer

export default AuthContext
