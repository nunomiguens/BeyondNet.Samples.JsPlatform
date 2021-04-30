import React from 'react'
import PropTypes from 'prop-types'

import { Typography } from '@material-ui/core'

const TabPanel = ({ value, index, children }) => (
  <Typography
    aria-labelledby={`tab-${index}`}
    component="div"
    hidden={value !== index}
    id={`tabpanel-${index}`}
    role="tabpanel"
  >
    {children}
  </Typography>
)

TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
}

export default TabPanel
