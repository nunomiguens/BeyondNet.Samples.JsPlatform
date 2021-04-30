import React from 'react'
import { PropTypes } from 'prop-types'
import useUserSetting from '../../hooks/useUserSetting'
import UserSettingContext from './userSettingContext'

const initialUserSettings = {
  lightTheme: true,
}

const UserSettingState = ({ children }) => {
  const [userSetting, userSettingSetter] = useUserSetting(initialUserSettings)

  return (
    <UserSettingContext.Provider
      value={{ ...userSetting, ...userSettingSetter }}
    >
      {children}
    </UserSettingContext.Provider>
  )
}

UserSettingState.propTypes = {
  children: PropTypes.node.isRequired,
}

export default UserSettingState
