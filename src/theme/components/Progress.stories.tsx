import type { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import CircularProgress from '@mui/material/CircularProgress';

const meta: Meta = {
  title: 'Theme/Components/Progress',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const LinearDefault: Story = {
  render: () => (
    <Box sx={{ width: 300 }}>
      <LinearProgress />
    </Box>
  ),
};

export const LinearAllColors: Story = {
  render: () => (
    <Stack spacing={2} sx={{ width: 300 }}>
      <LinearProgress color="primary" />
      <LinearProgress color="secondary" />
      <LinearProgress color="success" />
      <LinearProgress color="error" />
      <LinearProgress color="warning" />
      <LinearProgress color="info" />
    </Stack>
  ),
};

export const LinearAllVariants: Story = {
  render: () => (
    <Stack spacing={2} sx={{ width: 300 }}>
      <LinearProgress variant="determinate" value={25} />
      <LinearProgress variant="determinate" value={50} />
      <LinearProgress variant="determinate" value={75} />
      <LinearProgress variant="indeterminate" />
      <LinearProgress variant="buffer" value={60} valueBuffer={80} />
      <LinearProgress variant="query" />
    </Stack>
  ),
};

export const LinearWithLabel: Story = {
  render: () => (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress variant="determinate" value={25} />
        </Box>
        <Box sx={{ minWidth: 35 }}>25%</Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress variant="determinate" value={50} color="secondary" />
        </Box>
        <Box sx={{ minWidth: 35 }}>50%</Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress variant="determinate" value={75} color="success" />
        </Box>
        <Box sx={{ minWidth: 35 }}>75%</Box>
      </Box>
    </Stack>
  ),
};

export const CircularDefault: Story = {
  render: () => <CircularProgress />,
};

export const CircularAllColors: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <CircularProgress color="primary" />
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="error" />
      <CircularProgress color="warning" />
      <CircularProgress color="info" />
    </Stack>
  ),
};

export const CircularAllVariants: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <CircularProgress variant="indeterminate" />
      <CircularProgress variant="determinate" value={25} />
      <CircularProgress variant="determinate" value={50} />
      <CircularProgress variant="determinate" value={75} />
      <CircularProgress variant="determinate" value={100} />
    </Stack>
  ),
};

export const CircularAllSizes: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <CircularProgress size={20} />
      <CircularProgress size={30} />
      <CircularProgress size={40} />
      <CircularProgress size={60} />
      <CircularProgress size={80} />
    </Stack>
  ),
};

export const CircularWithLabel: Story = {
  render: () => (
    <Stack direction="row" spacing={3}>
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant="determinate" value={25} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          25%
        </Box>
      </Box>
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant="determinate" value={50} color="secondary" />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          50%
        </Box>
      </Box>
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant="determinate" value={75} color="success" />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          75%
        </Box>
      </Box>
    </Stack>
  ),
};

export const CircularThickness: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <CircularProgress thickness={2} />
      <CircularProgress thickness={4} />
      <CircularProgress thickness={6} />
      <CircularProgress thickness={8} />
    </Stack>
  ),
};
