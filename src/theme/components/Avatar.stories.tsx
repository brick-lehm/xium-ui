import type { Meta, StoryObj } from '@storybook/react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Stack from '@mui/material/Stack';
import FolderIcon from '@mui/icons-material/Folder';
import AssignmentIcon from '@mui/icons-material/Assignment';

const meta: Meta<typeof Avatar> = {
  title: 'Theme/Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: () => <Avatar>H</Avatar>,
};

export const WithLetters: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Avatar>H</Avatar>
      <Avatar>N</Avatar>
      <Avatar>OP</Avatar>
    </Stack>
  ),
};

export const WithImages: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
    </Stack>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <Avatar sx={{ width: 24, height: 24, fontSize: 12 }}>XS</Avatar>
      <Avatar sx={{ width: 32, height: 32, fontSize: 14 }}>S</Avatar>
      <Avatar>M</Avatar>
      <Avatar sx={{ width: 56, height: 56 }}>L</Avatar>
      <Avatar sx={{ width: 64, height: 64 }}>XL</Avatar>
    </Stack>
  ),
};

export const AllColors: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <Avatar sx={{ bgcolor: 'primary.main' }}>P</Avatar>
      <Avatar sx={{ bgcolor: 'secondary.main' }}>S</Avatar>
      <Avatar sx={{ bgcolor: 'success.main' }}>Su</Avatar>
      <Avatar sx={{ bgcolor: 'error.main' }}>E</Avatar>
      <Avatar sx={{ bgcolor: 'warning.main' }}>W</Avatar>
      <Avatar sx={{ bgcolor: 'info.main' }}>I</Avatar>
    </Stack>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Avatar>
        <FolderIcon />
      </Avatar>
      <Avatar sx={{ bgcolor: 'primary.main' }}>
        <AssignmentIcon />
      </Avatar>
      <Avatar sx={{ bgcolor: 'secondary.main' }}>
        <FolderIcon />
      </Avatar>
    </Stack>
  ),
};

export const Variants: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Avatar variant="circular">C</Avatar>
      <Avatar variant="rounded">R</Avatar>
      <Avatar variant="square">S</Avatar>
    </Stack>
  ),
};

export const VariantsWithColors: Story = {
  render: () => (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2}>
        <Avatar variant="circular" sx={{ bgcolor: 'primary.main' }}>C</Avatar>
        <Avatar variant="rounded" sx={{ bgcolor: 'primary.main' }}>R</Avatar>
        <Avatar variant="square" sx={{ bgcolor: 'primary.main' }}>S</Avatar>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Avatar variant="circular" sx={{ bgcolor: 'secondary.main' }}>C</Avatar>
        <Avatar variant="rounded" sx={{ bgcolor: 'secondary.main' }}>R</Avatar>
        <Avatar variant="square" sx={{ bgcolor: 'secondary.main' }}>S</Avatar>
      </Stack>
    </Stack>
  ),
};

export const AvatarGroupStory: Story = {
  render: () => (
    <AvatarGroup max={4}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
      <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
    </AvatarGroup>
  ),
};

export const AvatarGroupWithLetters: Story = {
  render: () => (
    <Stack spacing={2}>
      <AvatarGroup max={4}>
        <Avatar>H</Avatar>
        <Avatar>N</Avatar>
        <Avatar>O</Avatar>
        <Avatar>P</Avatar>
        <Avatar>Q</Avatar>
      </AvatarGroup>
      <AvatarGroup max={3}>
        <Avatar sx={{ bgcolor: 'primary.main' }}>A</Avatar>
        <Avatar sx={{ bgcolor: 'secondary.main' }}>B</Avatar>
        <Avatar sx={{ bgcolor: 'success.main' }}>C</Avatar>
        <Avatar sx={{ bgcolor: 'error.main' }}>D</Avatar>
        <Avatar sx={{ bgcolor: 'warning.main' }}>E</Avatar>
      </AvatarGroup>
    </Stack>
  ),
};

export const Fallback: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="/broken-image.jpg" />
      <Avatar alt="Remy Sharp" src="/broken-image.jpg">RS</Avatar>
      <Avatar src="/broken-image.jpg" />
    </Stack>
  ),
};
