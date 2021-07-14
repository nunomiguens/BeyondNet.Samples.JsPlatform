import React from 'react'
import PropTypes from 'prop-types'
import { useUserSettings } from 'hooks'
import UserSettingsContext from './userSettingsContext'

const initialUserSettings = {
  menuDrawer: true,
  lightTheme: false,
  miniNavBar: false
}

const UserSettingsState = ({ children }) => {
  const [userSettings, userSettingsSetters] = useUserSettings(
    initialUserSettings
  )

  return (
    <UserSettingsContext.Provider
      value={{ ...userSettings, ...userSettingsSetters }}
    >
      {children}
    </UserSettingsContext.Provider>
  )
}

UserSettingsState.propTypes = {
  children: PropTypes.node.isRequired
}

export default UserSettingsState
