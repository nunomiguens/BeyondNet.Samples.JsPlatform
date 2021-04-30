import { css } from 'styled-components'
import { navBarMiniWidth, navBarWidth } from './variables'

export const layoutContentWidthMixin = css<{ isMiniNavBar: boolean }>`
  width: calc(
    100% - ${(props) => (props.isMiniNavBar ? navBarMiniWidth : navBarWidth)}
  );
  transition: width 150ms ease-in-out;
`

export const vScrollOnlyMixin = css`
  overflow-y: auto;
  overflow-x: hidden;
`
