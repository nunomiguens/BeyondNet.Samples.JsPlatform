import { ComponentType } from 'react'

export interface IUserData {
  UserName: string
  Role: string
  IsAuthenticated: boolean
}

export interface ISystemData {
  Title: string
  Icon: ComponentType
  Link: string
  Enabled: boolean
  ViewList: boolean
}

export interface IAuthDataContext {
  User: IUserData
  Authorizations: ISystemData[]
}
