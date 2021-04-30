import { shallow } from 'enzyme'

import { checkProps } from 'utils/tests'
import ThemeSwitch from './ThemeSwitch'
import { LightThemeIcon, StyledSwitch, DarkThemeIcon } from './styles'

const createWrapper = (props) => shallow(<ThemeSwitch {...props} />)

describe('ThemeSwitch UI Component', () => {
  describe('Check PropTypes', () => {
    it('should not throw a warning', () => {
      const expectedProps = {
        isLightTheme: true,
        onChangeThemeMode: () => {}
      }

      const propsErr = checkProps(ThemeSwitch, expectedProps)
      expect(propsErr).toBeUndefined()
    })
  })

  let wrapper
  let onChangeThemeModeMock = jest.fn()

  describe('Rendering', () => {
    it('should matches the snapshot', () => {
      const props = {
        isLightTheme: true,
        onChangeThemeMode: onChangeThemeModeMock
      }
      wrapper = createWrapper(props)

      expect(wrapper).toMatchSnapshot()
    })

    it('should show Dark theme option when IS NOT light theme', () => {
      const props = {
        isLightTheme: false,
        onChangeThemeMode: onChangeThemeModeMock
      }
      wrapper = createWrapper(props)
      const lightIcon = wrapper.find(LightThemeIcon)
      const darkIcon = wrapper.find(DarkThemeIcon)
      const themeSwitch = wrapper.find(StyledSwitch)

      expect(lightIcon.hasClass('active')).toBe(false)
      expect(darkIcon.hasClass('active')).toBe(true)
      expect(themeSwitch.props().checked).toEqual(false)
    })

    it('should show Light theme option when IS light theme', () => {
      const props = {
        isLightTheme: true,
        onChangeThemeMode: onChangeThemeModeMock
      }
      wrapper = createWrapper(props)
      const lightIcon = wrapper.find(LightThemeIcon)
      const darkIcon = wrapper.find(DarkThemeIcon)
      const themeSwitch = wrapper.find(StyledSwitch)

      expect(lightIcon.hasClass('active')).toBe(true)
      expect(darkIcon.hasClass('active')).toBe(false)
      expect(themeSwitch.props().checked).toEqual(true)
    })
  })

  describe('Interactions', () => {
    it('should execute onChange callback on click', () => {
      const props = {
        isLightTheme: false,
        onChange: onChangeThemeModeMock
      }
      const themeSwitch = createWrapper(props).find(StyledSwitch)
      themeSwitch.simulate('change')

      expect(onChangeThemeModeMock).toHaveBeenCalled()
    })
  })
})
