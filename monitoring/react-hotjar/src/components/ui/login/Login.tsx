
import React, { MouseEvent, useState } from 'react'
import { IconButton, Menu, MenuItem } from '@material-ui/core'
import { Person as PersonIcon } from '@material-ui/icons';

const Login: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <>
      <IconButton
        aria-label="Login Menu Mode"
        color="inherit"
        edge="start"
        onClick={handleClick}
      >
        <PersonIcon />
      </IconButton>
      <Menu
        id="login-menu"
        anchorEl={anchorEl}
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical:'bottom',
          horizontal:'center'
        }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>My Account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  )
}

export default Login