import styled from 'styled-components'

import { AlertsType } from 'models'

import { Close as CloseIcon } from '@material-ui/icons'
import { SnackbarContent } from '@material-ui/core'

export const Root = styled.div`
  max-width: 500px;
`

export const StyledSnackbarContent = styled(SnackbarContent)`
  margin: ${props => `${props.theme.spacing(1)}px`};

  &.${AlertsType.Success} {
    background-color: ${props => props.theme.palette.success.main};
  }
  &.${AlertsType.Error} {
    background-color: ${props => props.theme.palette.error.dark};
  }
  &.${AlertsType.Warning} {
    background-color: ${props => props.theme.palette.warning.main};
  }
  &.${AlertsType.Info} {
    background-color: ${props => props.theme.palette.primary.light};
  }
`

export const Message = styled.span`
  display: flex;
  align-items: center;
  .MuiSvgIcon-root {
    opacity: 0.9;
    margin-right: ${props => `${props.theme.spacing(1)}px`};
  }
`

export const StyledCloseIcon = styled(CloseIcon)`
  font-size: 20px;
`
