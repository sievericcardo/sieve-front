import { red } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#212121',
    },
    secondary: {
      main: '#221E22',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#393939',
    },
  },
  typography: {
    body2: {
      color: '#f6f6f6!important'
      // fontWeight: 500,
      // fontSize: 26,
      // letterSpacing: 0.5,
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});

export default theme;
