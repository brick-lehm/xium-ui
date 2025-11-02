import type { Meta, StoryObj } from '@storybook/react';

import Stack from '@mui/material/Stack';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';

const meta: Meta<typeof IconButton> = {
  title: 'Components/Form/Button/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  render: () => (
    <IconButton>
      <FavoriteIcon />
    </IconButton>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <IconButton size="small">
        <FavoriteIcon fontSize="small" />
      </IconButton>
      <IconButton size="medium">
        <FavoriteIcon fontSize="medium" />
      </IconButton>
      <IconButton size="large">
        <FavoriteIcon fontSize="large" />
      </IconButton>
    </Stack>
  ),
};

export const AllColors: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <IconButton color="primary">
        <FavoriteIcon />
      </IconButton>
      <IconButton color="secondary">
        <FavoriteIcon />
      </IconButton>
      <IconButton color="success">
        <FavoriteIcon />
      </IconButton>
      <IconButton color="error">
        <DeleteIcon />
      </IconButton>
      <IconButton color="warning">
        <EditIcon />
      </IconButton>
      <IconButton color="info">
        <ShareIcon />
      </IconButton>
      <IconButton color="default">
        <FavoriteIcon />
      </IconButton>
    </Stack>
  ),
};

export const States: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <IconButton>
        <FavoriteIcon />
      </IconButton>
      <IconButton disabled>
        <FavoriteIcon />
      </IconButton>
      <IconButton color="primary">
        <FavoriteIcon />
      </IconButton>
      <IconButton color="primary" disabled>
        <FavoriteIcon />
      </IconButton>
    </Stack>
  ),
};

export const WithVariants: Story = {
  render: () => (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2}>
        <IconButton color="primary">
          <FavoriteIcon />
        </IconButton>
        <IconButton color="primary" sx={{ bgcolor: 'primary.main', color: 'white', '&:hover': { bgcolor: 'primary.dark' } }}>
          <FavoriteIcon />
        </IconButton>
      </Stack>
      <Stack direction="row" spacing={2}>
        <IconButton color="secondary">
          <FavoriteIcon />
        </IconButton>
        <IconButton color="secondary" sx={{ bgcolor: 'secondary.main', color: 'white', '&:hover': { bgcolor: 'secondary.dark' } }}>
          <FavoriteIcon />
        </IconButton>
      </Stack>
      <Stack direction="row" spacing={2}>
        <IconButton color="error">
          <DeleteIcon />
        </IconButton>
        <IconButton color="error" sx={{ bgcolor: 'error.main', color: 'white', '&:hover': { bgcolor: 'error.dark' } }}>
          <DeleteIcon />
        </IconButton>
      </Stack>
    </Stack>
  ),
};
