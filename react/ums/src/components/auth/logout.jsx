import React from 'react'
import { AuthConsumer } from 'context/auth/authContext'

const Logout = () => (
  <AuthConsumer>
    {({ logout }) => {
      logout()
      return <span>loading</span>
    }}
  </AuthConsumer>
)

export default Logout
