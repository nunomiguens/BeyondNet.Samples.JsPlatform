import { mapArrayTo } from 'utils/arrays'
import { RepositoryOption } from 'models'

const URL_API_PATH = process.env.REACT_APP_BASE_API_URL
const URL_PATH = 'entities'

export const buildUrl = resourceName => `${URL_API_PATH}/${resourceName}`

export const buildData = ({ data, mapTo, isArray }) => {
  if (!mapTo) return data

  return isArray ? mapArrayTo(data, mapTo) : new mapTo(data)
}

export default class Repository {
  get resourceName() {
    return URL_PATH
  }
  async get() {
    const url = buildUrl(this.resourceName)

    const response = await fetch(url)

    const data = response.json()

    return buildData({ data })
  }

  async fetch() {
    const url = buildUrl(this.resourceName)

    try {
      const response = await fetch(url)

      if(response.status != 200)

      const data = response.json()

      return buildData({ data })
    } catch (err) {
      this.handleError(err)
    }
  }

  handleError(err) {
    console.log(err)
  }
}
