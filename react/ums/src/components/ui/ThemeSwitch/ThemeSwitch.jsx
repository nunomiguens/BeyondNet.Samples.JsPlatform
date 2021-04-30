import React from 'react'
import PropTypes from 'prop-types'

import { WbSunny as SunIcon, NightsStay as MoonIcon } from '@material-ui/icons'
import { StyledSwitch, LightThemeIcon, DarkThemeIcon, Root } from './styles'

const ThemeSwitch = ({ isLightTheme, onChange }) => {
  return (
    <Root>
      <LightThemeIcon className={`${isLightTheme ? 'active' : ''}`}>
        <SunIcon />
      </LightThemeIcon>
      <DarkThemeIcon className={`${!isLightTheme ? 'active' : ''}`}>
        <MoonIcon />
      </DarkThemeIcon>
      <StyledSwitch
        onChange={onChange}
        checked={isLightTheme}
        color="default"
        inputProps={{ 'aria-label': 'Change Theme' }}
      />
    </Root>
  )
}

ThemeSwitch.defaultProps = {
  isLightTheme: false
}

ThemeSwitch.propTypes = {
  isLightTheme: PropTypes.bool,
  onChange: PropTypes.func.isRequired
}

export default React.memo(ThemeSwitch)
