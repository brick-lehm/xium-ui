import type { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';

import { SplashScreen } from './splash-screen';
import { MotionLazy } from '../../../components/animate';

const meta: Meta<typeof SplashScreen> = {
  title: 'Theme/Organism/SplashScreen',
  component: SplashScreen,
  parameters: {
    layout: 'fullwidth',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box
        sx={{
          bgcolor: 'background.default',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '500px',
          position: 'relative',
        }}
      >
        <Story />
      </Box>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof SplashScreen>;

export const SplashScreenDefault: Story = {
  render: () => (
    <MotionLazy>
      <SplashScreen portal={false} />
    </MotionLazy>
  ),
};

