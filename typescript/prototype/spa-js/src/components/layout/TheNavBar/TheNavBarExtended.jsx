import React, { useContext, Fragment, memo } from 'react'
import PropTypes from 'prop-types'

import { Link, Tooltip } from '@material-ui/core'
import { Label } from './styles'

const TheNavBarExtended = ({ title, link, icon: Icon }) => (
  <Fragment key={title}>
    <Link to={link}>
      <Icon />
      <Label>{title}</Label>
    </Link>
  </Fragment>
)

TheNavBarExtended.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  icon: PropTypes.instanceOf(Object).isRequired,
}

export default TheNavBarExtended
