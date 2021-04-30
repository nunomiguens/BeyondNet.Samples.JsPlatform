import styled, { css } from 'styled-components'
import { Switch } from '@material-ui/core'

export const Root = styled.div`
  position: relative;
`

export const StyledSwitch = styled(Switch)`
  &.MuiSwitch-root {
    width: 80px;
    height: 47px;
    padding: 10px;
  }

  .MuiSwitch-thumb {
    width: 21px;
    height: 21px;
    background-color: #fff;
  }

  .MuiSwitch-track {
    border-radius: 14px;
    background-color: black;
  }

  .MuiSwitch-switchBase.Mui-checked {
    left: 100%;
    transform: translateX(-100%);
  }

  .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track {
    background-color: rgba(255, 255, 255, 0.4);
  }

  .MuiSwitch-switchBase {
    position: absolute;
    padding: 13px;
  }
`

const themeIcon = css`
  position: absolute;
  z-index: 1000;
  pointer-events: none;
  opacity: 0;
  transition: all 200ms ease-in-out;
`

export const LightThemeIcon = styled.div`
  ${themeIcon};
  top: 12px;
  left: 12px;
  color: yellow;
  transform: translate(-10px, 1px) rotate(-45deg) scale(0);
  &.active {
    transform: translate(0) rotate(0) scale(1);
    opacity: 1;
  }
`

export const DarkThemeIcon = styled.div`
  ${themeIcon};
  top: 11px;
  right: 12px;
  color: #bdbdbd;
  transform: translate(10px, 1px) rotate(45deg) scale(0);
  &.active {
    transform: translate(0) rotate(0) scale(1);
    opacity: 1;
  }
`
