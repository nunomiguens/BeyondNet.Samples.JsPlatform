import styled from 'styled-components'
import { topBarHeight } from 'theme/variables'
import { layoutContentWidthMixin } from 'theme/mixings'

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
  padding-top: 2%;
`

export const Main = styled.main`
  ${layoutContentWidthMixin};
  height: 100vh;
  flex-grow: 1;
  position: relative;
  overflow: hidden;
  z-index: 0;
`
