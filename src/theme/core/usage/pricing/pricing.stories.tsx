import type { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';

import { Pricing } from './pricing';
import { CatalogsMock } from './pricing.mock';

const meta: Meta<typeof Pricing> = {
  title: 'Usage/Pricing',
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
    planCatalogs: CatalogsMock,
  },
};

export const Desktop: Story = {
  args: {
    planCatalogs: CatalogsMock,
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

export const Mobile: Story = {
  args: {
    planCatalogs: CatalogsMock,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
};
