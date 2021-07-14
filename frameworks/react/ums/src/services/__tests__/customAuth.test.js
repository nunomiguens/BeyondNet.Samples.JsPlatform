import CustomAuth from 'services/customAuth'

describe('SERVICES CustomAuth', () => {
  const buildAuthService = () => new CustomAuth()

  beforeEach(() => {})

  it('Should Log In successfully', () => {
    const service = new CustomAuth()

    // const result = service.login('foo', 'foo')

    // expect(result).toBeTruthy()
  })
})
