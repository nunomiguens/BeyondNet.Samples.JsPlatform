import React,{ useContext } from "react"
import { Menu as MenuIcon } from '@material-ui/icons'
import { Tooltip, IconButton } from '@material-ui/core'

import { UserSettingContext } from "../../../context/userSetting"
import { ThemeSwitch, Login as LoginProvider, NotificationProvider } from '../../ui'
import { StyledAppBar, StyledToolbar, StyledTypography } from './styles'

const TheTopBar: React.FC = () => {
  const { LightTheme, MiniNavBar, toggleThemeMode, toggleNavBarMode } = useContext(UserSettingContext)

return (
    <StyledAppBar isMiniNavBar={MiniNavBar} position="absolute">
      <StyledToolbar>
      <IconButton
                aria-label="Toggle Menu Mode"
                color="inherit"
                edge="start"
                onClick={toggleNavBarMode}
              >
                <MenuIcon />
              </IconButton>
              <StyledTypography variant="h6" />
              <Tooltip title="Change Theme">
                <div>
                  <ThemeSwitch isLightTheme={LightTheme} onChange={toggleThemeMode} />
                </div>
              </Tooltip>

              <NotificationProvider />
              <LoginProvider /> 
      </StyledToolbar>
    </StyledAppBar>
  )
}

export default TheTopBar