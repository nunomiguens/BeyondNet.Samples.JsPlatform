import styled from 'styled-components'
import { Toolbar, Typography, AppBar } from '@material-ui/core'

import { topBarHeight } from '../../../theme/variables'
import { layoutContentWidthMixin } from '../../../theme/mixins'


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const StyledAppBar = styled(({ isMiniNavBar, ...props }) => (
  <AppBar {...props} />
))`
  ${layoutContentWidthMixin};
`

export const StyledToolbar = styled(Toolbar)`
  height: ${topBarHeight};
`
export const StyledTypography = styled(Typography)`
  flex-grow: 1;
  text-align: left;
`
