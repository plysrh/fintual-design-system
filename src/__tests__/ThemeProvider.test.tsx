import { render } from '@testing-library/react-native';
import { Text } from 'react-native';
import { ThemeProvider } from '../modules/theme/ThemeProvider';
import { useTheme } from '../modules/theme/ThemeContext';

jest.mock('react-native/Libraries/Utilities/useColorScheme', () => ({
  default: jest.fn(() => 'light'),
}));

const TestComponent = () => {
  const { theme, scheme, isDark } = useTheme();
  return (
    <Text testID="theme-info">
      {JSON.stringify({ scheme, isDark, primaryColor: theme.colors.primary })}
    </Text>
  );
};

describe('ThemeProvider', () => {
  it('provides light theme by default', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    const themeInfo = JSON.parse(getByTestId('theme-info').props.children);
    expect(themeInfo.scheme).toBe('system');
    expect(themeInfo.isDark).toBe(false);
  });

  it('respects initial scheme', () => {
    const { getByTestId } = render(
      <ThemeProvider initialScheme="dark">
        <TestComponent />
      </ThemeProvider>
    );
    const themeInfo = JSON.parse(getByTestId('theme-info').props.children);

    expect(themeInfo.scheme).toBe('dark');
    expect(themeInfo.isDark).toBe(true);
  });

  it('throws error when useTheme is used outside provider', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

    expect(() => render(<TestComponent />)).toThrow(
      'useTheme must be used within ThemeProvider'
    );

    consoleSpy.mockRestore();
  });
});
