import React, { ChangeEvent } from 'react'
import PropTypes from 'prop-types'

import { WbSunny as SunIcon, NightsStay as MoonIcon } from '@material-ui/icons'
import { StyledSwitch, LightThemeIcon, DarkThemeIcon, Root } from './styles'

interface IThemeSwitch {
  isLightTheme: boolean,
  onChange(): ChangeEvent<HTMLInputElement>
}

const ThemeSwitch = ({ isLightTheme, onChange }: IThemeSwitch) => (
<Root>
    <LightThemeIcon className={`${isLightTheme ? 'active' : ''}`}>
      <SunIcon />
    </LightThemeIcon>
    <DarkThemeIcon className={`${!isLightTheme ? 'active' : ''}`}>
      <MoonIcon />
    </DarkThemeIcon>
    <StyledSwitch
      checked={isLightTheme}
      color="default"
      inputProps={{ 'aria-label': 'Change Theme' }}
      onChange={onChange}
    />
  </Root>
)


ThemeSwitch.defaultProps = {
  isLightTheme: false,
}

ThemeSwitch.propTypes = {
  isLightTheme: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}

export default React.memo(ThemeSwitch)