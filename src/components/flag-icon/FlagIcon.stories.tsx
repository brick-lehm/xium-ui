import type { Meta, StoryObj } from '@storybook/react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { FlagIcon } from './flag-icon';

const meta: Meta<typeof FlagIcon> = {
  title: 'Components/FlagIcon',
  component: FlagIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    code: {
      control: 'text',
      description: 'Country code (ISO 3166-1 alpha-2)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof FlagIcon>;

export const Default: Story = {
  args: {
    code: 'US',
  },
};

export const Japan: Story = {
  args: {
    code: 'JP',
  },
};

export const UnitedKingdom: Story = {
  args: {
    code: 'GB',
  },
};

export const MultipleFlags: Story = {
  render: () => (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2} alignItems="center">
        <FlagIcon code="US" />
        <Typography>United States</Typography>
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center">
        <FlagIcon code="JP" />
        <Typography>Japan</Typography>
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center">
        <FlagIcon code="GB" />
        <Typography>United Kingdom</Typography>
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center">
        <FlagIcon code="FR" />
        <Typography>France</Typography>
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center">
        <FlagIcon code="DE" />
        <Typography>Germany</Typography>
      </Stack>
    </Stack>
  ),
};
