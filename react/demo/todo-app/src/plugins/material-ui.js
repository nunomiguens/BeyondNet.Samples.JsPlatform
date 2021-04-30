import React from 'react'
import PropTypes from 'prop-types'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import theme from '../theme'

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Typography component="div" style={{ backgroundColor: '#fff', height: '100vh' }}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {children}
      </Typography>
    </ThemeProvider>
  )
}

Theme.propTypes = {
  children: PropTypes.element.isRequired
}

export default Theme