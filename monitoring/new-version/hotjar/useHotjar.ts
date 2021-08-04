import * as React from 'react'
import {
  checkReadyState,
  identifyScript,
  initScript,
  manuallyTrackScript,
  tagScript,
  IUseHotjar,
  TUserAttribute
} from './definitions'

export default function useHotjar(): IUseHotjar {
  const isReadyState = checkReadyState()

  const [readyState, setReadyState] = React.useState(
    React.useMemo(() => isReadyState, [isReadyState])
  )

  const initHotjar = React.useCallback(
    (
      id: number,
      version: number,
      debug?: boolean,
      callback?: (...data: unknown[]) => void
    ): boolean => {
      try {
        initScript(id, version, !!debug)

        setReadyState(true)

        if (callback && typeof callback === 'function')
          callback(`Hotjar ready: true`)

        return true
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Hotjar error:', error)

        return false
      }
    },
    []
  )

  const identifyHotjar = React.useCallback(
    (
      userId: string | null,
      userAttribute: TUserAttribute,
      callback?: (...data: unknown[]) => void
    ): boolean => {
      try {
        identifyScript(userId, userAttribute)

        if (callback && typeof callback === 'function')
          callback(`Hotjar identified`)

        return true
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Hotjar error:', error)

        return false
      }
    },
    []
  )

  const manuallyTrackHotjar = React.useCallback(
    (path: string, callback?: (...data: unknown[]) => void) => {
      try {
        manuallyTrackScript(path)

        if (callback && typeof callback === 'function')
          callback(`Hotjar manuallyTrackHotjar`)

        return true
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('Hotjar error:', error)

        return false
      }
    },
    []
  )

  const tagRecordingHotjar = React.useCallback(
    (tags: string[], callback?: (...data: unknown[]) => void) => {
      try {
        tagScript(tags)

        if (callback && typeof callback === 'function')
          callback(`Hotjar manuallyTrack`)

        return true
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Hotjar error:', error)

        return false
      }
    },
    []
  )

  return React.useMemo(
    () => ({
      readyState,
      manuallyTrackHotjar,
      initHotjar,
      identifyHotjar,
      tagRecordingHotjar
    }),
    [
      readyState,
      manuallyTrackHotjar,
      initHotjar,
      identifyHotjar,
      tagRecordingHotjar
    ]
  )
}
