import styled from 'styled-components'
import { Avatar, Grid } from '@material-ui/core'

export const RootGrid = styled(Grid)`
  display: flex;
  overflow: hidden;
  height: 100%;
`

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  box-shadow: ${props => props.theme.shadows[4]};
`

export const MainGrid = styled(Grid)`
  flex-grow: 0;
  max-width: 55%;
  flex-basis: 55%;
`

export const ContentGrid = styled(Grid)`
  overflow-y: auto;
  padding: ${props => `${props.theme.spacing(2.5)}px`};
  .react-swipeable-view-container > div {
    overflow: hidden !important;
  }
`

export const HeadGrid = styled(Grid)`
  padding: ${props => props.theme.spacing(2.5, 2.5, 1.5, 2.5)};
`

export const NoOverflowGrid = styled(Grid)`
  overflow: hidden;
`

export const Title = styled.div`
  width: 100%;
  overflow: hidden;

  > :first-child {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`

export const Actions = styled.div`
  display: flex;
  max-width: 50%;
  margin-left: ${props => `${props.theme.spacing(4)}px`};
`

export const TabsWrapper = styled.div`
  width: 100%;
`

export const SidebarGrid = styled(Grid)`
  display: flex;
  border-left: 1px solid ${props => props.theme.palette.divider};
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  background-color: ${props => props.theme.palette.background.default};
  flex-grow: 0;
  max-width: 45%;
  flex-basis: 45%;
`

export const StyledAvatar = styled(Avatar)`
  width: 60px;
  height: 60px;
  margin-right: ${props => `${props.theme.spacing(2)}px`};
  font-size: ${props => props.theme.typography.h5.fontSize};
`
