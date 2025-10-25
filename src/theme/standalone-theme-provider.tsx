'use client';

import type { Theme, ThemeProviderProps as MuiThemeProviderProps } from '@mui/material/styles';

import { useMemo } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MuiThemeProvider, createTheme as createMuiTheme } from '@mui/material/styles';

import { baseTheme } from './create-theme';

// ----------------------------------------------------------------------

/**
 * Standalone ThemeProvider for npm package usage
 * Does not require settings context or localization
 *
 * @example
 * ```tsx
 * import { ThemeProvider } from '@brick-lehm/xium-ui';
 *
 * function App() {
 *   return (
 *     <ThemeProvider>
 *       <YourApp />
 *     </ThemeProvider>
 *   );
 * }
 * ```
 */
export type StandaloneThemeProviderProps = Partial<MuiThemeProviderProps<Theme>>;

export function StandaloneThemeProvider({ children, ...other }: StandaloneThemeProviderProps) {
  // Create theme using base configuration
  const theme = useMemo(() => createMuiTheme(baseTheme), []);

  return (
    <MuiThemeProvider theme={theme} {...other}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}

// Export as default ThemeProvider for easier imports
export { StandaloneThemeProvider as ThemeProvider };
