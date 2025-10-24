import type { Meta, StoryObj } from '@storybook/react';
import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';

const meta: Meta<typeof Fab> = {
  title: 'Theme/Components/Fab',
  component: Fab,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Fab>;

export const Default: Story = {
  render: () => (
    <Fab color="primary">
      <AddIcon />
    </Fab>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <Fab size="small" color="primary">
        <AddIcon />
      </Fab>
      <Fab size="medium" color="primary">
        <AddIcon />
      </Fab>
      <Fab size="large" color="primary">
        <AddIcon />
      </Fab>
    </Stack>
  ),
};

export const AllColors: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Fab color="primary">
        <AddIcon />
      </Fab>
      <Fab color="secondary">
        <EditIcon />
      </Fab>
      <Fab color="success">
        <FavoriteIcon />
      </Fab>
      <Fab color="error">
        <NavigationIcon />
      </Fab>
      <Fab color="warning">
        <AddIcon />
      </Fab>
      <Fab color="info">
        <AddIcon />
      </Fab>
    </Stack>
  ),
};

export const Variants: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Fab color="primary" variant="circular">
        <AddIcon />
      </Fab>
      <Fab color="primary" variant="extended">
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </Fab>
    </Stack>
  ),
};

export const Extended: Story = {
  render: () => (
    <Stack spacing={2}>
      <Fab variant="extended" color="primary">
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </Fab>
      <Fab variant="extended" color="secondary">
        <EditIcon sx={{ mr: 1 }} />
        Edit
      </Fab>
      <Fab variant="extended" color="success">
        <FavoriteIcon sx={{ mr: 1 }} />
        Like
      </Fab>
    </Stack>
  ),
};

export const States: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Fab color="primary">
        <AddIcon />
      </Fab>
      <Fab color="primary" disabled>
        <AddIcon />
      </Fab>
      <Fab variant="extended" color="primary">
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </Fab>
      <Fab variant="extended" color="primary" disabled>
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </Fab>
    </Stack>
  ),
};
