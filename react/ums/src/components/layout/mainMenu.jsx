import React, { useContext } from 'react'
import clsx from 'clsx'
import { makeStyles, Drawer, IconButton, Divider } from '@material-ui/core'
import { ChevronLeft as ChevronLeftIcon } from '@material-ui/icons'
import UserSettingsContext from '../../context/userSettings'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9)
    }
  }
}))

const MainMenu = () => {
  const classes = useStyles()

  const { menuDrawer, toogleDrawerMode } = useContext(UserSettingsContext)

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(
          classes.drawerPaper,
          !menuDrawer && classes.drawerPaperClose
        )
      }}
      open={menuDrawer}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={toogleDrawerMode}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      Divider
      <Divider />
      Divider
    </Drawer>
  )
}

export default MainMenu
