import { alerts, ui } from 'store/modules'
import { AlertsType } from 'models'

const alertsMiddleware = ({ dispatch }) => next => action => {
  next(action)

  if (action.type.includes(ui.actionTypes.SHOW_ALERT)) {
    const { payload } = action
    const { error, variant, message, logOnly } = payload

    if (!logOnly) {
      const newAlert = {
        variant: error ? AlertsType.Error : variant || undefined,
        message
      }

      dispatch(alerts.actions.pushAlert(newAlert))
    }

    // TODO: implement a new dispatch to log error on server if error is present in action.payload
    if (error) {
      const { message, stack, response, config } = error
      let logError = { message, stack }

      if (response) {
        logError = {
          ...logError,
          response: {
            data: response.data,
            status: response.status,
            headers: response.headers
          }
        }
      }

      if (config) {
        logError = {
          ...logError,
          request: {
            method: config.method,
            url: config.url,
            data: config.data
          }
        }
      }

      // eslint-disable-next-line no-console
      console.log('Error found!:', logError)
    }
  }
}
export default alertsMiddleware
