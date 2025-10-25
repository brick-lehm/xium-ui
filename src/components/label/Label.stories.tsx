import type { Meta, StoryObj } from '@storybook/react';
import Stack from '@mui/material/Stack';
import { Label } from './label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'soft', 'inverted'],
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'info', 'success', 'warning', 'error'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Filled: Story = {
  args: {
    variant: 'filled',
    color: 'primary',
    children: 'Primary Label',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    color: 'info',
    children: 'Info Label',
  },
};

export const Soft: Story = {
  args: {
    variant: 'soft',
    color: 'success',
    children: 'Success Label',
  },
};

export const Inverted: Story = {
  args: {
    variant: 'inverted',
    color: 'error',
    children: 'Error Label',
  },
};

export const AllColors: Story = {
  render: () => (
    <Stack spacing={2}>
      <Stack direction="row" spacing={1}>
        <Label color="default">Default</Label>
        <Label color="primary">Primary</Label>
        <Label color="secondary">Secondary</Label>
        <Label color="info">Info</Label>
        <Label color="success">Success</Label>
        <Label color="warning">Warning</Label>
        <Label color="error">Error</Label>
      </Stack>
      <Stack direction="row" spacing={1}>
        <Label variant="outlined" color="default">Default</Label>
        <Label variant="outlined" color="primary">Primary</Label>
        <Label variant="outlined" color="secondary">Secondary</Label>
        <Label variant="outlined" color="info">Info</Label>
        <Label variant="outlined" color="success">Success</Label>
        <Label variant="outlined" color="warning">Warning</Label>
        <Label variant="outlined" color="error">Error</Label>
      </Stack>
    </Stack>
  ),
};
