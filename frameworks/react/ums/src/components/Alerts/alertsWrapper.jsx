import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import { AlertsType } from 'models'

import { IconButton } from '@material-ui/core'
import {
  CheckCircle as CheckCircleIcon,
  Warning as WarningIcon,
  Error as ErrorIcon,
  Info as InfoIcon
} from '@material-ui/icons'
import { Root, Message, StyledCloseIcon, StyledSnackbarContent } from './styles'

const variantIcon = {
  [AlertsType.Success]: CheckCircleIcon,
  [AlertsType.Warning]: WarningIcon,
  [AlertsType.Error]: ErrorIcon,
  [AlertsType.Info]: InfoIcon
}

const AlertsWrapper = React.forwardRef(({ variant, message, onClose }, ref) => {
  const Icon = variantIcon[variant]

  const messageToRender = useMemo(
    () =>
      variant ? (
        <Message id="client-alert">
          <Icon />
          <span>{message}</span>
        </Message>
      ) : (
        message
      ),
    [message, variant]
  )

  const action = useMemo(
    () => (
      <IconButton
        key="close"
        aria-label="close"
        color="inherit"
        onClick={onClose}
      >
        <StyledCloseIcon />
      </IconButton>
    ),
    [onClose]
  )

  return (
    <Root>
      <StyledSnackbarContent
        ref={ref}
        className={`${variant || ''}`}
        aria-describedby="client-alert"
        message={messageToRender}
        action={action}
      />
    </Root>
  )
})

AlertsWrapper.defaultProps = {
  variant: null
}

AlertsWrapper.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(Object.values(AlertsType))
}

export default React.memo(AlertsWrapper)
