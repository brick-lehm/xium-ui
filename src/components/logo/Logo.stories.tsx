import type { Meta, StoryObj } from '@storybook/react';
import Stack from '@mui/material/Stack';
import { Logo } from './logo';

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    single: {
      control: 'boolean',
      description: 'Show single icon or full logo',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable logo link',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const FullLogo: Story = {
  args: {
    single: false,
  },
};

export const SingleIcon: Story = {
  args: {
    single: true,
  },
};

export const Disabled: Story = {
  args: {
    single: false,
    disabled: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <Stack spacing={3} alignItems="flex-start">
      <Logo sx={{ width: 60, height: 60 }} single />
      <Logo sx={{ width: 80, height: 80 }} single />
      <Logo sx={{ width: 100, height: 100 }} single />
    </Stack>
  ),
};
