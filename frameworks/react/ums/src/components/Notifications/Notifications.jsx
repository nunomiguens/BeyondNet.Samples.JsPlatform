import React, { useCallback, useState, Suspense } from 'react'
import { IconButton, Badge, Tooltip } from '@material-ui/core'
import { Notifications as NotificationsIcon } from '@material-ui/icons'

import NotificationsPopover from './popover'

const NotificationsContent = React.lazy(() => import('./content'))

const Notifications = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const handleClosePopover = () => setAnchorEl(null)
  const handleOpenPopover = useCallback(
    event => setAnchorEl(event.currentTarget),
    []
  )
  const newCounter = 1
  return (
    <>
      <Tooltip title="Notifications">
        <IconButton
          aria-label="View Notifications"
          color="inherit"
          onClick={handleOpenPopover}
        >
          <Badge
            badgeContent={newCounter}
            color="secondary"
            invisible={!newCounter}
          >
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Tooltip>

      <NotificationsPopover anchorEl={anchorEl} onClose={handleClosePopover}>
        <Suspense fallback={<div />}>
          <NotificationsContent />
        </Suspense>
      </NotificationsPopover>
    </>
  )
}

export default Notifications
