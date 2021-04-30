import React, { useContext, useMemo } from 'react'
import PropTypes from 'prop-types'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { ThemeProvider, StylesProvider } from '@material-ui/styles'
import { ThemeModes } from '../../../theme/variables'
import GlobalStyle from '../../../theme/global'
import theme from '../../../theme'
import UserSettingContext from '../../../context/userSetting'

const AppTheme = ({ children }) => {
  const { lightTheme } = useContext(UserSettingContext)

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

AppTheme.propTypes = {
  children: PropTypes.node.isRequired,
}

export default React.memo(AppTheme)
