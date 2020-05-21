import { theme } from '@chakra-ui/core';

// Let's say you want to add custom colors
export const customTheme = {
  ...theme,
  sizes: {
    ...theme.space,
    full: '100%',
    'screen-h': '100vh',
    'screen-w': '100vw',
    '3xs': '14rem',
    '2xs': '16rem',
    xs: '20rem',
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem',
    '7xl': '80rem',
  },
};
