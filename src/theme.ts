import { createTheme, responsiveFontSizes } from '@mui/material/styles';


let theme = createTheme({
  palette: {
    primary: {
      main: "#11314d"
    },
    secondary: {
      main: "#FFEBA3"
    },
  },
  typography: {
    fontFamily: [
    "Rubik, sans-serif"
    ].join(','),
    h1: {
      fontSize: "4.6rem",
    },
    h2: {
      fontSize: "3.2rem",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;