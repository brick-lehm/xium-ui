import type { Meta, StoryObj } from '@storybook/react';

import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const meta: Meta<typeof Badge> = {
  title: 'Display/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  render: () => (
    <Badge badgeContent={4} color="primary">
      <MailIcon />
    </Badge>
  ),
};

export const AllColors: Story = {
  render: () => (
    <Stack direction="row" spacing={3}>
      <Badge badgeContent={4} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={4} color="secondary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={4} color="success">
        <MailIcon />
      </Badge>
      <Badge badgeContent={4} color="error">
        <MailIcon />
      </Badge>
      <Badge badgeContent={4} color="warning">
        <MailIcon />
      </Badge>
      <Badge badgeContent={4} color="info">
        <MailIcon />
      </Badge>
    </Stack>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <Stack direction="row" spacing={3}>
      <Badge badgeContent={4} variant="standard" color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={4} variant="dot" color="primary">
        <MailIcon />
      </Badge>
    </Stack>
  ),
};

export const MaxValue: Story = {
  render: () => (
    <Stack direction="row" spacing={3}>
      <Badge badgeContent={99} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={100} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={1000} max={999} color="primary">
        <MailIcon />
      </Badge>
    </Stack>
  ),
};

export const DotVariant: Story = {
  render: () => (
    <Stack direction="row" spacing={3}>
      <Badge variant="dot" color="primary">
        <MailIcon />
      </Badge>
      <Badge variant="dot" color="secondary">
        <MailIcon />
      </Badge>
      <Badge variant="dot" color="success">
        <MailIcon />
      </Badge>
      <Badge variant="dot" color="error">
        <MailIcon />
      </Badge>
      <Badge variant="dot" color="warning">
        <MailIcon />
      </Badge>
      <Badge variant="dot" color="info">
        <MailIcon />
      </Badge>
    </Stack>
  ),
};

export const BadgeAlignment: Story = {
  render: () => (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Badge badgeContent={4} color="primary">
          <MailIcon />
        </Badge>
        <Badge badgeContent={4} color="primary" anchorOrigin={{ vertical: 'top', horizontal: 'left' }}>
          <MailIcon />
        </Badge>
      </Stack>
      <Stack direction="row" spacing={3}>
        <Badge badgeContent={4} color="primary" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
          <MailIcon />
        </Badge>
        <Badge badgeContent={4} color="primary" anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
          <MailIcon />
        </Badge>
      </Stack>
    </Stack>
  ),
};

export const Overlap: Story = {
  render: () => (
    <Stack direction="row" spacing={3}>
      <Badge badgeContent={4} color="primary" overlap="rectangular">
        <div style={{ width: 40, height: 40, backgroundColor: '#eee' }} />
      </Badge>
      <Badge badgeContent={4} color="primary" overlap="circular">
        <div style={{ width: 40, height: 40, backgroundColor: '#eee', borderRadius: '50%' }} />
      </Badge>
    </Stack>
  ),
};

export const Visibility: Story = {
  render: () => (
    <Stack direction="row" spacing={3}>
      <Badge badgeContent={0} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={0} showZero color="primary">
        <MailIcon />
      </Badge>
      <Badge variant="dot" invisible={false} color="primary">
        <MailIcon />
      </Badge>
      <Badge variant="dot" invisible color="primary">
        <MailIcon />
      </Badge>
    </Stack>
  ),
};

export const WithShoppingCart: Story = {
  render: () => (
    <Stack direction="row" spacing={3}>
      <Badge badgeContent={1} color="primary">
        <ShoppingCartIcon />
      </Badge>
      <Badge badgeContent={5} color="secondary">
        <ShoppingCartIcon />
      </Badge>
      <Badge badgeContent={99} color="error">
        <ShoppingCartIcon />
      </Badge>
      <Badge badgeContent={100} color="success">
        <ShoppingCartIcon />
      </Badge>
    </Stack>
  ),
};
