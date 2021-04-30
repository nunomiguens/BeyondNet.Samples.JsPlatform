import styled, { css } from 'styled-components'
import {
  sideBarWidth,
  sideBarMinWidth,
  sideBarMaxWidth,
  sideBarMiniWidth
} from 'theme/variables'
import { vScrollOnlyMixin } from 'theme/mixings'

import { Paper } from '@material-ui/core'
import { ChevronLeft } from '@material-ui/icons'

const flexColumn = css`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const borderBoxed = css`
  margin: 0;
  box-sizing: border-box;
`

export const Root = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  box-sizing: border-box;
`

export const SideBar = styled.aside`
  ${flexColumn}
  ${borderBoxed}

  flex-wrap: wrap;
  overflow: hidden;
  width: ${sideBarMiniWidth};
  min-width: ${sideBarMiniWidth};
  max-width: 0;
  transition: all 50ms ease;
  padding: ${props => props.theme.spacing(3, 0, 3, 3)};

  &.expanded {
    width: ${sideBarWidth};
    min-width: ${sideBarMinWidth};
    max-width: ${sideBarMaxWidth};
  }
`

export const SideBarContent = styled.div`
  ${vScrollOnlyMixin}
  ${flexColumn}
  ${borderBoxed}

  flex: 1;
  flex-wrap: nowrap;

  > div:not(:last-child) {
    padding-bottom: ${props => `
           ${props.theme.spacing(1)}px`};
  }
`

export const SideBarFooter = styled.div`
  ${flexColumn}
  ${borderBoxed}
  flex-wrap: wrap;
`

export const SidebarFilterActions = styled.div`
  padding: ${props => props.theme.spacing(1, 1)};
  text-align: right;
  overflow: hidden;
`

export const SideBarActions = styled.div`
  margin-top: ${props => `${props.theme.spacing(1)}px`};
  width: 100%;
  text-align: right;
  overflow: hidden;

  ${SideBar}:not(.expanded) & {
    text-align: center;
  }
`

export const StyledChevronLeftIcon = styled(ChevronLeft)`
  transition: transform 350ms;

  ${SideBar}:not(.expanded) & {
    transform: rotate(180deg);
  }
`

export const Main = styled.div`
  width: calc(100% - ${sideBarMaxWidth});
  flex: 1;
  height: 100%;
  padding: ${props => `${props.theme.spacing(3)}px`};
  ${SideBar} & {
    padding-left: 0;
  }
`

export const StyledPaper = styled(Paper)`
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
`

export const MainContent = styled.div`
  ${flexColumn}
  ${borderBoxed}
  flex-wrap: nowrap;
  height: 100%;
`

export const FiltersWrapper = styled.div`
  flex: 1;
  width: 100%;
  box-sizing: border-box;
`

export const HeaderWrapper = styled.div`
  padding: ${props => props.theme.spacing(2.5, 2.5, 0, 2.5)};
`

export const ToolbarWrapper = styled.div`
  padding: ${props => props.theme.spacing(1.5, 2.5, 0, 2.5)};
  background-color: ${props => props.theme.palette.background.paper};
  transition: box-shadow 200ms ease, padding 200ms ease;

  ${StyledPaper}.scrolled-results && {
    position: sticky;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1;
    box-shadow: ${props => props.theme.shadows[12]};
  }
`

export const ResultsWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const FooterWrapper = styled.div`
  padding: ${props => props.theme.spacing(0, 2.5)};
`
