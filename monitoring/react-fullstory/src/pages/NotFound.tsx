import React from 'react'
import Error from './Error'

const NotFound: React.FC = () => (
  <Error
    title="Page Not Found"
    description="Error! The page you are looking for was not found!"
    buttonText="Go Home"
  />
)

export default NotFound
