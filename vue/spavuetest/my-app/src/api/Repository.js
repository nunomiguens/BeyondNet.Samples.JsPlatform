const Repository = {
    name:'Service',
    get: () => Promise.resolve({ data: 'returning some values' })
  }
export default Repository
