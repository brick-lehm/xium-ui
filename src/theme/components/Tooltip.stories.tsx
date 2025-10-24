import type { Meta, StoryObj } from '@storybook/react';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const meta: Meta<typeof Tooltip> = {
  title: 'Theme/Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <Tooltip title="This is a tooltip">
      <Button>Hover me</Button>
    </Tooltip>
  ),
};

export const AllPlacements: Story = {
  render: () => (
    <Box sx={{ width: 500, height: 400, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Stack spacing={1} alignItems="center">
        <Stack direction="row" spacing={1} justifyContent="center">
          <Tooltip title="Top Start" placement="top-start">
            <Button>top-start</Button>
          </Tooltip>
          <Tooltip title="Top" placement="top">
            <Button>top</Button>
          </Tooltip>
          <Tooltip title="Top End" placement="top-end">
            <Button>top-end</Button>
          </Tooltip>
        </Stack>

        <Stack direction="row" spacing={1} justifyContent="space-between" sx={{ width: '100%' }}>
          <Stack spacing={1}>
            <Tooltip title="Left Start" placement="left-start">
              <Button>left-start</Button>
            </Tooltip>
            <Tooltip title="Left" placement="left">
              <Button>left</Button>
            </Tooltip>
            <Tooltip title="Left End" placement="left-end">
              <Button>left-end</Button>
            </Tooltip>
          </Stack>

          <Stack spacing={1}>
            <Tooltip title="Right Start" placement="right-start">
              <Button>right-start</Button>
            </Tooltip>
            <Tooltip title="Right" placement="right">
              <Button>right</Button>
            </Tooltip>
            <Tooltip title="Right End" placement="right-end">
              <Button>right-end</Button>
            </Tooltip>
          </Stack>
        </Stack>

        <Stack direction="row" spacing={1} justifyContent="center">
          <Tooltip title="Bottom Start" placement="bottom-start">
            <Button>bottom-start</Button>
          </Tooltip>
          <Tooltip title="Bottom" placement="bottom">
            <Button>bottom</Button>
          </Tooltip>
          <Tooltip title="Bottom End" placement="bottom-end">
            <Button>bottom-end</Button>
          </Tooltip>
        </Stack>
      </Stack>
    </Box>
  ),
};

export const Arrow: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Tooltip title="With arrow" arrow>
        <Button>Arrow</Button>
      </Tooltip>
      <Tooltip title="Without arrow">
        <Button>No Arrow</Button>
      </Tooltip>
    </Stack>
  ),
};

export const WithIconButton: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Tooltip title="Delete">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete" arrow>
        <IconButton color="error">
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </Stack>
  ),
};

export const LongText: Story = {
  render: () => (
    <Tooltip title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.">
      <Button>Long Tooltip</Button>
    </Tooltip>
  ),
};

export const FollowCursor: Story = {
  render: () => (
    <Tooltip title="Follows cursor" followCursor>
      <Button sx={{ width: 200 }}>Follow Cursor</Button>
    </Tooltip>
  ),
};

export const EnterDelay: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Tooltip title="No delay">
        <Button>No delay</Button>
      </Tooltip>
      <Tooltip title="500ms delay" enterDelay={500}>
        <Button>500ms</Button>
      </Tooltip>
      <Tooltip title="1000ms delay" enterDelay={1000}>
        <Button>1000ms</Button>
      </Tooltip>
    </Stack>
  ),
};

export const Interactive: Story = {
  render: () => (
    <Tooltip
      title={
        <div>
          <p>Interactive content</p>
          <Button size="small" variant="contained" color="inherit">
            Click me
          </Button>
        </div>
      }
      arrow
    >
      <Button>Hover me</Button>
    </Tooltip>
  ),
};

export const CustomColors: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Tooltip title="Default" arrow>
        <Button>Default</Button>
      </Tooltip>
      <Tooltip
        title="Custom color"
        arrow
        componentsProps={{
          tooltip: {
            sx: {
              bgcolor: 'primary.main',
              '& .MuiTooltip-arrow': {
                color: 'primary.main',
              },
            },
          },
        }}
      >
        <Button>Primary</Button>
      </Tooltip>
      <Tooltip
        title="Error color"
        arrow
        componentsProps={{
          tooltip: {
            sx: {
              bgcolor: 'error.main',
              '& .MuiTooltip-arrow': {
                color: 'error.main',
              },
            },
          },
        }}
      >
        <Button>Error</Button>
      </Tooltip>
    </Stack>
  ),
};
