import React from 'react'

import { Box } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import { Header, HeadGrid, NoOverflowGrid } from './styles'

const Loader = () => (
  <Header>
    <HeadGrid container alignItems="center" wrap="nowrap">
      <NoOverflowGrid container item wrap="nowrap">
        <Box marginRight={2}>
          <Skeleton height={60} variant="circle" width={60} />
        </Box>
        <Box width="100%">
          <Skeleton height={16} width="80%" />
          <Skeleton height={10} width="40%" />
        </Box>
      </NoOverflowGrid>
    </HeadGrid>
    <Box
      display="flex"
      justifyContent="space-around"
      marginBottom={1}
      paddingTop={1.2}
      width="100%"
    >
      <Skeleton height={8} width="20%" />
      <Skeleton height={8} width="20%" />
    </Box>
  </Header>
)

export default Loader
