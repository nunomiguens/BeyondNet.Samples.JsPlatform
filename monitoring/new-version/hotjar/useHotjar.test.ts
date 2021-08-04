import { renderHook } from '@testing-library/react-hooks'
import useHotjar from './useHotjar'

interface IWindowHotjarEmbedded extends Window {
  hj?: (method: string, ...data: unknown[]) => void
}

declare const window: IWindowHotjarEmbedded

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const fakeHotjarFunction = jest.fn((method: string, ...data: unknown[]) => {
  return null
})

describe('Tests useHotjar', () => {
  beforeAll(() => {
    window.hj = fakeHotjarFunction
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should return available methods', () => {
    const { result } = renderHook(() => useHotjar())

    expect(result.current).toBeTruthy()
    expect(result.current.initHotjar).toBeTruthy()
    expect(result.current.identifyHotjar).toBeTruthy()
    expect(result.current.manuallyTrackHotjar).toBeTruthy()
    expect(result.current.tagRecordingHotjar).toBeTruthy()
  })

  it('should initHotjar', () => {
    const { result } = renderHook(() => useHotjar())
    const initHotjarSpy = jest.spyOn(result.current, 'initHotjar')
    const { initHotjar } = result.current

    initHotjar(123, 6)

    expect(initHotjarSpy).toHaveBeenCalledWith(123, 6)
  })

  it('should initHotjar with callback', () => {
    const { result } = renderHook(() => useHotjar())
    const initHotjarSpy = jest.spyOn(result.current, 'initHotjar')
    const consoleInfoSpy = jest.spyOn(console, 'info')
    const { initHotjar } = result.current

    // eslint-disable-next-line no-console
    const callback = console.info

    initHotjar(123, 6, false, callback)

    expect(initHotjarSpy).toHaveBeenCalledWith(123, 6, false, callback)
    expect(consoleInfoSpy).toHaveBeenCalledWith('Hotjar ready: true')
  })

  it('should identifyHotjar with attributes', () => {
    const { result } = renderHook(() => useHotjar())
    const identifyHotjarSpy = jest.spyOn(result.current, 'identifyHotjar')
    const { identifyHotjar } = result.current

    identifyHotjar('fo-id', {
      name: 'foo1',
      surname: 'foo2',
      address: 'foo3'
    })

    expect(identifyHotjarSpy).toHaveBeenCalledWith('fo-id', {
      name: 'foo1',
      surname: 'foo2',
      address: 'foo3'
    })
  })

  it('should manuallyTrackHotjar with new relative path', () => {
    const { result } = renderHook(() => useHotjar())
    const manuallyTrackHotjarSpy = jest.spyOn(
      result.current,
      'manuallyTrackHotjar'
    )
    const { manuallyTrackHotjar } = result.current

    manuallyTrackHotjar('new/relative/path')

    expect(manuallyTrackHotjarSpy).toHaveBeenCalledWith('new/relative/path')
  })

  it('should manuallyTrackHotjar with new relative path with logCallback', () => {
    const { result } = renderHook(() => useHotjar())
    const manuallyTrackHotjarSpy = jest.spyOn(
      result.current,
      'manuallyTrackHotjar'
    )
    const { manuallyTrackHotjar } = result.current

    // eslint-disable-next-line no-console
    const callback = console.info

    manuallyTrackHotjar('new/relative/path', callback)

    expect(manuallyTrackHotjarSpy).toHaveBeenCalledWith(
      'new/relative/path',
      callback
    )
  })

  it('should identifyHotjar with broken logCallback', () => {
    // eslint-disable-next-line no-console
    console.error = jest.fn()
    const { result } = renderHook(() => useHotjar())
    const identifyHotjarSpy = jest.spyOn(result.current, 'identifyHotjar')
    const consoleErrorSpy = jest.spyOn(console, 'error')
    const { identifyHotjar } = result.current

    const brokenLogCallback = () => {
      throw Error('test')
    }

    identifyHotjar(
      'foo-0',
      { name: 'foo1', surname: 'foo2', address: 'foo3' },
      brokenLogCallback as (...data: unknown[]) => void
    )

    expect(identifyHotjarSpy).toHaveBeenCalledWith(
      'foo-0',
      { name: 'foo1', surname: 'foo2', address: 'foo3' },
      brokenLogCallback
    )
    expect(consoleErrorSpy).toHaveBeenCalledWith('Hotjar error:', Error('test'))
  })

  it('should identifyHotjar withCallback', () => {
    const { result } = renderHook(() => useHotjar())
    const identifyHotjarSpy = jest.spyOn(result.current, 'identifyHotjar')
    const consoleInfoSpy = jest.spyOn(console, 'info')
    const { identifyHotjar } = result.current

    // eslint-disable-next-line no-console
    const logCallback = console.info

    identifyHotjar(
      'fooId',
      { name: 'foo1', surname: 'foo2', address: 'foo3' },
      logCallback
    )

    expect(identifyHotjarSpy).toHaveBeenCalledWith(
      'fooId',
      { name: 'foo1', surname: 'foo2', address: 'foo3' },
      logCallback
    )
    expect(consoleInfoSpy).toHaveBeenCalledWith('Hotjar identified')
  })
})

describe('Tests Hotjar without being loaded into window', () => {
  beforeAll(() => {
    window.hj = undefined
    // eslint-disable-next-line no-console
    console.error = jest.fn()
  })

  it('should not init hotjar and throw errors', () => {
    const { result } = renderHook(() => useHotjar())
    const { initHotjar } = result.current
    const consoleErrorSpy = jest.spyOn(console, 'error')

    initHotjar(123, 6)

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'Hotjar error:',
      Error('Hotjar initialization failed!')
    )
  })

  it('should identifyHotjar with pure object and throw errors', () => {
    const { result } = renderHook(() => useHotjar())
    const { identifyHotjar } = result.current
    const consoleErrorSpy = jest.spyOn(console, 'error')

    identifyHotjar('123-123-abc', {
      name: 'olli',
      surname: 'parno',
      address: 'streets of tomorrow'
    })

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'Hotjar error:',
      Error('Hotjar is not available! Is Hotjar initialized?')
    )
  })
})
