class AppInsightsError extends Error {
  constructor(message: string) {
    super(message)

    Object.setPrototypeOf(this, AppInsightsError.prototype)
  }
}

export default AppInsightsError
