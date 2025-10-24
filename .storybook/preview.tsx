import type { Preview } from '@storybook/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from '../src/theme';
import { useEffect } from 'react';
import { useGlobals } from '@storybook/preview-api';

const theme = createTheme();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true,
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'circlehollow', title: 'Light' },
          { value: 'dark', icon: 'circle', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story) => {
      const [{ theme: mode }] = useGlobals();

      useEffect(() => {
        const html = document.documentElement;
        html.setAttribute('data-mui-color-scheme', mode);

        // Set background color based on theme
        if (mode === 'dark') {
          html.style.backgroundColor = '#1C252E';
          html.style.colorScheme = 'dark';
        } else {
          html.style.backgroundColor = '#FFFFFF';
          html.style.colorScheme = 'light';
        }
      }, [mode]);

      return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
