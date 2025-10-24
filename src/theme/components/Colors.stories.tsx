import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const meta: Meta = {
  title: 'Theme/Foundation/Colors',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

const ColorBox = ({ color, label }: { color: string; label: string }) => (
  <Stack spacing={1} alignItems="center">
    <Paper
      elevation={2}
      sx={{
        width: 120,
        height: 120,
        bgcolor: color,
        borderRadius: 2,
      }}
    />
    <Typography variant="caption" align="center">
      {label}
    </Typography>
  </Stack>
);

export const PrimaryColors: Story = {
  render: () => (
    <Stack spacing={3}>
      <Typography variant="h5">Primary Colors</Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <ColorBox color="primary.lighter" label="primary.lighter" />
        <ColorBox color="primary.light" label="primary.light" />
        <ColorBox color="primary.main" label="primary.main" />
        <ColorBox color="primary.dark" label="primary.dark" />
        <ColorBox color="primary.darker" label="primary.darker" />
      </Stack>
    </Stack>
  ),
};

export const SecondaryColors: Story = {
  render: () => (
    <Stack spacing={3}>
      <Typography variant="h5">Secondary Colors</Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <ColorBox color="secondary.lighter" label="secondary.lighter" />
        <ColorBox color="secondary.light" label="secondary.light" />
        <ColorBox color="secondary.main" label="secondary.main" />
        <ColorBox color="secondary.dark" label="secondary.dark" />
        <ColorBox color="secondary.darker" label="secondary.darker" />
      </Stack>
    </Stack>
  ),
};

export const InfoColors: Story = {
  render: () => (
    <Stack spacing={3}>
      <Typography variant="h5">Info Colors</Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <ColorBox color="info.lighter" label="info.lighter" />
        <ColorBox color="info.light" label="info.light" />
        <ColorBox color="info.main" label="info.main" />
        <ColorBox color="info.dark" label="info.dark" />
        <ColorBox color="info.darker" label="info.darker" />
      </Stack>
    </Stack>
  ),
};

export const SuccessColors: Story = {
  render: () => (
    <Stack spacing={3}>
      <Typography variant="h5">Success Colors</Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <ColorBox color="success.lighter" label="success.lighter" />
        <ColorBox color="success.light" label="success.light" />
        <ColorBox color="success.main" label="success.main" />
        <ColorBox color="success.dark" label="success.dark" />
        <ColorBox color="success.darker" label="success.darker" />
      </Stack>
    </Stack>
  ),
};

export const WarningColors: Story = {
  render: () => (
    <Stack spacing={3}>
      <Typography variant="h5">Warning Colors</Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <ColorBox color="warning.lighter" label="warning.lighter" />
        <ColorBox color="warning.light" label="warning.light" />
        <ColorBox color="warning.main" label="warning.main" />
        <ColorBox color="warning.dark" label="warning.dark" />
        <ColorBox color="warning.darker" label="warning.darker" />
      </Stack>
    </Stack>
  ),
};

export const ErrorColors: Story = {
  render: () => (
    <Stack spacing={3}>
      <Typography variant="h5">Error Colors</Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <ColorBox color="error.lighter" label="error.lighter" />
        <ColorBox color="error.light" label="error.light" />
        <ColorBox color="error.main" label="error.main" />
        <ColorBox color="error.dark" label="error.dark" />
        <ColorBox color="error.darker" label="error.darker" />
      </Stack>
    </Stack>
  ),
};

export const GreyColors: Story = {
  render: () => (
    <Stack spacing={3}>
      <Typography variant="h5">Grey Colors</Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <ColorBox color="grey.100" label="grey.100" />
        <ColorBox color="grey.200" label="grey.200" />
        <ColorBox color="grey.300" label="grey.300" />
        <ColorBox color="grey.400" label="grey.400" />
        <ColorBox color="grey.500" label="grey.500" />
        <ColorBox color="grey.600" label="grey.600" />
        <ColorBox color="grey.700" label="grey.700" />
        <ColorBox color="grey.800" label="grey.800" />
        <ColorBox color="grey.900" label="grey.900" />
      </Stack>
    </Stack>
  ),
};

export const AllColors: Story = {
  render: () => (
    <Stack spacing={4}>
      <Stack spacing={3}>
        <Typography variant="h5">Primary</Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap">
          <ColorBox color="primary.lighter" label="lighter" />
          <ColorBox color="primary.light" label="light" />
          <ColorBox color="primary.main" label="main" />
          <ColorBox color="primary.dark" label="dark" />
          <ColorBox color="primary.darker" label="darker" />
        </Stack>
      </Stack>

      <Stack spacing={3}>
        <Typography variant="h5">Secondary</Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap">
          <ColorBox color="secondary.lighter" label="lighter" />
          <ColorBox color="secondary.light" label="light" />
          <ColorBox color="secondary.main" label="main" />
          <ColorBox color="secondary.dark" label="dark" />
          <ColorBox color="secondary.darker" label="darker" />
        </Stack>
      </Stack>

      <Stack spacing={3}>
        <Typography variant="h5">Info</Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap">
          <ColorBox color="info.lighter" label="lighter" />
          <ColorBox color="info.light" label="light" />
          <ColorBox color="info.main" label="main" />
          <ColorBox color="info.dark" label="dark" />
          <ColorBox color="info.darker" label="darker" />
        </Stack>
      </Stack>

      <Stack spacing={3}>
        <Typography variant="h5">Success</Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap">
          <ColorBox color="success.lighter" label="lighter" />
          <ColorBox color="success.light" label="light" />
          <ColorBox color="success.main" label="main" />
          <ColorBox color="success.dark" label="dark" />
          <ColorBox color="success.darker" label="darker" />
        </Stack>
      </Stack>

      <Stack spacing={3}>
        <Typography variant="h5">Warning</Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap">
          <ColorBox color="warning.lighter" label="lighter" />
          <ColorBox color="warning.light" label="light" />
          <ColorBox color="warning.main" label="main" />
          <ColorBox color="warning.dark" label="dark" />
          <ColorBox color="warning.darker" label="darker" />
        </Stack>
      </Stack>

      <Stack spacing={3}>
        <Typography variant="h5">Error</Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap">
          <ColorBox color="error.lighter" label="lighter" />
          <ColorBox color="error.light" label="light" />
          <ColorBox color="error.main" label="main" />
          <ColorBox color="error.dark" label="dark" />
          <ColorBox color="error.darker" label="darker" />
        </Stack>
      </Stack>
    </Stack>
  ),
};
