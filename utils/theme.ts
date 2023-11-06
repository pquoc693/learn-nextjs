// import { Roboto } from 'next/font/google';
import {
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';
import { red } from '@mui/material/colors';

// export const roboto = Roboto({
//   weight: ['300', '400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap',
// });

// Create a theme instance.
let theme = createTheme({
  typography: {
    fontFamily: 'Heebo, sans-serif',
  },
  palette: {
    primary: {
      main: '#ff6464',
    },
    secondary: {
      light: 'rgba(237, 247, 250, 1)',
      main: '#00ABCC',
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: '#21243D',
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'md',
      },
      styleOverrides: {
        maxWidthMd: {
          maxWidth: '860px',
          '@media (min-width: 900px)': {
            maxWidth: '860px',
          },
        },
        maxWidthSm: {
          maxWidth: '680px',
          '@media (min-width: 600px)': {
            maxWidth: '680px',
          },
        },
      },
      // variants: {},
    },
    MuiLink: {
      defaultProps: {
        underline: 'hover',
        component: 'div',
      },
      styleOverrides: {
        root: {
          color: 'black',
          '&:hover, &.active': {
            color: '#ff6464',
          },
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            color: 'white',
          },
        },
      ],
    },
    MuiChip: {
      styleOverrides: {
        root: {
          paddingInline: 2, //trái phải
        },
      },
      variants: [
        {
          props: { color: 'secondary' }, // khi color là secondary thì apply style dưới
          style: {
            backgroundColor: '#142850',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 16,
          },
        },
      ],
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
