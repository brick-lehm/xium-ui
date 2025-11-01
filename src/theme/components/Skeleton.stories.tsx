import type { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Skeleton from '@mui/material/Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Theme/Components/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  render: () => <Skeleton width={210} height={60} />,
};

export const AllVariants: Story = {
  render: () => (
    <Stack spacing={2}>
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={210} />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rounded" width={210} height={60} />
    </Stack>
  ),
};

export const TextVariant: Story = {
  render: () => (
    <Stack spacing={1} sx={{ width: 300 }}>
      <Skeleton variant="text" sx={{ fontSize: '3rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '0.875rem' }} />
    </Stack>
  ),
};

export const CircularVariant: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Skeleton variant="circular" width={30} height={30} />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="circular" width={50} height={50} />
      <Skeleton variant="circular" width={60} height={60} />
    </Stack>
  ),
};

export const RectangularVariant: Story = {
  render: () => (
    <Stack spacing={2}>
      <Skeleton variant="rectangular" width={210} height={40} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rectangular" width={210} height={118} />
    </Stack>
  ),
};

export const RoundedVariant: Story = {
  render: () => (
    <Stack spacing={2}>
      <Skeleton variant="rounded" width={210} height={40} />
      <Skeleton variant="rounded" width={210} height={60} />
      <Skeleton variant="rounded" width={210} height={118} />
    </Stack>
  ),
};

export const Animations: Story = {
  render: () => (
    <Stack spacing={2}>
      <Box>
        <Skeleton animation="pulse" width={210} height={60} />
        <span>Pulse</span>
      </Box>
      <Box>
        <Skeleton animation="wave" width={210} height={60} />
        <span>Wave (Default)</span>
      </Box>
      <Box>
        <Skeleton animation={false} width={210} height={60} />
        <span>No Animation</span>
      </Box>
    </Stack>
  ),
};

export const CardSkeleton: Story = {
  render: () => (
    <Box sx={{ width: 300 }}>
      <Skeleton variant="rectangular" width={300} height={118} />
      <Box sx={{ pt: 0.5 }}>
        <Skeleton />
        <Skeleton width="60%" />
      </Box>
    </Box>
  ),
};

export const MediaSkeleton: Story = {
  render: () => (
    <Stack spacing={2}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ margin: 1 }}>
          <Skeleton variant="circular" width={40} height={40} />
        </Box>
        <Box sx={{ width: '100%' }}>
          <Skeleton width="60%" />
          <Skeleton width="40%" />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ margin: 1 }}>
          <Skeleton variant="circular" width={40} height={40} />
        </Box>
        <Box sx={{ width: '100%' }}>
          <Skeleton width="60%" />
          <Skeleton width="40%" />
        </Box>
      </Box>
    </Stack>
  ),
};

export const ListSkeleton: Story = {
  render: () => (
    <Box sx={{ width: 300 }}>
      <Stack spacing={1}>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} width="60%" />
      </Stack>
    </Box>
  ),
};

export const YouTubeSkeleton: Story = {
  render: () => (
    <Box sx={{ width: 300, marginRight: 0.5, my: 5 }}>
      <Skeleton variant="rectangular" width={300} height={118} />
      <Box sx={{ pt: 0.5 }}>
        <Skeleton />
        <Skeleton width="60%" />
      </Box>
    </Box>
  ),
};

export const FacebookSkeleton: Story = {
  render: () => (
    <Box sx={{ width: 300 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Skeleton variant="circular" width={40} height={40} />
        <Box sx={{ ml: 2, flex: 1 }}>
          <Skeleton width="60%" />
          <Skeleton width="40%" />
        </Box>
      </Box>
      <Skeleton variant="rectangular" width={300} height={200} sx={{ my: 2 }} />
      <Skeleton />
      <Skeleton width="60%" />
    </Box>
  ),
};

export const WithChildren: Story = {
  render: () => (
    <Stack spacing={2}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Skeleton variant="circular">
          <Avatar />
        </Skeleton>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Skeleton variant="circular">
          <Avatar sx={{ width: 56, height: 56 }} />
        </Skeleton>
      </Box>
    </Stack>
  ),
};

export const InferredDimensions: Story = {
  render: () => (
    <Stack spacing={2}>
      <Skeleton variant="circular">
        <Avatar />
      </Skeleton>
      <Skeleton variant="circular">
        <Avatar sx={{ width: 56, height: 56 }} />
      </Skeleton>
      <Skeleton variant="rectangular">
        <div style={{ width: 210, height: 118 }}>contents</div>
      </Skeleton>
    </Stack>
  ),
};
