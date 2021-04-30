
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { IconButton, Menu } from '@material-ui/core'
import { Notifications as NotificationIcon } from '@material-ui/icons'

const NotificationProvider = () => {
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
        aria-label="Notification"
        color="inherit"
        edge="start"
        onClick={handleClick}
      >
        <NotificationIcon />
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
      />
    </>
  )
}

export default NotificationProvider
