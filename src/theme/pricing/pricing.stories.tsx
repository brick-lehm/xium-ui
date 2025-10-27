import type { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';

import { Pricing } from './pricing';
import { plansMock } from './pricing.mock';

const meta: Meta<typeof Pricing> = {
  title: 'Theme/Organism/Pricing',
  component: Pricing,
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
        }}
      >
        <Story />
      </Box>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Pricing>;

export const Default: Story = {
  args: {
    plans: plansMock,
  },
};

export const Desktop: Story = {
  args: {
    plans: plansMock,
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

export const Mobile: Story = {
  args: {
    plans: plansMock,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
};
