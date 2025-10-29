import type { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';

import { NotifierStory } from './notifier.mock';


const meta: Meta<typeof NotifierStory> = {
  title: 'Theme/Organism/Notifier',
  component: NotifierStory,
  parameters: {
    layout: 'fullwidth',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box
        sx={{
          bgcolor: 'background.light',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingY: 10,
        }}
      >
        <Story />
      </Box>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof NotifierStory>;

export const Success: Story = {
  args: {
    notification: '200ステータスなど成功時に使用する想定です!',
    type: 'success',
  },
};

