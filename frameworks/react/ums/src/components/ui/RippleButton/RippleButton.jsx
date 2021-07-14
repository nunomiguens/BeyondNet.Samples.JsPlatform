import React from 'react'
import PropTypes from 'prop-types'

import StyledButtonBase from './styles'

const RippleButton = ({
  selected,
  disabled,
  className,
  children,
  ...props
}) => (
  <StyledButtonBase
    className={className}
    disabled={disabled}
    selected={selected}
    {...props}
  >
    {children}
  </StyledButtonBase>
)

RippleButton.defaultProps = {
  selected: false,
  disabled: false,
  className: undefined
}

RippleButton.propTypes = {
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default React.memo(RippleButton)
