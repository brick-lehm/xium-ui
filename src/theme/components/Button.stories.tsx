import type { Meta, StoryObj } from '@storybook/react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const meta: Meta<typeof Button> = {
  title: 'Theme/Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'outlined', 'contained', 'soft'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'info', 'success', 'warning', 'error'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'contained',
    color: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'contained',
    color: 'secondary',
    children: 'Secondary Button',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    color: 'primary',
    children: 'Outlined Button',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    color: 'primary',
    children: 'Text Button',
  },
};

export const AllVariants: Story = {
  render: () => (
    <Stack spacing={2} direction="column" alignItems="center">
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Contained
        </Button>
        <Button variant="outlined" color="primary">
          Outlined
        </Button>
        <Button variant="text" color="primary">
          Text
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="secondary">
          Contained
        </Button>
        <Button variant="outlined" color="secondary">
          Outlined
        </Button>
        <Button variant="text" color="secondary">
          Text
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
      </Stack>
    </Stack>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <Stack spacing={2} direction="row" alignItems="center">
      <Button variant="contained" size="small">
        Small
      </Button>
      <Button variant="contained" size="medium">
        Medium
      </Button>
      <Button variant="contained" size="large">
        Large
      </Button>
    </Stack>
  ),
};
