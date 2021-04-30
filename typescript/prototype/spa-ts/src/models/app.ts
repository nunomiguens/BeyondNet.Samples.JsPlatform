import { IAuthDataContext, ISystemData } from '../context/auth'

export type Credentials = {
  UserName: string
  Password: string
}

export interface IAppData {
  authContext: IAuthDataContext
  entity: string
  authorizations: ISystemData[]
  setAuthorizations(authorizations: ISystemData[]): ISystemData[]
  setEntity(entity: string): string
}

export class AppData implements IAppData {
  authContext: IAuthDataContext
  entity: string
  authorizations: ISystemData[]

  constructor(authContext: IAuthDataContext) {
    this.authContext = authContext
    this.authorizations = authContext.Authorizations
    this.entity = ''
  }
  setAuthorizations(_authorizations: ISystemData[]): ISystemData[] {
    throw new Error('Method not implemented.')
  }
  setEntity(_entity: string): string {
    throw new Error('Method not implemented.')
  }
}
