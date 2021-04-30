import { setKey, getKey, isLocalStorageAvailable } from '../localStorage'

describe('Local Storage Services Test', () => {
  it('Should get a null value due to the key does not exist', () => {
    let value = getKey('ums.foo')

    expect(value).toBeNull()
  })

  it('Should set a value into the storage correctly', () => {
    const expectedValue = 'foo'
    const key = 'ums.foo'

    setKey(key, 'foo')

    expect(getKey(key)).toBe(expectedValue)
  })

  it('Should get a value from the storage correctly', () => {
    let value = getKey('ums.foo')

    expect(value).toBe('foo')
  })

  it('Local storage should be available', () => {
    let value = isLocalStorageAvailable

    expect(value).toBeDefined()
    expect(value).toBeTruthy()
  })
})
