import styled from 'styled-components'
import { Popover, Typography } from '@material-ui/core'

export const StyledPopover = styled(Popover)`
  .MuiPopover-paper {
    min-width: 400px;
  }
`

export const StyledTypography = styled(Typography)`
  padding: ${props => props.theme.spacing(2, 2, 0, 2)};
  line-height: 2rem;
  letter-spacing: 0.0125em;
`
