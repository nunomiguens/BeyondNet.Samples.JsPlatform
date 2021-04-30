import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link, Tooltip } from '@material-ui/core'

import { MiniLink } from './styles'

const TheNavBarMini = ({ title, link, icon: Icon, enabled }) => (
  <Tooltip key={title} placement="right" title={title}>
    <div>
      <Fragment disabled={!enabled}>
        <MiniLink to={link}>
          <Icon />
        </MiniLink>
      </Fragment>
    </div>
  </Tooltip>
)

TheNavBarMini.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  icon: PropTypes.instanceOf(Object).isRequired,
  enabled: PropTypes.bool.isRequired,
}

export default TheNavBarMini
