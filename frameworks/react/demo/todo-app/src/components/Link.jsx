import React from 'react'
import PropTypes from 'prop-types'
import LinkControl from '@material-ui/core/Link'

const Link = ({ children, setFilter }) =>
  (
    <LinkControl 
      style={{ cursor: 'pointer' }}
      onClick={() => setFilter()}
    >
      {children}
    </LinkControl>
  )


Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  setFilter: PropTypes.func.isRequired
}

export default Link
