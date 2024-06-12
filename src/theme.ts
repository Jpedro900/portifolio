import { createTheme, responsiveFontSizes } from '@mui/material/styles';


let theme = createTheme({
  palette: {
    primary: {
      main: "#1b3d85"
    },
    secondary: {
      main: "#e6e9f2"
    },
  },
  typography: {
    fontFamily: 'Segoe UI'
  }
});

theme = responsiveFontSizes(theme);

export default theme;