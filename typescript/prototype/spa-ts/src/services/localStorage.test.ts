import LocalStorage from './localStorage'

const mockObj = {
  foo: 'foo'
}

describe('SERVICES - LocalStorage', () => {
  test('should build object', () => {
    const storage = LocalStorage.Instance()

    expect(storage).toBeDefined()
  })

  test('should storage be available', () => {
    const storage = LocalStorage.Instance()

    expect(storage.checkLocalStorage()).toBeTruthy()
  })

  test('should set a value in storage', () => {
    const storage = LocalStorage.Instance()

    const userSettingsKey = LocalStorage.Instance().GetUserKey()

    storage.Set(userSettingsKey, mockObj)

    expect(storage.Get(userSettingsKey)).not.toBeNull()
  })

  test('should throw an exception', () => {
    const storage = LocalStorage.Instance()

    expect(() => {
      storage.Get('')
    }).toThrowError(new Error('Storage key is null or empty'))
  })
})
