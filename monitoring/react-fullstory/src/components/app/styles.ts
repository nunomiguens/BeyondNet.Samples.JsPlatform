import styled from 'styled-components'
import { layoutContentWidthMixin } from '../../theme/mixins'
import { topBarHeight } from '../../theme/variables'

export const AppWrapper = styled.div`
  display: flex;
`

export const TopBarSpace = styled.div`
  min-height: ${topBarHeight};
`

export const Container = styled.div`
  width: 100%;
  height: calc(100% - ${topBarHeight});
  box-sizing: border-box;
`

export const Main = styled.main`
  ${layoutContentWidthMixin};
  height: 100vh;
  flex-grow: 1;
  position: relative;
  overflow: hidden;
  z-index: 0;
`
