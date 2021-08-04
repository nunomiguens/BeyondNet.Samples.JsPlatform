import { TUserAttribute } from './definitions'

const validate = (key: string): void => {
  if (!key) throw new Error('Key is not valid')
}

export function setHotjarMetadata<T extends TUserAttribute>(
  key: string,
  value: T
): void {
  validate(key)

  localStorage.setItem(key, JSON.stringify(value))
}

export function getHotjarMetadata<T extends TUserAttribute>(key: string): T {
  validate(key)

  return JSON.parse(localStorage.getItem(key)!)
}

const checkLocalStorage = (): boolean => {
  try {
    const testSetting = '__test_setting_'
    localStorage.setItem(testSetting, testSetting)
    localStorage.removeItem(testSetting)
    return true
  } catch (e) {
    return false
  }
}

export const isHotjarStorageAvailable = checkLocalStorage()
