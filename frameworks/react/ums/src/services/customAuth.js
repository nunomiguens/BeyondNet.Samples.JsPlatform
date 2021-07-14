import { usersRepository } from 'api'

export default class CustomAuth {
  constructor() {}

  login(email, password) {
    const result = usersRepository.login(email, password)
    return result
  }
}
