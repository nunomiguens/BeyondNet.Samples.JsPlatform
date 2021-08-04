import React from 'react'
import Error from './Error'

const Unauthorized: React.FC = () => (
  <Error
    title="Forbidden"
    description="Error! You do not have access to this page."
    buttonText="Go Home"
  />
)

export default Unauthorized
