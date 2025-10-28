import type { Meta, StoryObj } from '@storybook/react';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import FaceIcon from '@mui/icons-material/Face';
import DoneIcon from '@mui/icons-material/Done';

const meta: Meta<typeof Chip> = {
  title: 'Theme/Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    label: 'Default Chip',
  },
};

export const AllVariants: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <Chip label="Filled" variant="filled" />
      <Chip label="Outlined" variant="outlined" />
    </Stack>
  ),
};

export const AllColors: Story = {
  render: () => (
    <Stack spacing={2}>
      <Stack direction="row" spacing={1}>
        <Chip label="Primary" color="primary" />
        <Chip label="Secondary" color="secondary" />
        <Chip label="Success" color="success" />
      </Stack>
      <Stack direction="row" spacing={1}>
        <Chip label="Error" color="error" />
        <Chip label="Warning" color="warning" />
        <Chip label="Info" color="info" />
        <Chip label="Default" color="default" />
      </Stack>
    </Stack>
  ),
};

export const OutlinedColors: Story = {
  render: () => (
    <Stack spacing={2}>
      <Stack direction="row" spacing={1}>
        <Chip label="Primary" variant="outlined" color="primary" />
        <Chip label="Secondary" variant="outlined" color="secondary" />
        <Chip label="Success" variant="outlined" color="success" />
      </Stack>
      <Stack direction="row" spacing={1}>
        <Chip label="Error" variant="outlined" color="error" />
        <Chip label="Warning" variant="outlined" color="warning" />
        <Chip label="Info" variant="outlined" color="info" />
        <Chip label="Default" variant="outlined" color="default" />
      </Stack>
    </Stack>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <Stack direction="row" spacing={1} alignItems="center">
      <Chip label="Small" size="small" />
      <Chip label="Medium" size="medium" />
    </Stack>
  ),
};

export const Clickable: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <Chip label="Clickable" onClick={() => alert('You clicked the chip!')} />
      <Chip
        label="Clickable"
        variant="outlined"
        onClick={() => alert('You clicked the chip!')}
      />
      <Chip
        label="Clickable"
        color="primary"
        onClick={() => alert('You clicked the chip!')}
      />
    </Stack>
  ),
};

export const Deletable: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <Chip label="Deletable" onDelete={() => alert('You clicked delete!')} />
      <Chip
        label="Deletable"
        variant="outlined"
        onDelete={() => alert('You clicked delete!')}
      />
      <Chip
        label="Deletable"
        color="primary"
        onDelete={() => alert('You clicked delete!')}
      />
    </Stack>
  ),
};

export const WithAvatar: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <Chip avatar={<Avatar>M</Avatar>} label="Avatar Chip" />
      <Chip avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />} label="Avatar Chip" />
      <Chip
        avatar={<Avatar><FaceIcon /></Avatar>}
        label="Icon Avatar"
        variant="outlined"
      />
    </Stack>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <Chip icon={<FaceIcon />} label="With Icon" />
      <Chip icon={<FaceIcon />} label="With Icon" variant="outlined" color="primary" />
      <Chip
        icon={<FaceIcon />}
        label="Clickable"
        onClick={() => alert('Clicked!')}
        onDelete={() => alert('Deleted!')}
        deleteIcon={<DoneIcon />}
      />
    </Stack>
  ),
};

export const States: Story = {
  render: () => (
    <Stack spacing={2}>
      <Stack direction="row" spacing={1}>
        <Chip label="Normal" />
        <Chip label="Disabled" disabled />
      </Stack>
      <Stack direction="row" spacing={1}>
        <Chip label="Clickable" onClick={() => {}} />
        <Chip label="Clickable Disabled" onClick={() => {}} disabled />
      </Stack>
      <Stack direction="row" spacing={1}>
        <Chip label="Deletable" onDelete={() => {}} />
        <Chip label="Deletable Disabled" onDelete={() => {}} disabled />
      </Stack>
    </Stack>
  ),
};
