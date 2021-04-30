import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { Snackbar, Slide } from '@material-ui/core'

import { AlertsType } from 'models'
import AlertsWrapper from './alertsWrapper'

function SlideTransition({ ...props }) {
  return <Slide {...props} direction="right" />
}

const Alerts = ({
  open,
  nextAlert,
  isProcessingQueue,
  show,
  hide,
  popAlert
}) => {
  useEffect(() => {
    if (!isProcessingQueue && nextAlert) show()
  }, [show, nextAlert, isProcessingQueue])

  const handleClose = (event, reason) => {
    // TODO: Could be a user setting
    if (reason === 'clickaway') {
      return
    }

    hide()
  }

  const processQueue = () => popAlert()

  return (
    <Snackbar
      key={nextAlert ? nextAlert.id : undefined}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      autoHideDuration={4000}
      open={open}
      TransitionComponent={SlideTransition}
      onClose={handleClose}
      onExited={processQueue}
    >
      <AlertsWrapper
        message={nextAlert && nextAlert.message}
        variant={nextAlert && nextAlert.variant}
        onClose={handleClose}
      />
    </Snackbar>
  )
}

Alerts.defaultProps = {
  open: false,
  nextAlert: null,
  isProcessingQueue: false
}

Alerts.propTypes = {
  open: PropTypes.bool,
  nextAlert: PropTypes.shape({
    id: PropTypes.number.isRequired,
    variant: PropTypes.oneOf(Object.values(AlertsType)),
    message: PropTypes.string.isRequired
  }),
  isProcessingQueue: PropTypes.bool,
  show: PropTypes.func.isRequired,
  hide: PropTypes.func.isRequired,
  popAlert: PropTypes.func.isRequired
}

export default Alerts
