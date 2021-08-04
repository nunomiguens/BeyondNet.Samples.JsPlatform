import { ChangeEvent } from 'react'
import LocalStorage from '../../services/localStorage'

export interface UserSetting {
  LightTheme: boolean
  MiniNavBar: boolean
  MiniSideBar: boolean
  toggleNavBarMode(): ChangeEvent<HTMLInputElement>
  toggleThemeMode(): ChangeEvent<HTMLInputElement>
  toggleSideBarMode(): ChangeEvent<HTMLInputElement>
}

export class UserSettingData implements UserSetting {
  LightTheme = false
  MiniNavBar = false
  MiniSideBar = false

  constructor() {
    const key = LocalStorage.Instance().GetUserKey()

    if (LocalStorage.Instance().checkLocalStorage()) {
      const storageValue = LocalStorage.Instance().Get(
        key
      ) as UserSetting | null

      if (storageValue) {
        this.LightTheme = storageValue.LightTheme
        this.MiniNavBar = storageValue.MiniNavBar
        this.MiniSideBar = storageValue.MiniSideBar
      }
    }
  }
  toggleNavBarMode(): ChangeEvent<HTMLInputElement> {
    throw new Error('Method not implemented.')
  }
  toggleThemeMode(): ChangeEvent<HTMLInputElement> {
    throw new Error('Method not implemented.')
  }
  toggleSideBarMode(): ChangeEvent<HTMLInputElement> {
    throw new Error('Method not implemented.')
  }
}
