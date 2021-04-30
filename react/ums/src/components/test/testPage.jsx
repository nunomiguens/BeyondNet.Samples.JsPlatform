import React from 'react'
import { Button } from '@material-ui/core'

import { usersRepository } from 'api'

const handleClick = async () => {
  debugger
  const result = await usersRepository.getAll()
  console.log(result)
}

const TestPage = () => {
  return (
    <div>
      <Button onClick={handleClick}>Test</Button>
    </div>
  )
}

export default TestPage
