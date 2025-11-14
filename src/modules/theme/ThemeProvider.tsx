import { useState, type ReactNode, useCallback, useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import type { Scheme } from './types';
import { lightTheme, darkTheme } from './themes';
import { ThemeContext } from './ThemeContext';

interface ThemeProviderProps {
  children: ReactNode;
  initialScheme?: Scheme;
}

/**
 * Theme provider component that manages theme state and provides theme context.
 *
 * Wraps the application with theme context, enabling theme switching and
 * automatic system theme detection. Integrates with both React Context API
 * and Emotion's ThemeProvider for styled components.
 *
 * Features:
 * - Automatic system theme detection
 * - Manual theme switching (light/dark/system)
 * - Integration with Emotion styled components
 * - Memoized theme data for performance
 *
 * @param children - Child components to wrap with theme context
 * @param initialScheme - Initial color scheme (defaults to 'system')
 *
 * @example
 * ```tsx
 * function App() {
 *   return (
 *     <ThemeProvider initialScheme="light">
 *       <MyApp />
 *     </ThemeProvider>
 *   );
 * }
 * ```
 *
 * TODO: Add toggle feature for easier theme switching.
 */
export function ThemeProvider({
  children,
  initialScheme = 'system',
}: ThemeProviderProps) {
  // Get system color scheme preference from React Native
  const systemScheme = useColorScheme();
  // Manage current scheme state
  const [scheme, setScheme] = useState<Scheme>(initialScheme);
  /**
   * Determines the active theme based on current scheme and system preference.
   * Returns dark theme if scheme is 'dark' or if scheme is 'system' and system prefers dark.
   */
  const getTheme = useCallback(() => {
    const isDark =
      scheme === 'dark' || (scheme === 'system' && systemScheme === 'dark');

    return isDark ? darkTheme : lightTheme;
  }, [scheme, systemScheme]);
  /**
   * Memoized theme data object containing all theme context values.
   * Prevents unnecessary re-renders when theme data hasn't changed.
   */
  const themeObject = useMemo(
    () => ({
      isDark: getTheme() === darkTheme,
      scheme,
      setScheme,
      theme: getTheme(),
    }),
    [getTheme, scheme]
  );

  return (
    <ThemeContext.Provider value={themeObject}>
      <EmotionThemeProvider theme={themeObject.theme}>
        {children}
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  );
}
