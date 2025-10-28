import type { Preview } from '@storybook/react';
import { useMemo } from 'react';
import { useGlobals } from '@storybook/preview-api';
import { AppRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';

import 'dayjs/locale/en.js';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { SettingsProvider, defaultSettings } from '../src';
import { StandaloneThemeProvider } from '../src/theme/standalone-theme-provider';

// Mock Next.js router for Storybook
const mockRouter = {
  back: () => {},
  forward: () => {},
  refresh: () => {},
  push: () => {},
  replace: () => {},
  prefetch: () => {},
};

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

      const settings = useMemo(
        () => ({
          ...defaultSettings,
          mode: mode,
        }),
        [mode]
      );

      return (
        <AppRouterContext.Provider value={mockRouter}>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en">
            <SettingsProvider key={mode}
                              defaultSettings={settings}
                              storageKey={`storybook-settings-${mode}`}
            >
              <StandaloneThemeProvider key={mode}
                             defaultMode='light'
              >
                <Story />
              </StandaloneThemeProvider>
            </SettingsProvider>
          </LocalizationProvider>
        </AppRouterContext.Provider>
      );
    },
  ],
};

export default preview;
