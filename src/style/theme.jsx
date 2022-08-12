import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const colors = {
  schemeYellow: {
    500: '#FFBA00', // you need this
  },
  primary: '#FFBA00',
  background: 'white',
  red: '#FF4A26',
  text: {
    primary: '#252F3E',
    secondary: '#425466',
    white: 'white',
    yellow: '#FFBA00',
    red: '#FF4A26',
    transparent: '#C3CBCB',
    day: '#333333',
    date: '#666666',
  },
  button: {
    primary: '#FFBA00',
    primaryHover: '#E1A400',
    secondary: '#E5E5E5',
    secondaryHover: '#BFBFBF',
    red: '#FF4A26',
    transparentBasic: '#F7F8F8',
    transparentWarning: '#FFFAED',
  },
  border: {
    primary: '#B6BABF',
    red: '#FF4A26',
  },
};

const theme = extendTheme({
  config,
  colors,
});

export default theme;
