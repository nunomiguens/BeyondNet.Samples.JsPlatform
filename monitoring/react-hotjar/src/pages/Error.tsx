import React from 'react'
import PropTypes from 'prop-types'

import { hotjar } from 'react-hotjar'
import { hjid, hjsv } from '../models/constants'

hotjar.initialize(hjid, hjsv)

interface IErrorPageProps {
  title: string
  description: string
  buttonText: string
}

const Error: React.FC<IErrorPageProps> = ({
  title,
  description,
  buttonText
}) => (
  <div>
    <h1>{title}</h1>
    <p>{description}</p>
    <button type="button">{buttonText}</button>
    <p>You can contact the LMKT dev team via Slack: #lmkt-support</p>
  </div>
)

Error.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired
}

export default Error
