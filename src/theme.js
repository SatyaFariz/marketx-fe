import { createTheme } from '@material-ui/core/styles'
import Color from './Mobile/Constants/Color'

// https://material-ui-next.com/customization/themes/
// https://material-ui-next.com/style/color/
export default createTheme({
  palette: {
    primary: {
      main: Color.primary
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