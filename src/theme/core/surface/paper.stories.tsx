import type { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

const meta: Meta<typeof Paper> = {
  title: 'Surface/Paper',
  component: Paper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Paper>;

export const Default: Story = {
  render: () => (
    <Paper sx={{ width: 200, height: 100, p: 2 }}>
      Default Paper
    </Paper>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <Stack spacing={2}>
      <Paper variant="elevation" sx={{ width: 200, height: 80, p: 2 }}>
        Elevation (Default)
      </Paper>
      <Paper variant="outlined" sx={{ width: 200, height: 80, p: 2 }}>
        Outlined
      </Paper>
    </Stack>
  ),
};

export const AllElevations: Story = {
  render: () => (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2}>
        <Paper elevation={0} sx={{ width: 100, height: 100, p: 2 }}>
          <Box>elevation=0</Box>
        </Paper>
        <Paper elevation={1} sx={{ width: 100, height: 100, p: 2 }}>
          <Box>elevation=1</Box>
        </Paper>
        <Paper elevation={2} sx={{ width: 100, height: 100, p: 2 }}>
          <Box>elevation=2</Box>
        </Paper>
        <Paper elevation={3} sx={{ width: 100, height: 100, p: 2 }}>
          <Box>elevation=3</Box>
        </Paper>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Paper elevation={4} sx={{ width: 100, height: 100, p: 2 }}>
          <Box>elevation=4</Box>
        </Paper>
        <Paper elevation={6} sx={{ width: 100, height: 100, p: 2 }}>
          <Box>elevation=6</Box>
        </Paper>
        <Paper elevation={8} sx={{ width: 100, height: 100, p: 2 }}>
          <Box>elevation=8</Box>
        </Paper>
        <Paper elevation={12} sx={{ width: 100, height: 100, p: 2 }}>
          <Box>elevation=12</Box>
        </Paper>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Paper elevation={16} sx={{ width: 100, height: 100, p: 2 }}>
          <Box>elevation=16</Box>
        </Paper>
        <Paper elevation={24} sx={{ width: 100, height: 100, p: 2 }}>
          <Box>elevation=24</Box>
        </Paper>
      </Stack>
    </Stack>
  ),
};

export const Square: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Paper sx={{ width: 100, height: 100, p: 2 }}>
        Rounded (Default)
      </Paper>
      <Paper square sx={{ width: 100, height: 100, p: 2 }}>
        Square
      </Paper>
    </Stack>
  ),
};

export const WithContent: Story = {
  render: () => (
    <Paper sx={{ p: 3, maxWidth: 400 }}>
      <h2>Paper Component</h2>
      <p>
        Paper is a container component that applies elevation to its children.
        It's commonly used to create surfaces in your application.
      </p>
      <p>
        The elevation prop controls the shadow depth, ranging from 0 to 24.
      </p>
    </Paper>
  ),
};

export const OutlinedWithContent: Story = {
  render: () => (
    <Paper variant="outlined" sx={{ p: 3, maxWidth: 400 }}>
      <h2>Outlined Paper</h2>
      <p>
        This paper uses the outlined variant instead of elevation.
        It has a border instead of a shadow.
      </p>
    </Paper>
  ),
};
