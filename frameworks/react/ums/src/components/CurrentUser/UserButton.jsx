import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { Tooltip } from 'components/ui'
import {
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar
} from '@material-ui/core'

import { AuthContext } from 'context/auth'

const UserButton = ({ menuId, onClick }) => {
  const { user } = useContext(AuthContext)

  return (
    <List aria-label="User Menu">
      <Tooltip title="User Menu">
        <ListItem
          button
          aria-controls={menuId}
          aria-haspopup="true"
          aria-label="logged user"
          onClick={onClick}
        >
          <ListItemAvatar>
            <Avatar
              alt={user.name}
              src="https://randomuser.me/api/portraits/men/86.jpg"
            />
          </ListItemAvatar>
          <ListItemText primary={user.name} />
        </ListItem>
      </Tooltip>
    </List>
  )
}

UserButton.propTypes = {
  menuId: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default React.memo(UserButton)
