import createSingleton from '../utils/createSingleton'
import LocalStorageBuilder, { userSettingsKey } from './localStorage'

const mockObj = {
  foo: 'foo',
}

describe('SERVICES - LocalStorage Testing', () => {
  const buildStorage = () => {
    const builder = LocalStorageBuilder()
    return createSingleton(builder).Instance()
  }
  test('should build object', () => {
    const storage = buildStorage()

    expect(storage).toBeDefined()
  })

  test('should storage be available', () => {
    const storage = buildStorage()

    expect(storage.isAvailable()).toBeTruthy()
  })

  test('should set a value in storage', () => {
    const storage = buildStorage()

    storage.setValue(userSettingsKey, mockObj)

    expect(storage.getValue(userSettingsKey)).not.toBeNull()
  })

  test('should throw an exception', () => {
    const storage = buildStorage()

    expect(() => {
      storage.getValue('')
    }).toThrowError(new Error('Storage key is null or empty'))
  })
})
