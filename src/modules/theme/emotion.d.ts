import '@emotion/react';
import type { Theme as CustomTheme } from './types';

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}
