import Repository, { buildUrl, buildData } from '../repository'
import { RepositoryOption } from 'models'

const mockData = {
  data: [
    {
      id: '1',
      name: 'A'
    },
    {
      id: '2',
      name: 'B'
    },
    {
      id: '3',
      name: 'C'
    },
    {
      id: '4',
      name: 'D'
    },
    {
      id: '5',
      name: 'E'
    }
  ]
}
class MockModel {
  constructor(rawData) {
    if (!rawData) return

    this.id = rawData.id
    this.name = rawData.name
  }
}

describe('API', () => {
  describe('General Methods', () => {
    it('Should build a URL successfuly', () => {
      const expectedValue = 'http://localhost:8080/api/foo'

      const urlBuilt = buildUrl({
        apiPath: 'http://foo',
        path: 'foo'
      })

      expect(urlBuilt).toEqual(expectedValue)
    })

    it('Should build data without mapTo', () => {
      const dataBuilt = buildData({
        data: mockData.data,
        mapTo: null,
        isArray: false
      })

      expect(Array.isArray(dataBuilt)).toBeTruthy()
      expect(dataBuilt).toEqual(mockData.data)
    })

    it('Should build data with mapTo', () => {
      const dataBuilt = buildData({
        data: mockData.data,
        mapTo: MockModel,
        isArray: true
      })

      expect(Array.isArray(dataBuilt)).toBeTruthy()
      expect(dataBuilt.length).toBe(5)

      expect(() => {
        dataBuilt[0] instanceof MockModel
      }).toBeTruthy()
    })

    it('Should build data for a single object with mapTo', () => {
      const expectedValue = { id: '1', name: 'A' }

      const dataBuilt = buildData({
        data: { ...mockData.data[0] },
        mapTo: MockModel,
        isArray: false
      })

      expect(dataBuilt).toEqual(expectedValue)
    })
  })

  describe('CRUD operations', () => {
    const buildRepository = () => new Repository()

    beforeEach(() => {
      fetch.resetMocks()
    })

    it('Should execute a GET method successfuly', async () => {
      const repository = buildRepository()

      const result = await repository.get('users', {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })

      console.log(result)

      // const expectedValue = [{ data: 'foo' }]

      // let parameters = new RepositoryOption(false, false, {})

      // axios.get.mockImplementationOnce(() => {
      //   Promise.resolve(mockData)
      // })

      // const response = await repository.get('foo')

      // console.log(response)

      // expect(fetch.mock.calls.length).toEqual(1)
      //     expect(fetch.mock.calls[0][0]).toEqual(
      //       'http://localhost:8080/api/undefined/users'
      //     )
      //     expect(onResponse.mock.calls[0]).toEqual(expectedValue)
      //   })
    })

    // it('Should throw an error when execute the EXEC method', () => {
    //   const repository = buildRepository()

    //   const onResponse = jest.fn(() => throwError())

    //   repository
    //     .exec(null)
    //     .then(onResponse)
    //     .finally(() => {
    //       expect(onError.message).toThrow()
    //     })
    // })
  })
})
