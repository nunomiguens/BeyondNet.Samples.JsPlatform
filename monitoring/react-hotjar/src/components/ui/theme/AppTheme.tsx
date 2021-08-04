import React, { memo, ReactNode, useContext, useMemo } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { ThemeProvider, StylesProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'

import { UserSettingContext } from '../../../context/userSetting'
import { ThemeModes } from '../../../theme/variables'
import theme from '../../../theme'
import GlobalStyle from '../../../theme/global'

const AppTheme: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { LightTheme } = useContext(UserSettingContext)

  const currentTheme = useMemo(() => theme(LightTheme ? ThemeModes.Light : ThemeModes.Dark), [LightTheme])

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
  children: PropTypes.node.isRequired
}

export default memo(AppTheme)