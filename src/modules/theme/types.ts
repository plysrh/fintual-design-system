export type Scheme = 'light' | 'dark' | 'system';

export interface Theme {
  colors: {
    background: string;
    primary: string;
    secondary: string;
    text: string;
  };
  fonts: {
    main: string;
  };
}
