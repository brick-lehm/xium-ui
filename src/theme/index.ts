export * from './core';

export * from './theme-config';

// Export standalone provider for npm usage (default)
export * from './standalone-theme-provider';
export { ThemeProvider, StandaloneThemeProvider } from './standalone-theme-provider';

// Full provider with settings (for internal use)
// Use: import { ThemeProvider } from 'src/theme/theme-provider'
// export * from './theme-provider';

export * from './create-theme';

export type * from './types';
