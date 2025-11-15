import { type ReactElement } from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from '../modules/theme/ThemeProvider';
import { Typography } from '../modules/typography/Typography';

const renderWithTheme = (component: ReactElement) => {
  return render(<ThemeProvider>{component}</ThemeProvider>);
};

describe('Typography', () => {
  it('renders children correctly', () => {
    const { getByText } = renderWithTheme(<Typography>Test text</Typography>);

    expect(getByText('Test text')).toBeTruthy();
  });

  it('applies default variant body1', () => {
    const { getByText } = renderWithTheme(
      <Typography>Default text</Typography>
    );
    const element = getByText('Default text');
    const style = Array.isArray(element.props.style)
      ? element.props.style[0]
      : element.props.style;

    expect(style).toMatchObject({
      fontSize: 16,
      fontWeight: '400',
      letterSpacing: 0.5,
      lineHeight: 24,
    });
  });

  it('applies h1 variant styles', () => {
    const { getByText } = renderWithTheme(
      <Typography variant="h1">Heading 1</Typography>
    );
    const element = getByText('Heading 1');
    const style = Array.isArray(element.props.style)
      ? element.props.style[0]
      : element.props.style;

    expect(style).toMatchObject({
      fontSize: 96,
      fontWeight: '300',
      letterSpacing: -1.5,
      lineHeight: 112,
    });
  });

  it('applies custom color', () => {
    const { getByText } = renderWithTheme(
      <Typography color="#ff0000">Red text</Typography>
    );
    const element = getByText('Red text');
    const style = Array.isArray(element.props.style)
      ? element.props.style[0]
      : element.props.style;

    expect(style).toMatchObject({
      color: '#ff0000',
    });
  });

  it('passes through additional props', () => {
    const { getByText } = renderWithTheme(
      <Typography testID="custom-typography">Test</Typography>
    );

    expect(getByText('Test').props.testID).toBe('custom-typography');
  });
});
