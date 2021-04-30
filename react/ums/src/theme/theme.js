import {
  blue,
  green,
  amber,
  indigo,
  lime,
  teal,
  grey
} from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeModes } from './variables'

const commonPalette = {
  primary: {
    main: indigo[600]
  },
  secondary: {
    main: lime[600]
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
      background: grey[700],
      onHoverLinkBackground: 'rgba(0,0,0,0.1)'
    },
    logo: {
      shadow: teal[50],
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

const theme = (mode = ThemeModes.Light) =>
  createMuiTheme({
    palette: {
      type: mode,
      ...commonPalette,
      ...palettes[mode]
    },
    spreadIt: {
      // Add ome custom styles
    }
  })

export default theme
