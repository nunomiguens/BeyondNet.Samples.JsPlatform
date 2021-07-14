import React, { useContext } from 'react'
import { IconButton } from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'

import UserSettingsContext from 'context/userSettings'
import { NotificationsContainer, CurrentUser } from 'components'
import { ThemeSwitch, Tooltip } from 'components/ui'
import { StyledToolbar, StyledTypography, StyledAppBar } from './styles'

const TheTopBar = () => {
  const {
    miniNavBar,
    lightTheme,
    toggleThemeMode,
    toggleNavBarMode
  } = useContext(UserSettingsContext)

  return (
    <StyledAppBar isMiniNavBar={miniNavBar} position="absolute">
      <StyledToolbar>
        <IconButton
          aria-label="Toggle Menu Mode"
          color="inherit"
          edge="start"
          onClick={toggleNavBarMode}
        >
          <MenuIcon />
        </IconButton>
        <StyledTypography variant="h6">USER MANAGEMENT</StyledTypography>
        <Tooltip title="Change Theme">
          <div>
            <ThemeSwitch isLightTheme={lightTheme} onChange={toggleThemeMode} />
          </div>
        </Tooltip>

        <NotificationsContainer />

        <CurrentUser />
      </StyledToolbar>
    </StyledAppBar>
  )
}

export default React.memo(TheTopBar)
