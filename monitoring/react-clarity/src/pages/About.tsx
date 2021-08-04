import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

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

export default About
