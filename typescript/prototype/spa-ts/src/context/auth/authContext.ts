import { createContext } from 'react'
import { IAuthDataContext } from './model'

const AuthDataContext = createContext<Partial<IAuthDataContext>>({})

export default AuthDataContext
