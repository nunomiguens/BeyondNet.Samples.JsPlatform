import React from 'react'
import styled from 'styled-components'
import { Toolbar, Typography, AppBar } from '@material-ui/core'

import { topBarHeight } from '../../../theme/variables'
import { layoutContentWidthMixin } from '../../../theme/mixins'

// Clean unnecessary prop to avoid to be assigned to child non-react elements(Material UI bug)
export const StyledAppBar = styled(({ isMiniNavBar, ...props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
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
