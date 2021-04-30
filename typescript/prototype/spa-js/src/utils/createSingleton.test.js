const { default: createSingleton } = require('./createSingleton')

describe('UTILS - SHARED - createSingleton ', () => {
  test('should object be defined', () => {
    const expectedValue = { value: 'foo' }

    const mockFun = () => Object.freeze({ value: 'foo' })

    expect(createSingleton(mockFun).Instance()).toStrictEqual(expectedValue)
  })
})
