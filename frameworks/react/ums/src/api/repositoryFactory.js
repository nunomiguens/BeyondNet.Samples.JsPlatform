import Users from './users'

const repositories = {
  users: new Users()
}

const RepositoryFactory = {
  get: name => repositories[name]
}

export default RepositoryFactory
