import Users from '../users'

describe('USER Repository', () => {
  beforeEach(() => {})

  it('Should login successfully', () => {
    const userRepository = new Users()
    let spy = jest
      .spyOn(userRepository, 'login')
      .mockImplementation((email, password) => true)

    expect(userRepository.login('foo', 'foo')).toBeTruthy()

    spy.mockRestore()
  })
})
