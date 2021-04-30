import React, { Component } from 'react'

import oidcAuth from 'services/oidcAuth'
import { AuthContext } from 'context/auth'

export default class AuthProvider extends Component {
  authService
  constructor(props) {
    super(props)
    this.authService = new oidcAuth()
  }
  render() {
    return <AuthContext.Provider value={this.authService} />
  }
}
