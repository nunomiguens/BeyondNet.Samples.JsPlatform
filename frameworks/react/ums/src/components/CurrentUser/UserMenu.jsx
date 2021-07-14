import React, { useContext } from 'react'

import { Menu, MenuItem, ListItemIcon, Typography } from '@material-ui/core'
import { ExitToApp as ExitToAppIcon } from '@material-ui/icons'

// import AuthenticationContext from 'context/auth'

// const AuthenticationContext = {
//   logOut: () => {}
// }

const UserMenu = muiMenuProps => {
  // const { logOut } = useContext(AuthenticationContext)
  const logOut = () => {}
  const handleLogOut = () => logOut()

  return (
    <Menu
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center'
      }}
      getContentAnchorEl={null}
      open={!!muiMenuProps.anchorEl}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}
      {...muiMenuProps}
    >
      <MenuItem onClick={handleLogOut}>
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <Typography variant="inherit">Log out</Typography>
      </MenuItem>
    </Menu>
  )
}

export default React.memo(UserMenu)
