import React from 'react'
import Error from './Error'

import { hotjar } from 'react-hotjar'
import { hjid, hjsv } from '../models/constants'

hotjar.initialize(hjid, hjsv)

const NotFound: React.FC = () => (
  <Error
    title="Page Not Found"
    description="Error! The page you are looking for was not found!"
    buttonText="Go Home"
  />
)

export default NotFound
