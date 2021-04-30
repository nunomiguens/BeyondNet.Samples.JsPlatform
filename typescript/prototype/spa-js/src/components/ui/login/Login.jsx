
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { IconButton, Menu, MenuItem } from '@material-ui/core'
import { Person as PersonIcon } from '@material-ui/icons';

const Login = () => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

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

Login.propTypes = {
}

export default Login 