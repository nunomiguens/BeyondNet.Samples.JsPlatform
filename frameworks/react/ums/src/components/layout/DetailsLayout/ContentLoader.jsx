import React from 'react'

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box
} from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'

const ContentLoader = () => (
  <Box paddingTop={1}>
    <List
      subheader={
        <Box marginTop={1} paddingLeft={2}>
          <Skeleton height={8} variant="text" width="15%" />
        </Box>
      }
    >
      {[0, 1].map(value => (
        <ListItem key={value}>
          <ListItemIcon>
            <Skeleton height={25} variant="circle" width={25} />
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary={<Skeleton height={15} width="75%" />}
          />
        </ListItem>
      ))}
    </List>
  </Box>
)

export default ContentLoader
