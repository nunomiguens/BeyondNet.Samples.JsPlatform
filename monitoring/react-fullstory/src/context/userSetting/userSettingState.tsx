import React from 'react'
import PropTypes from 'prop-types'

import { UseUserSetting } from "../../hooks"
import { UserSetting } from './model'
import { UserSettingContext } from './userSettingContex'

const UserSettingState: React.FC = ({children}) => {
  const [getters, setters] = UseUserSetting({} as UserSetting)

  return (
  <UserSettingContext.Provider value={{...getters, ...setters}}> 
    {children}
  </UserSettingContext.Provider>)
}

UserSettingState.propTypes = {
  children: PropTypes.node.isRequired
}

export default UserSettingState