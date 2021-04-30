import React from 'react'
import { AuthConsumer } from 'context/auth/authContext'

const Callback = () => (
  <AuthConsumer>
    {({ signinRedirectCallback }) => {
      signinRedirectCallback()
      return <span>loading</span>
    }}
  </AuthConsumer>
)

export default Callback
