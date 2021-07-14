import { RepositoryParameters } from 'models'

export const mockExec = jest.fn(async function exec(
  parameters = RepositoryParameters
) {
  return { foo: { foo: '' } }
})
const mockRepository = jest.fn().mockImplementation(() => {
  return { exec: { mockExec } }
})

export default mockRepository
