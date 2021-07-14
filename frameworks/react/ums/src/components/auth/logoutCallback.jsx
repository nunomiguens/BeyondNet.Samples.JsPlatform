import React from 'react'
import { AuthConsumer } from 'context/auth/authContext'

const LogoutCallback = () => (
  <AuthConsumer>
    {({ signoutRedirectCallback }) => {
      signoutRedirectCallback()
      return <span>loading</span>
    }}
  </AuthConsumer>
)

export default LogoutCallback
