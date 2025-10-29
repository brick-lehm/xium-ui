// Theme exports
export * from './theme';

// Locales exports (required for ThemeProviderWithSettings)
export * from './locales';

export { SettingsDrawer } from './components/settings/drawer';

export { defaultSettings } from './components/settings/settings-config';
// Advanced ThemeProvider with settings and locales support
// Usage: Wrap with SettingsProvider and I18nProvider first
export { ThemeProvider as ThemeProviderWithSettings } from './theme/theme-provider';
export { SettingsProvider, useSettingsContext } from './components/settings/context';
// Default ThemeProvider (standalone, no settings required)
export { StandaloneThemeProvider, StandaloneThemeProvider as ThemeProvider } from './theme';

// Settings exports (required for ThemeProviderWithSettings)
// Note: SettingsState is already exported from theme/types
export type {
  SettingsDrawerProps,
  SettingsContextValue,
  SettingsProviderProps,
} from './components/settings/types';
