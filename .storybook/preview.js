import { Global, ThemeProvider } from '@emotion/react';
import * as NextImage from 'next/image';
import { GlobalStyles } from '../styles/global';
import { Themes } from '../styles/themes';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

const withThemeProvider = (Story, context) => {
  const background =
    context.globals.backgrounds?.value || parameters.backgrounds.defaultColor;

  const theme = Object.values(Themes).find(
    (theme) => theme.background === background
  );

  return (
    <ThemeProvider theme={theme}>
      <Story {...context} />
    </ThemeProvider>
  );
};

const withGlobalStyles = (Story, context) => (
  <>
    <Global styles={GlobalStyles} />
    <Story {...context} />
  </>
);

export const decorators = [withThemeProvider, withGlobalStyles];

export const parameters = {
  backgrounds: {
    default: 'dark',
    defaultColor: '#5e5c64',
    values: [
      { name: 'dark', value: '#5e5c64' },
      { name: 'light', value: '#e4ebf5' },
    ],
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
