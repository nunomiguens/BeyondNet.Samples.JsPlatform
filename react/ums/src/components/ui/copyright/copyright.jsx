import React from 'react'
import { Typography, Link } from '@material-ui/core'

const CopyRight = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/beyondnetPeru">
        BeyondNet
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default CopyRight
