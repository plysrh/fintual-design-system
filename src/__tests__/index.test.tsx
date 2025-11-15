import { render } from '@testing-library/react-native';
import { ThemeProvider, Typography } from '../index';

describe('fintual-design-system', () => {
  it('exports main components', () => {
    expect(ThemeProvider).toBeDefined();
    expect(Typography).toBeDefined();
  });

  it('renders Typography within ThemeProvider', () => {
    const { getByText } = render(
      <ThemeProvider>
        <Typography variant="h1">Integration Test</Typography>
      </ThemeProvider>
    );

    expect(getByText('Integration Test')).toBeTruthy();
  });
});
