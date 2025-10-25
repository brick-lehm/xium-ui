// Theme exports
export * from './theme';
export { StandaloneThemeProvider } from './theme';

// Theme provider with settings support (requires settings and locales)
export { ThemeProvider } from './theme/theme-provider';

// Settings exports (required for ThemeProvider)
// Note: SettingsState is already exported from theme/types
export type {
  SettingsContextValue,
  SettingsProviderProps,
  SettingsDrawerProps,
} from './components/settings/types';
export { defaultSettings } from './components/settings/settings-config';
export { SettingsProvider, useSettingsContext } from './components/settings/context';
export { SettingsDrawer } from './components/settings/drawer';

// Locales exports (required for ThemeProvider)
export * from './locales';
