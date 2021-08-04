import { blue, pink, green, amber } from '@material-ui/core/colors'
import { createMuiTheme, Theme } from '@material-ui/core/styles'
import { ThemeModes } from './variables'

const commonPalette = {
  primary: {
    main: blue[600]
  },
  secondary: {
    main: pink[600]
  },
  success: {
    main: green[600]
  },
  warning: {
    main: amber[700]
  }
}

const palettes = {
  [ThemeModes.Light]: {
    appNavBar: {
      background: '#FFF',
      onHoverLinkBackground: 'rgba(0,0,0,0.1)'
    },
    logo: {
      shadow: '#b3e5fc',
      store: blue[600]
    },
    dataTable: {
      headerBackground: 'rgba(0, 0, 0, 0.02)'
    },
    lowestBackground: '#f3f3f3'
  },
  [ThemeModes.Dark]: {
    appNavBar: {
      background: '#252526',
      onHoverLinkBackground: 'rgba(255, 255, 255, 0.1)'
    },
    logo: {
      shadow: '#3d4f56',
      store: blue[400]
    },
    dataTable: {
      headerBackground: 'rgba(0,0,0,.1)'
    },
    lowestBackground: '#383838'
  }
}

const theme = (mode = ThemeModes.Light): Theme =>
  createMuiTheme({
    palette: {
      type: mode,
      ...commonPalette,
      ...palettes[mode]
    }
  })

export default theme
