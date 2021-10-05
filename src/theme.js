import { createTheme } from '@material-ui/core/styles'

// https://material-ui-next.com/customization/themes/
// https://material-ui-next.com/style/color/
export default createTheme({
  palette: {
    primary: {
      main: '#2196f3'
    },
  },
  overrides: {
    MuiButton: {
      raisedPrimary: {
        color: 'white',
      },
    },
  }
})