import type { Meta, StoryObj } from '@storybook/react';

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

const meta: Meta<typeof TextField> = {
  title: 'Components/Form/Field/TextField/Base',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    label: 'Default TextField',
    placeholder: 'Enter text...',
  },
};

export const AllVariants: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: 400 }}>
      <TextField label="Outlined (default)" variant="outlined" />
      <TextField label="Filled" variant="filled" />
      <TextField label="Standard" variant="standard" />
    </Stack>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: 400 }}>
      <TextField label="Small" size="small" />
      <TextField label="Medium (default)" size="medium" />
    </Stack>
  ),
};

export const WithHelperText: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: 400 }}>
      <TextField label="With helper text" helperText="This is helper text" />
      <TextField
        label="Error"
        error
        helperText="This field has an error"
      />
    </Stack>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: 400 }}>
      <TextField
        label="Start Adornment"
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />
      <TextField
        label="End Adornment"
        InputProps={{
          endAdornment: <InputAdornment position="end">kg</InputAdornment>,
        }}
      />
    </Stack>
  ),
};

export const States: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: 400 }}>
      <TextField label="Normal" />
      <TextField label="Disabled" disabled />
      <TextField label="Required" required />
      <TextField label="Error" error />
      <TextField label="Read Only" InputProps={{ readOnly: true }} defaultValue="Read only value" />
    </Stack>
  ),
};

export const Types: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: 400 }}>
      <TextField label="Text" type="text" />
      <TextField label="Password" type="password" />
      <TextField label="Email" type="email" />
      <TextField label="Number" type="number" />
      <TextField label="Date" type="date" InputLabelProps={{ shrink: true }} />
    </Stack>
  ),
};

export const Multiline: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: 400 }}>
      <TextField label="Multiline" multiline rows={4} />
      <TextField
        label="Max Rows"
        multiline
        maxRows={4}
        defaultValue="This will expand up to 4 rows"
      />
    </Stack>
  ),
};

export const AllColors: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: 400 }}>
      <TextField label="Primary" color="primary" focused />
      <TextField label="Secondary" color="secondary" focused />
      <TextField label="Error" color="error" focused />
      <TextField label="Warning" color="warning" focused />
      <TextField label="Info" color="info" focused />
      <TextField label="Success" color="success" focused />
    </Stack>
  ),
};
