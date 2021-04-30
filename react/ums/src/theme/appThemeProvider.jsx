import React, { useContext, useMemo } from 'react'
import PropTypes from 'prop-types'

import UserSettingsContext from 'context/userSettings'
import theme from './theme'
import GlobalStyle from 'theme/global'
import { ThemeModes } from 'theme/variables'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider, StylesProvider } from '@material-ui/styles'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

const AppThemeProvider = ({ children }) => {
  const { lightTheme } = useContext(UserSettingsContext)

  const currentTheme = useMemo(
    () => theme(lightTheme ? ThemeModes.Light : ThemeModes.Dark),
    [lightTheme]
  )

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <GlobalStyle />
      <StyledThemeProvider theme={currentTheme}>
        <StylesProvider injectFirst>{children}</StylesProvider>
      </StyledThemeProvider>
    </ThemeProvider>
  )
}

AppThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default React.memo(AppThemeProvider)
