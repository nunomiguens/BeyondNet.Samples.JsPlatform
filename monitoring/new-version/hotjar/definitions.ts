interface IWindowHotjarEmbedded extends Window {
  hj?: (method: string, ...data: unknown[]) => void
}

declare const window: IWindowHotjarEmbedded

export type TUserAttribute = Record<
  string | number,
  string | number | Date | boolean
>

export interface IUseHotjar {
  readyState: boolean
  initHotjar: (
    id: number,
    version: number,
    debug?: boolean,
    callback?: (...data: unknown[]) => void
  ) => boolean
  identifyHotjar: (
    userId: string,
    userAttributes: TUserAttribute,
    callback?: (...data: unknown[]) => void
  ) => boolean
  manuallyTrackHotjar: (
    path: string,
    callback?: ((...data: unknown[]) => void) | undefined
  ) => boolean
  tagRecordingHotjar: (
    tags: string[],
    callback?: ((...data: unknown[]) => void) | undefined
  ) => boolean
}

export const appendHeadScript = (
  scriptText: string,
  scriptId: string
): boolean => {
  try {
    const existentScript = document.getElementById(
      scriptId
    ) as HTMLScriptElement
    const script = existentScript || document.createElement('script')
    script.id = scriptId
    script.innerText = scriptText
    script.crossOrigin = 'anonymous'

    document.head.appendChild(script)

    return true
  } catch {
    return false
  }
}

export function initScript(
  id: number,
  version: number,
  debug: boolean
): boolean {
  const hasWindow = typeof window !== 'undefined'

  if (!hasWindow) return false

  const scriptCode = `(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:${id},hjsv:${version},hjdebug:${debug}};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`
  const isAppended = appendHeadScript(scriptCode, 'hotjar-init-script')

  if (isAppended && hasWindow && window.hj) {
    return true
  }

  throw Error('Hotjar initialization failed!')
}

export function manuallyTrackScript(relativePath: string): void {
  const hasWindow = typeof window !== 'undefined'
  if (hasWindow && window.hj) {
    return window.hj('stateChange', relativePath)
  }

  throw Error('Hotjar is not available! Is Hotjar initialized?')
}

export function identifyScript(
  userId: string | null,
  userAttribute: TUserAttribute
): void {
  const hasWindow = typeof window !== 'undefined'
  if (hasWindow && window.hj) {
    return window.hj('identify', userId, userAttribute)
  }

  throw Error('Hotjar is not available! Is Hotjar initialized?')
}

export function tagScript(tags: string[] | null): void {
  const hasWindow = typeof window !== 'undefined'
  if (hasWindow && window.hj) {
    return window.hj('tagRecording', tags)
  }

  throw Error('Hotjar is not available! Is Hotjar initialized?')
}

export function checkReadyState(): boolean {
  const hasWindow = typeof window !== 'undefined'
  if (hasWindow && window.hj) {
    return true
  }

  return false
}
