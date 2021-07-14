import React from 'react'
import PropTypes from 'prop-types'

import { StyledPopover, StyledTypography } from './styles'

const Popover = ({ children, ...muiPopoverProps }) => {
  return (
    <StyledPopover
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center'
      }}
      id="notifications-popover"
      open={!!muiPopoverProps.anchorEl}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}
      {...muiPopoverProps}
    >
      <StyledTypography variant="h6">Notifications</StyledTypography>
      {children}
    </StyledPopover>
  )
}

Popover.propTypes = {
  children: PropTypes.node.isRequired
}

export default React.memo(Popover)
