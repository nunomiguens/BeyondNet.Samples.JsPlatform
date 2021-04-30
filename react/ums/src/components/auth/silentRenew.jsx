import React from 'react'
import { AuthConsumer } from 'context/auth/authContext'

const SilentRenew = () => (
  <AuthConsumer>
    {({ signinSilentCallback }) => {
      signinSilentCallback()
      return <span>loading</span>
    }}
  </AuthConsumer>
)

export default SilentRenew
