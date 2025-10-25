import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import path from 'path';

const config: StorybookConfig = {
  stories: [
    '../src/theme/**/*.mdx',
    '../src/theme/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      resolve: {
        alias: {
          src: path.resolve(__dirname, '../src'),
        },
      },
      define: {
        'global': 'globalThis',
        'process.env.NEXT_PUBLIC_SERVER_URL': JSON.stringify(''),
        'process.env.NEXT_PUBLIC_ASSETS_DIR': JSON.stringify(''),
        'process.env.BUILD_STATIC_EXPORT': JSON.stringify('false'),
        'process.env.NEXT_PUBLIC_FIREBASE_API_KEY': JSON.stringify(''),
        'process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN': JSON.stringify(''),
        'process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID': JSON.stringify(''),
        'process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET': JSON.stringify(''),
        'process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(''),
        'process.env.NEXT_PUBLIC_FIREBASE_APPID': JSON.stringify(''),
        'process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID': JSON.stringify(''),
        'process.env.NEXT_PUBLIC_AWS_AMPLIFY_USER_POOL_ID': JSON.stringify(''),
        'process.env.NEXT_PUBLIC_AWS_AMPLIFY_USER_POOL_WEB_CLIENT_ID': JSON.stringify(''),
        'process.env.NEXT_PUBLIC_AWS_AMPLIFY_REGION': JSON.stringify(''),
        'process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID': JSON.stringify(''),
        'process.env.NEXT_PUBLIC_AUTH0_DOMAIN': JSON.stringify(''),
        'process.env.NEXT_PUBLIC_AUTH0_CALLBACK_URL': JSON.stringify(''),
        'process.env.NEXT_PUBLIC_SUPABASE_URL': JSON.stringify(''),
        'process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY': JSON.stringify(''),
      },
      optimizeDeps: {
        include: ['react', 'react-dom'],
      },
      esbuild: {
        jsxInject: `import React from 'react'`,
      },
    });
  },
};

export default config;
