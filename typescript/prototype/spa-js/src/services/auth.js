import { object } from 'prop-types'
import { getGraphToken, SetApp } from 'utils/auth'

const mockAuths = {
  isAuthorized: true,
  authIds: [],
}
export class AuthService {
  constructor(context) {
    this.authContext = context
    this.isAuthorized = true
  }

  authenticate(app) {
    const authIds = []
    return SetApp(app, this.isAuthorized, this.authContext, authIds)
  }
}

const auth = (app) => {
  const authService = new AuthService(app)

  authService.authenticate(app)
}

export default auth
