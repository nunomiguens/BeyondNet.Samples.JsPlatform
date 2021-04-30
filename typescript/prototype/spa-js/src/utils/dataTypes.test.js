import { isBoolean, isNumber } from './dataTypes'

describe('DataTypes', () => {
  describe('Numbers', () => {
    it('should return true when the value to evaluate is a number', () => {
      const valueToEvaluate = 7
      const expectedValue = true

      expect(isNumber(valueToEvaluate)).toBe(expectedValue)
    })

    it('should return false when the value to evaluate is not a number', () => {
      const valueToEvaluate = 'foo'
      const expectedValue = false

      expect(isNumber(valueToEvaluate)).toBe(expectedValue)
    })
  })
  describe('Booleans', () => {
    it('should return true when the value to evaluate is a boolean', () => {
      const valueToEvaluate = true
      const expectedValue = true
      expect(isBoolean(valueToEvaluate)).toBe(expectedValue)
    })

    it('should return false when the value to evaluate is not a number', () => {
      const valueToEvaluate = 'foo'
      const expectedValue = false

      expect(isBoolean(valueToEvaluate)).toBe(expectedValue)
    })
  })
})