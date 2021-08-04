import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import { ReactComponent as LogoSvg } from '../../../assets/logo.svg'
import {
  topBarHeight,
  navBarWidth,
  navBarMiniWidth,
  navBarLinkHeight,
  navBarMiniLinkHeight,
  navBarMiniLogoWidth,
  navBarLogoWidth
} from '../../../theme/variables'

export const Brand = styled.div`
  height: ${topBarHeight};
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Logo = styled(LogoSvg)`
  height: auto;

  #logo-shadow {
    fill: ${(props) => props.theme.palette.logo.shadow};
  }

  #logo-store {
    fill: ${(props) => props.theme.palette.logo.store};
  }
`
export const Aside = styled.aside<{ isMini: boolean }>`
  height: 100vh;
  width: ${(props) => (props.isMini ? navBarMiniWidth : navBarWidth)};
  border-right: 1px solid ${(props) => props.theme.palette.divider};
  z-index: 0;
  transition: width 100ms ease-in-out;
  flex: 0 0 auto;

  ${Logo} {
    width: ${(props) => (props.isMini ? navBarMiniLogoWidth : navBarLogoWidth)};
  }
`
export const NavBar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  background-color: ${(props) => props.theme.palette.appNavBar.background};
`

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  flex-flow: column;
  justify-content: center;
  position: relative;
  width: 100%;
  color: ${(props) => props.theme.palette.secondary.main};
  font-weight: 500;
  letter-spacing: -0.024rem;
  min-height: ${navBarLinkHeight};
  text-decoration: none;
  color: ${(props) => props.theme.palette.text.secondary};

  svg {
    height: auto;
    width: 1.7rem;
  }

  &.active {
    color: ${(props) => props.theme.palette.primary.main};
  }
`

export const MiniLink = styled(Link)`
  min-height: ${navBarMiniLinkHeight};
`

export const Label = styled.span`
  max-width: 90%;
  margin: 0 auto;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 3px;
  padding: 8px;
  color: ${(props) => props.theme.palette.text.secondary};
  ${Link}.active & {
    color: ${(props) => props.theme.palette.text.primary};
  }
`
