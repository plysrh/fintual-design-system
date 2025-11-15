import { type ReactNode } from 'react';
import { Text, type TextProps } from 'react-native';
import styled from '@emotion/native';

/**
 * Typography variant types based on Material-UI typography system.
 *
 * @see https://mui.com/material-ui/react-typography/
 * @see https://github.com/mui/material-ui/blob/master/packages/mui-material/src/Typography/Typography.js
 */
export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2';

export interface TypographyProps extends Omit<TextProps, 'style'> {
  children: ReactNode;
  color?: string;
  variant?: TypographyVariant;
}

const variantStyles = {
  h1: {
    fontSize: 96,
    fontWeight: '300' as const,
    letterSpacing: -1.5,
    lineHeight: 112,
  },
  h2: {
    fontSize: 60,
    fontWeight: '300' as const,
    letterSpacing: -0.5,
    lineHeight: 72,
  },
  h3: {
    fontSize: 48,
    fontWeight: '400' as const,
    letterSpacing: 0,
    lineHeight: 56,
  },
  h4: {
    fontSize: 34,
    fontWeight: '400' as const,
    letterSpacing: 0.25,
    lineHeight: 42,
  },
  h5: {
    fontSize: 24,
    fontWeight: '400' as const,
    letterSpacing: 0,
    lineHeight: 32,
  },
  h6: {
    fontSize: 20,
    fontWeight: '500' as const,
    letterSpacing: 0.15,
    lineHeight: 32,
  },
  subtitle1: {
    fontSize: 16,
    fontWeight: '400' as const,
    letterSpacing: 0.15,
    lineHeight: 28,
  },
  subtitle2: {
    fontSize: 14,
    fontWeight: '500' as const,
    letterSpacing: 0.1,
    lineHeight: 22,
  },
  body1: {
    fontSize: 16,
    fontWeight: '400' as const,
    letterSpacing: 0.5,
    lineHeight: 24,
  },
  body2: {
    fontSize: 14,
    fontWeight: '400' as const,
    letterSpacing: 0.25,
    lineHeight: 20,
  },
};
const StyledText = styled(Text)<{ color?: string; variant: TypographyVariant }>`
  font-family: ${(props) => props.theme.fonts.main};
  ${(props) => variantStyles[props.variant]}
  ${(props) => {
    if (!props.color) {
      return `color: ${props.theme.colors.primary}`;
    }

    return props.color && `color: ${props.color};`;
  }}
`;

/**
 * Typography component.
 *
 * Provides a set of predefined text styles based on Material Design typography system.
 * Supports theming through @emotion/native and allows custom color overrides.
 *
 * @param children - The text content to render
 * @param color - Optional custom text color (overrides theme color)
 * @param variant - Typography variant (defaults to 'body1')
 *
 * @example
 * ```tsx
 * <Typography variant="h1">Main Title</Typography>
 * <Typography variant="body1" color="#FF0000">Red text</Typography>
 * <Typography variant="subtitle2">Secondary text</Typography>
 * ```
 */
export function Typography({
  children,
  color,
  variant = 'body1',
  ...props
}: TypographyProps) {
  return (
    <StyledText color={color} variant={variant} {...props}>
      {children}
    </StyledText>
  );
}
