import { UserSetting } from './../context/userSetting/model'
import { useState, useEffect } from 'react'

import LocalStorage from '../services/localStorage'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function UseUserSetting(initialState: UserSetting): any {
  const [LightTheme, setLightTheme] = useState(initialState.LightTheme)

  const [MiniNavBar, setMiniNavBar] = useState(initialState.MiniNavBar)

  const [MiniSideBar, setMiniSideBar] = useState(initialState.MiniSideBar)

  const toggleNavBarMode = () =>
    setMiniNavBar((previousNavBarMode) => !previousNavBarMode)

  const toggleThemeMode = () =>
    setLightTheme((previousThemeMode) => !previousThemeMode)

  const toggleSideBarMode = () =>
    setMiniSideBar((previousSideBarMode) => !previousSideBarMode)

  useEffect(() => {
    if (LocalStorage.Instance().checkLocalStorage()) {
      LocalStorage.Instance().Set(LocalStorage.Instance().GetUserKey(), {
        LightTheme,
        MiniNavBar,
        MiniSideBar
      } as UserSetting)
    }
  }, [LightTheme, MiniNavBar, MiniSideBar])

  return [
    { LightTheme, MiniNavBar, MiniSideBar },
    { toggleThemeMode, toggleNavBarMode, toggleSideBarMode }
  ]
}

export default UseUserSetting
