import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import { LoadingScreen } from './loading-screen';

const meta: Meta<typeof LoadingScreen> = {
  title: 'Components/LoadingScreen',
  component: LoadingScreen,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LoadingScreen>;

export const Default: Story = {
  render: () => (
    <Box sx={{ width: 400, height: 300, position: 'relative' }}>
      <LoadingScreen />
    </Box>
  ),
};

export const Fullscreen: Story = {
  render: () => (
    <Box sx={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0 }}>
      <LoadingScreen />
    </Box>
  ),
};
