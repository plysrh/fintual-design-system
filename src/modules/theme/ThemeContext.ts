import { createContext, useContext } from 'react';
import type { Theme, Scheme } from './types';

interface ThemeContextType {
  theme: Theme;
  scheme: Scheme;
  setScheme: (scheme: Scheme) => void;
  isDark: boolean;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }

  return context;
}
