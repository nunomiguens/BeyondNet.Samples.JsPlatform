class RepositoryOption {
  constructor(mapTo = null, isArray = false, options = {}) {
    this.mapTo = mapTo
    this.isArray = isArray
    this.options = options
  }
}

export default RepositoryOption
