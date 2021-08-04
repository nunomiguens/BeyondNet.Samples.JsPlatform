import { renderHook, act } from '@testing-library/react-hooks'

import { UseUserSetting } from '.'
import { IUserSetting } from './../context/userSetting'

describe('HOOKS - useUserSetting Testing', () => {
  test('should return theme flags', () => {
    const initialStateMock: IUserSetting = {
      LightTheme: true,
      MiniNavBar: false,
      MiniSideBar: false
    }

    const { result } = renderHook(() => UseUserSetting(initialStateMock))

    const expectedThemeFlags: IUserSetting = {
      LightTheme: true,
      MiniNavBar: false,
      MiniSideBar: false
    }

    const [themeFlags] = result.current

    expect(themeFlags).toMatchObject(expectedThemeFlags)
  })

  test('should toggle execute toggle flags', () => {
    const initialStateMock: IUserSetting = {
      LightTheme: true,
      MiniNavBar: true,
      MiniSideBar: true
    }

    const { result } = renderHook(() => UseUserSetting(initialStateMock))

    act(() => {
      const [
        ,
        { toggleThemeMode, toggleNavBarMode, toggleSideBarMode }
      ] = result.current

      toggleThemeMode()
      toggleNavBarMode()
      toggleSideBarMode()
    })

    const expectedThemeFlags = {
      LightTheme: false,
      MiniNavBar: false,
      MiniSideBar: false
    }

    const [themeFlags] = result.current

    expect(themeFlags).toMatchObject(expectedThemeFlags)
  })
})
