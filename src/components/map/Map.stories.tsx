import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import { Map } from './map';

const meta: Meta<typeof Map> = {
  title: 'Components/Map',
  component: Map,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Map>;

export const Default: Story = {
  render: () => (
    <Box sx={{ height: '500px', width: '100%' }}>
      <Map
        initialViewState={{
          latitude: 37.7749,
          longitude: -122.4194,
          zoom: 11,
        }}
      />
    </Box>
  ),
};

export const Tokyo: Story = {
  render: () => (
    <Box sx={{ height: '500px', width: '100%' }}>
      <Map
        initialViewState={{
          latitude: 35.6762,
          longitude: 139.6503,
          zoom: 11,
        }}
      />
    </Box>
  ),
};

export const NewYork: Story = {
  render: () => (
    <Box sx={{ height: '500px', width: '100%' }}>
      <Map
        initialViewState={{
          latitude: 40.7128,
          longitude: -74.0060,
          zoom: 11,
        }}
      />
    </Box>
  ),
};
