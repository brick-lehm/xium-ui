import type { Meta, StoryObj } from '@storybook/react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const meta: Meta<typeof Alert> = {
  title: 'Theme/Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    children: 'This is a default alert',
  },
};

export const AllSeverities: Story = {
  render: () => (
    <Stack spacing={2} sx={{ width: 400 }}>
      <Alert severity="success">This is a success alert</Alert>
      <Alert severity="info">This is an info alert</Alert>
      <Alert severity="warning">This is a warning alert</Alert>
      <Alert severity="error">This is an error alert</Alert>
    </Stack>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <Stack spacing={2} sx={{ width: 400 }}>
      <Alert variant="standard" severity="success">
        This is a standard success alert
      </Alert>
      <Alert variant="filled" severity="success">
        This is a filled success alert
      </Alert>
      <Alert variant="outlined" severity="success">
        This is an outlined success alert
      </Alert>
    </Stack>
  ),
};

export const FilledVariants: Story = {
  render: () => (
    <Stack spacing={2} sx={{ width: 400 }}>
      <Alert variant="filled" severity="success">
        This is a success alert
      </Alert>
      <Alert variant="filled" severity="info">
        This is an info alert
      </Alert>
      <Alert variant="filled" severity="warning">
        This is a warning alert
      </Alert>
      <Alert variant="filled" severity="error">
        This is an error alert
      </Alert>
    </Stack>
  ),
};

export const OutlinedVariants: Story = {
  render: () => (
    <Stack spacing={2} sx={{ width: 400 }}>
      <Alert variant="outlined" severity="success">
        This is a success alert
      </Alert>
      <Alert variant="outlined" severity="info">
        This is an info alert
      </Alert>
      <Alert variant="outlined" severity="warning">
        This is a warning alert
      </Alert>
      <Alert variant="outlined" severity="error">
        This is an error alert
      </Alert>
    </Stack>
  ),
};

export const WithTitle: Story = {
  render: () => (
    <Stack spacing={2} sx={{ width: 400 }}>
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success alert with a title
      </Alert>
      <Alert severity="info">
        <AlertTitle>Info</AlertTitle>
        This is an info alert with a title
      </Alert>
      <Alert severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This is a warning alert with a title
      </Alert>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert with a title
      </Alert>
    </Stack>
  ),
};

export const WithActions: Story = {
  render: () => (
    <Stack spacing={2} sx={{ width: 400 }}>
      <Alert
        severity="success"
        action={
          <Button color="inherit" size="small">
            UNDO
          </Button>
        }
      >
        This is a success alert with an action
      </Alert>
      <Alert
        severity="info"
        action={
          <Button color="inherit" size="small">
            UNDO
          </Button>
        }
      >
        <AlertTitle>Info</AlertTitle>
        This is an info alert with a title and action
      </Alert>
    </Stack>
  ),
};

export const Closeable: Story = {
  render: () => (
    <Stack spacing={2} sx={{ width: 400 }}>
      <Alert severity="success" onClose={() => alert('Close clicked!')}>
        This is a closeable success alert
      </Alert>
      <Alert severity="warning" onClose={() => alert('Close clicked!')}>
        <AlertTitle>Warning</AlertTitle>
        This is a closeable warning alert with a title
      </Alert>
    </Stack>
  ),
};

export const CustomIcon: Story = {
  render: () => (
    <Stack spacing={2} sx={{ width: 400 }}>
      <Alert icon={<CheckCircleOutlineIcon fontSize="inherit" />} severity="success">
        This is a success alert with a custom icon
      </Alert>
      <Alert icon={false} severity="info">
        This alert has no icon
      </Alert>
    </Stack>
  ),
};

export const ColorVariations: Story = {
  render: () => (
    <Stack spacing={2} sx={{ width: 400 }}>
      <Alert severity="success" color="success">
        Success color
      </Alert>
      <Alert severity="info" color="info">
        Info color
      </Alert>
      <Alert severity="warning" color="warning">
        Warning color
      </Alert>
      <Alert severity="error" color="error">
        Error color
      </Alert>
    </Stack>
  ),
};
