import { tokens } from './tokens';
import type { Theme } from './types';

export const lightTheme: Theme = {
  colors: {
    background: tokens.colors.white,
    primary: tokens.colors.blue[600],
    secondary: tokens.colors.gray[600],
    text: tokens.colors.gray[900],
    // FIXME: Types do not reflect all token colors - expand Theme interface
    ...tokens.colors,
  },
  fonts: tokens.fonts,
};

export const darkTheme: Theme = {
  colors: {
    background: tokens.colors.gray[900],
    primary: tokens.colors.blue[400],
    secondary: tokens.colors.gray[300],
    text: tokens.colors.gray[50],
    // FIXME: Types do not reflect all token colors - expand Theme interface
    ...tokens.colors,
  },
  fonts: tokens.fonts,
};
