import { UserSettingData } from './model'
import { createContext } from 'react'

export const UserSettingContext = createContext<Partial<UserSettingData>>({})
