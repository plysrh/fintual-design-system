import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import styled from '@emotion/native';
import { ThemeProvider, Typography } from 'fintual-design-system';

const StyledView = styled.View`
  align-items: left;
  background-color: ${(props) => props.theme.colors.background};
  flex: 1;
  justify-content: center;
  padding: 20px;
`;

export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        {/* eslint-disable-next-line react-native/no-inline-styles */}
        <SafeAreaView style={{ flex: 1 }}>
          <StyledView>
            <Typography variant="h1">h1. Heading</Typography>
            <Typography variant="h2">h2. Heading</Typography>
            <Typography variant="h3">h3. Heading</Typography>
            <Typography variant="h4">h4. Heading</Typography>
            <Typography variant="h5">h5. Heading</Typography>
            <Typography variant="h6">h6. Heading</Typography>
            <Typography variant="subtitle1">
              subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Quos blanditiis tenetur
            </Typography>
            <Typography variant="subtitle2">
              subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Quos blanditiis tenetur
            </Typography>
            <Typography variant="body1">
              body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quos Quos Quos blanditiis tenetur unde suscipit, quam beatae rerum
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
            <Typography variant="body2">
              body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quos Quos blanditiis tenetur unde suscipit, quam beatae rerum
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </StyledView>
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
