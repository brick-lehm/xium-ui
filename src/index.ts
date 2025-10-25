// Theme exports
export * from './theme';

// Default ThemeProvider (standalone, no settings required)
export { StandaloneThemeProvider, StandaloneThemeProvider as ThemeProvider } from './theme';

// Advanced ThemeProvider with settings and locales support
// Usage: Wrap with SettingsProvider and I18nProvider first
export { ThemeProvider as ThemeProviderWithSettings } from './theme/theme-provider';

// Settings exports (required for ThemeProviderWithSettings)
// Note: SettingsState is already exported from theme/types
export type {
  SettingsContextValue,
  SettingsProviderProps,
  SettingsDrawerProps,
} from './components/settings/types';
export { defaultSettings } from './components/settings/settings-config';
export { SettingsProvider, useSettingsContext } from './components/settings/context';
export { SettingsDrawer } from './components/settings/drawer';

// Locales exports (required for ThemeProviderWithSettings)
export * from './locales';
