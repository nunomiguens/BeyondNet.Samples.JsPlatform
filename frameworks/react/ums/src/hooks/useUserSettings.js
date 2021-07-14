import { useState, useEffect } from 'react'
import {
  getKey,
  setKey,
  userSettingsKey,
  isLocalStorageAvailable
} from '../services/localStorage'

import { isBoolean } from '../utils/dataTypes'

const {
  lightTheme: localLightTheme,
  miniNavBar: localMiniNavBar,
  miniSideBar: localMiniSideBar
} = !isLocalStorageAvailable ? {} : getKey(userSettingsKey) || {}

export default initialState => {
  const [miniNavBar, setMiniNavBar] = useState(
    isBoolean(localMiniNavBar) ? localMiniNavBar : initialState.miniNavBar
  )

  const [lightTheme, setLightTheme] = useState(
    isBoolean(localLightTheme) ? localLightTheme : initialState.lightTheme
  )

  const [miniSideBar, setMiniSideBar] = useState(
    isBoolean(localMiniSideBar) ? localMiniSideBar : initialState.miniNavBar
  )

  const toggleNavBarMode = () =>
    setMiniNavBar(previousMiniNavBar => !previousMiniNavBar)

  const toggleThemeMode = () =>
    setLightTheme(previousThemeMode => !previousThemeMode)

  const toggleSideBarMode = () =>
    setMiniSideBar(previousMiniSideBar => !previousMiniSideBar)

  useEffect(() => {
    isLocalStorageAvailable &&
      setKey(userSettingsKey, {
        lightTheme,
        miniNavBar,
        miniSideBar
      })
  }, [lightTheme, miniNavBar, miniSideBar])

  return [
    { lightTheme, miniNavBar, miniSideBar },
    { toggleThemeMode, toggleNavBarMode, toggleSideBarMode }
  ]
}
