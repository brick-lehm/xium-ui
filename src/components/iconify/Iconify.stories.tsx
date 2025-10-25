import type { Meta, StoryObj } from '@storybook/react';
import Stack from '@mui/material/Stack';
import { Iconify } from './iconify';

const meta: Meta<typeof Iconify> = {
  title: 'Components/Iconify',
  component: Iconify,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'text',
      description: 'Iconify icon name',
    },
    width: {
      control: 'number',
      description: 'Icon width',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Iconify>;

export const Basic: Story = {
  args: {
    icon: 'solar:home-bold-duotone',
    width: 24,
  },
};

export const Large: Story = {
  args: {
    icon: 'solar:star-bold-duotone',
    width: 48,
  },
};

export const WithColor: Story = {
  args: {
    icon: 'solar:heart-bold',
    width: 32,
    sx: { color: 'error.main' },
  },
};

export const MultipleIcons: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Iconify icon="solar:home-bold-duotone" width={32} />
      <Iconify icon="solar:user-bold-duotone" width={32} />
      <Iconify icon="solar:settings-bold-duotone" width={32} />
      <Iconify icon="solar:heart-bold-duotone" width={32} />
      <Iconify icon="solar:star-bold-duotone" width={32} />
    </Stack>
  ),
};
