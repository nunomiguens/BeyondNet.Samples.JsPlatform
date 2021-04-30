import { User } from 'models'
import Repository from './repository'
import { RepositoryParameters } from 'models'

class Users extends Repository {
  get resourceName() {
    return 'users'
  }

  async getAll() {
    const result = await this.get()
    debugger
    return result
  }
}

export default Users
