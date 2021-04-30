import { renderHook, act } from '@testing-library/react-hooks'
import useUserSetting from './useUserSetting'

describe("HOOKS - useUserSetting Testing", () => {
  test('should return theme flags', () => {
    const initialStateMock = {
      lightTheme: true
    }

    const { result } = renderHook(() => useUserSetting(initialStateMock))
    
    const expectedThemeFlags = {
      lightTheme: true,
    }

    const [themeFlags] = result.current

    expect(themeFlags).toMatchObject(expectedThemeFlags)
  })

  test('should toggle theme flags', () => {
    const initialStateMock = {
      lightTheme: true
    }

    const { result } = renderHook(() => useUserSetting(initialStateMock))
    
    act(() => {
      const[ , { toggleThemeMode }] = result.current

      toggleThemeMode()
    })

    const expectedThemeFlags = {
      lightTheme: false,
    }
    
    const [themeFlags] = result.current

    expect(themeFlags).toMatchObject(expectedThemeFlags)
  })
  
})