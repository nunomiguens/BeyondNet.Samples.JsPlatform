import { isNumber } from '../utils/dataTypes'

const prefix = 'bruce'

export const userSettingsKey = 'user.settings'

const LocalStorageBuilder = () => {
  const buildKey = (key) => `${prefix}.${key}`

  const validation = (key) => {
    if (!key) throw new Error('Storage key is null or empty')
  }

  function getItem(key) {
    validation(key)

    return localStorage.getItem(buildKey(key))
  }

  function setItem(key, value) {
    validation(key)

    localStorage.setItem(
      buildKey(key),
      !isNumber(value) ? JSON.stringify(value) : value
    )
  }
  function checkLocalStorage() {
    try {
      const tmpKey = '__test__'
      localStorage.setItem(buildKey(tmpKey), '{}')
      localStorage.removeItem(buildKey(tmpKey))
      return true
    } catch (error) {
      return false
    }
  }

  return function Build() {
    return Object.freeze({
      getValue: (key) => getItem(key),
      setValue: (key, value) => setItem(key, value),
      isAvailable: () => checkLocalStorage(),
    })
  }
}

export default LocalStorageBuilder
