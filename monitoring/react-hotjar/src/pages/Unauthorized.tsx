import React from 'react'
import Error from './Error'
import { hotjar } from 'react-hotjar'
import { hjid, hjsv } from '../models/constants'

hotjar.initialize(hjid, hjsv)

const Unauthorized: React.FC = () => (
  <Error
    title="Forbidden"
    description="Error! You do not have access to this page."
    buttonText="Go Home"
  />
)

export default Unauthorized
