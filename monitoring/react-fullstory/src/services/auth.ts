import {
  Person as PersonIcon,
  Apps as AppIcon,
  SupervisedUserCircle as ProfileIcon,
  Lock as TokenIcon,
  Event as EventIcon,
  Filter as FilterIcon
} from '@material-ui/icons'

import { Credentials } from '../models'
import { IAuthDataContext, ISystemData } from './../context/auth/model'

export class AuthService {
  authenticate(credentials: Credentials): boolean {
    return credentials.UserName && credentials.Password ? true : false
  }

  getAuthorizations = (): ISystemData[] => [
    {
      Title: 'Systems',
      Icon: AppIcon,
      Link: '/systems/',
      Enabled: true,
      ViewList: true
    },
    {
      Title: 'Users',
      Icon: PersonIcon,
      Link: '/users/',
      Enabled: true,
      ViewList: true
    },
    {
      Title: 'Profiles',
      Icon: ProfileIcon,
      Link: '/profiles/',
      Enabled: true,
      ViewList: true
    },
    {
      Title: 'Tokens',
      Icon: TokenIcon,
      Link: '/tokens/',
      Enabled: true,
      ViewList: true
    },
    {
      Title: 'CustomEvents',
      Icon: EventIcon,
      Link: '/customevents/',
      Enabled: true,
      ViewList: true
    },
    {
      Title: 'Funnels',
      Icon: FilterIcon,
      Link: '/funnels/',
      Enabled: true,
      ViewList: true
    }
  ]
}

const auth = (credentials: Credentials): IAuthDataContext => {
  const authService: AuthService = new AuthService()

  if (!authService.authenticate(credentials))
    throw new Error(
      `Credentials for user ${credentials.UserName} are not valid!`
    )

  const authDataContext: Readonly<IAuthDataContext> = {
    User: {
      UserName: credentials.UserName,
      Role: 'admin',
      IsAuthenticated: true
    },
    Authorizations: authService.getAuthorizations()
  }

  return authDataContext
}

export default auth
