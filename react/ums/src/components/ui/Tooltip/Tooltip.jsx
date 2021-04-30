import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'

const MUITooltip = React.lazy(() => import('@material-ui/core/Tooltip'))

const StyledTooltip = withStyles(() => ({
  tooltip: {
    backgroundColor: '#000',
    color: 'rgba(255, 255, 255, 0.87)',
    boxShadow:
      '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
    fontSize: 11
  }
}))(MUITooltip)

const Tooltip = ({ children, title, ...muiTooltipProps }) => {
  return (
    <React.Suspense fallback={children}>
      <StyledTooltip enterDelay={400} title={title} {...muiTooltipProps}>
        {children}
      </StyledTooltip>
    </React.Suspense>
  )
}

Tooltip.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired
}

export default React.memo(Tooltip)
