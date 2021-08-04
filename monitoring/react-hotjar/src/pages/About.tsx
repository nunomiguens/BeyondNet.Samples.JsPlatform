import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { hotjar } from 'react-hotjar'
import { hjid, hjsv } from '../models/constants'

hotjar.initialize(hjid, hjsv)

type ChildComponentProps = RouteComponentProps<never>

const About: React.FC<ChildComponentProps> = ({ history }) => {
  const goBack = () => {
    history.goBack()
  }

  return (
    <div>
      <h3>About this app</h3>
      <p>Example app with react starter kit</p>
      <p>Version: 1.0.0</p>
      <button type="button" onClick={goBack}>
        Go back
      </button>
    </div>
  )
}

About.propTypes = {
  //TODO: How can I validate this kind of prop?
  // history: PropTypes.oneOf<History>.isRequired
}

export default About
