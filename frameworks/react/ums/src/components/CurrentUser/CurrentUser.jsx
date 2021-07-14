import React, { useState, useCallback, useContext } from 'react'

import UserMenu from './userMenu'
import UserButton from './userButton'

import { CurrentUserWrapper } from './styles'
import { AuthContext } from 'context/auth'
import ToogleButton from './toogleButton'

const CurrentUser = () => {
  const menuId = 'user-menu'

  const [anchorEl, setAnchorEl] = useState(null)
  const handleCloseMenu = useCallback(() => setAnchorEl(null), [])
  const handleOpenMenu = useCallback(
    event => setAnchorEl(event.currentTarget),
    []
  )

  const { user } = useContext(AuthContext)

  if (user) {
    return (
      <CurrentUserWrapper>
        <UserButton menuId={menuId} onClick={handleOpenMenu} />
        <UserMenu id={menuId} anchorEl={anchorEl} onClose={handleCloseMenu} />
      </CurrentUserWrapper>
    )
  } else {
    return (
      <CurrentUserWrapper>
        <ToogleButton />
      </CurrentUserWrapper>
    )
  }
}

export default CurrentUser
