import type { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';

import { LoadingScreen } from './loading-screen';

const meta: Meta<typeof LoadingScreen> = {
  title: 'Theme/Organism/Loading',
  component: LoadingScreen,
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

type Story = StoryObj<typeof LoadingScreen>;

export const LoadingScreenDefault: Story = {
  render: () => <LoadingScreen />,
};

export const LoadingScreenCustomColor: Story = {
  render: () => (
    <LoadingScreen
      slotsProps={{
        progress: {
          color: 'primary',
        },
      }}
    />
  ),
};
