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
    body1: {
      fontSize: "1.6rem",
      fontWeight: 'bold',
    },
    body2: {
      fontSize: "1.2rem",
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h2',
          h2: 'h2',
          h3: 'h2',
          h4: 'h2',
          h5: 'h2',
          h6: 'h2',
          subtitle1: 'h2',
          subtitle2: 'h2',
          body1: 'span',
          body2: 'span',
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;