import {
  ApplicationInsights,
  IConfiguration,
  IConfig,
  IPageViewPerformanceTelemetry
} from '@microsoft/applicationinsights-web'
import { ReactPlugin } from '@microsoft/applicationinsights-react-js'
import { RouterProps } from 'react-router-dom'
import { stringIsValid } from '../../utils/dataTypes'
import AppInsightsError from './appinsights-error'
import { SeverityLevel } from './definitions'

export type AppInsightsConfigType = {
  maxBatchInterval: 15000 // How long to batch telemetry for before sending (milliseconds)
  disableExceptionTracking: false //	If true, exceptions are not autocollected.
  loggingLevelConsole: 0 // Logs internal Application Insights errors to console. 0: off, 1: Critical errors only, 2: Everything (errors & warnings)
  loggingLevelTelemetry: 1 // Sends internal Application Insights errors as telemetry. 0: off, 1: Critical errors only, 2: Everything (errors & warnings),
}

export interface AppInsightsHelperParameters {
  history: RouterProps['history']
  instrumentationKey: string
  namespace: string
  manualTrackPageView: boolean
  config?: AppInsightsConfigType | undefined | null
}

export const AppInsightsReactPlugin = new ReactPlugin()

export class AppInsightsHelper {
  private static appInsights: ApplicationInsights | null = null

  private static enabledTracking: boolean

  private static namespace: string

  static init({
    history,
    instrumentationKey,
    namespace,
    manualTrackPageView,
    config
  }: AppInsightsHelperParameters): void {
    if (!stringIsValid(instrumentationKey)) throw new Error('Key is not valid')

    if (!stringIsValid(namespace)) throw new Error('Namespace is not valid')

    const defaultConfig: IConfiguration | IConfig = {
      instrumentationKey,
      extensions: [AppInsightsReactPlugin],
      extensionConfig: {
        [AppInsightsReactPlugin.identifier]: { history }
      },
      autoTrackPageVisitTime: true
    }

    if (!AppInsightsHelper.appInsights) {
      try {
        AppInsightsHelper.appInsights = new ApplicationInsights({
          config: AppInsightsHelper.buildConfig(defaultConfig, config)
        })

        AppInsightsHelper.namespace = namespace

        AppInsightsHelper.appInsights.loadAppInsights()

        if (manualTrackPageView) AppInsightsHelper.appInsights.trackPageView()

        AppInsightsHelper.enabledTracking = true
      } catch (error) {
        throw new AppInsightsError(error.message)
      }
    }
  }

  private static buildConfig(
    defaultConfig: IConfiguration | IConfig,
    config?: AppInsightsConfigType | undefined | null
  ) {
    return config ? { ...defaultConfig, ...config } : defaultConfig
  }

  static getName(name: string): string {
    if (!stringIsValid(name)) throw new Error('Name is not valid')

    return `${AppInsightsHelper.namespace}/${name}`
  }

  static setUser(authenticatedUserId: string): void {
    if (!stringIsValid(authenticatedUserId))
      throw new Error('User ID is not valid')

    AppInsightsHelper.appInsights?.setAuthenticatedUserContext(
      authenticatedUserId,
      authenticatedUserId
    )
  }

  static trackPage(name: string): void {
    if (!stringIsValid(name)) throw new Error('Name is not valid')

    if (AppInsightsHelper.enabledTracking) {
      AppInsightsHelper.appInsights?.trackPageView({
        name: AppInsightsHelper.getName(name)
      })
    }
  }

  static trackPagePerformance(path: IPageViewPerformanceTelemetry): void {
    if (AppInsightsHelper.enabledTracking) {
      AppInsightsHelper.appInsights?.trackPageViewPerformance({
        ...path
      })
    }
  }

  static trackEvent(name: string, properties: []): void {
    if (!stringIsValid(name)) throw new Error('Name is not valid')

    if (AppInsightsHelper.enabledTracking) {
      AppInsightsHelper.appInsights?.trackEvent({
        name,
        properties
      })
    }
  }

  static trackTrace(
    message: string,
    severityLevel: SeverityLevel = SeverityLevel.Warning,
    properties?: Record<string, string>
  ): void {
    if (!stringIsValid(message)) throw new Error('Message is not valid')

    if (AppInsightsHelper.enabledTracking) {
      AppInsightsHelper.appInsights?.trackTrace({
        message,
        severityLevel,
        properties
      })
    }
  }

  static trackError(message: string): void {
    if (!stringIsValid(message)) throw new Error('Message is not valid')

    if (AppInsightsHelper.enabledTracking) {
      AppInsightsHelper.appInsights?.trackException({
        error: new Error(message),
        severityLevel: SeverityLevel.Error
      })
    }
  }
}
