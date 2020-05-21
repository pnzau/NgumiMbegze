import { createMuiTheme } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';

const typography = {
  fontFamily: [
    'youngserifregular',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  fontSize: 16,
};

export const themeConfigs = () => {
  return createMuiTheme({
    typography,
    palette: {
      primary: {
        main: colors.lime['A400'],
      },
      secondary: {
        main: colors.deepPurple[400],
      },
    },
  });
};
