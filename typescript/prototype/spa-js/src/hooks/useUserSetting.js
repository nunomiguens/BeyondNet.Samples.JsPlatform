import { useEffect, useState } from 'react'
import LocalStorageBuilder, { userSettingsKey } from '../services/localStorage'
import createSingleton from '../utils/createSingleton'
import { isBoolean } from '../utils/dataTypes'

const storageBuilder = LocalStorageBuilder()
const storageManager = createSingleton(storageBuilder).Instance()

const {
  lightTheme: localLightTheme,
  miniNavBar: localMiniNavBar,
  miniSideBar: localMiniSideBar,
} = !storageManager.isAvailable()
  ? {}
  : storageManager.getValue(userSettingsKey) || {}

export default (initialState) => {
  const [lightTheme, setLightTheme] = useState(
    isBoolean(localLightTheme) ? localLightTheme : initialState.lightTheme
  )

  const [miniNavBar, setMiniNavBar] = useState(
    isBoolean(localMiniNavBar) ? localMiniNavBar : initialState.miniNavBar
  )

  const [miniSideBar, setMiniSideBar] = useState(
    isBoolean(localMiniSideBar) ? localMiniSideBar : initialState.miniSideBar
  )

  const toggleThemeMode = () =>
    setLightTheme((previousThemeMode) => !previousThemeMode)

  const toggleNavBarMode = () =>
    setMiniNavBar((previousNavBarMode) => !previousNavBarMode)

  const toggleSideBarMode = () =>
    setMiniSideBar((previousSideBarMode) => !previousSideBarMode)

  useEffect(() => {
    if (storageManager.isAvailable())
      storageManager.setValue(userSettingsKey, {
        lightTheme,
        miniSideBar,
        miniNavBar,
      })
  }, [lightTheme, miniNavBar, miniSideBar])

  return [
    { lightTheme, miniNavBar, miniSideBar },
    { toggleThemeMode, toggleNavBarMode, toggleSideBarMode },
  ]
}
