import packageJson from '../package.json';

// ----------------------------------------------------------------------

/**
 * Safe environment variable getter for browser compatibility
 * In browser/webpack environments without Node.js polyfills, process may be undefined
 */
const getEnv = (key: string, defaultValue = ''): string => {
  if (typeof process !== 'undefined' && process.env) {
    return process.env[key] ?? defaultValue;
  }
  return defaultValue;
};

// ----------------------------------------------------------------------

export type ConfigValue = {
  appName: string;
  appVersion: string;
  serverUrl: string;
  assetsDir: string;
  isStaticExport: boolean;
  auth: {
    method: 'jwt' | 'amplify' | 'firebase' | 'supabase' | 'auth0';
    skip: boolean;
    redirectPath: string;
  };
  firebase: {
    appId: string;
    apiKey: string;
    projectId: string;
    authDomain: string;
    storageBucket: string;
    measurementId: string;
    messagingSenderId: string;
  };
  amplify: { userPoolId: string; userPoolWebClientId: string; region: string };
  auth0: { clientId: string; domain: string; callbackUrl: string };
  supabase: { url: string; key: string };
};

// ----------------------------------------------------------------------

export const CONFIG: ConfigValue = {
  appName: 'Minimal UI',
  appVersion: packageJson.version,
  serverUrl: getEnv('NEXT_PUBLIC_SERVER_URL'),
  assetsDir: getEnv('NEXT_PUBLIC_ASSETS_DIR'),
  // For framework-free environments, default to true (use localStorage instead of cookies)
  isStaticExport: true,
  /**
   * Auth
   * @method jwt | amplify | firebase | supabase | auth0
   */
  auth: {
    method: 'jwt',
    skip: false,
    redirectPath: '/dashboard',
  },
  /**
   * Firebase
   */
  firebase: {
    apiKey: getEnv('NEXT_PUBLIC_FIREBASE_API_KEY'),
    authDomain: getEnv('NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN'),
    projectId: getEnv('NEXT_PUBLIC_FIREBASE_PROJECT_ID'),
    storageBucket: getEnv('NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET'),
    messagingSenderId: getEnv('NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID'),
    appId: getEnv('NEXT_PUBLIC_FIREBASE_APPID'),
    measurementId: getEnv('NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID'),
  },
  /**
   * Amplify
   */
  amplify: {
    userPoolId: getEnv('NEXT_PUBLIC_AWS_AMPLIFY_USER_POOL_ID'),
    userPoolWebClientId: getEnv('NEXT_PUBLIC_AWS_AMPLIFY_USER_POOL_WEB_CLIENT_ID'),
    region: getEnv('NEXT_PUBLIC_AWS_AMPLIFY_REGION'),
  },
  /**
   * Auth0
   */
  auth0: {
    clientId: getEnv('NEXT_PUBLIC_AUTH0_CLIENT_ID'),
    domain: getEnv('NEXT_PUBLIC_AUTH0_DOMAIN'),
    callbackUrl: getEnv('NEXT_PUBLIC_AUTH0_CALLBACK_URL'),
  },
  /**
   * Supabase
   */
  supabase: {
    url: getEnv('NEXT_PUBLIC_SUPABASE_URL'),
    key: getEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY'),
  },
};
