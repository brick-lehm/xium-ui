import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const meta: Meta<typeof Autocomplete> = {
  title: 'Theme/Components/Autocomplete',
  component: Autocomplete,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Autocomplete>;

const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
const movies = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Dark Knight', year: 2008 },
  { label: 'Pulp Fiction', year: 1994 },
  { label: 'Forrest Gump', year: 1994 },
];

export const Default: Story = {
  render: () => (
    <Autocomplete
      sx={{ width: 300 }}
      options={options}
      renderInput={(params) => <TextField {...params} label="Default" />}
    />
  ),
};

export const WithValue: Story = {
  render: () => {
    const [value, setValue] = useState<string | null>(options[0]);
    return (
      <Autocomplete
        sx={{ width: 300 }}
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        options={options}
        renderInput={(params) => <TextField {...params} label="Controlled" />}
      />
    );
  },
};

export const Multiple: Story = {
  render: () => (
    <Autocomplete
      sx={{ width: 300 }}
      multiple
      options={options}
      defaultValue={[options[0]]}
      renderInput={(params) => <TextField {...params} label="Multiple" />}
    />
  ),
};

export const AllSizes: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: 300 }}>
      <Autocomplete
        size="small"
        options={options}
        renderInput={(params) => <TextField {...params} label="Small" />}
      />
      <Autocomplete
        size="medium"
        options={options}
        renderInput={(params) => <TextField {...params} label="Medium" />}
      />
    </Stack>
  ),
};

export const FreeSolo: Story = {
  render: () => (
    <Autocomplete
      sx={{ width: 300 }}
      freeSolo
      options={options}
      renderInput={(params) => <TextField {...params} label="Free Solo" />}
    />
  ),
};

export const WithGrouping: Story = {
  render: () => (
    <Autocomplete
      sx={{ width: 300 }}
      options={movies}
      groupBy={(option) => option.year.toString()}
      getOptionLabel={(option) => option.label}
      renderInput={(params) => <TextField {...params} label="Grouped" />}
    />
  ),
};

export const States: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: 300 }}>
      <Autocomplete
        options={options}
        renderInput={(params) => <TextField {...params} label="Normal" />}
      />
      <Autocomplete
        disabled
        options={options}
        renderInput={(params) => <TextField {...params} label="Disabled" />}
      />
      <Autocomplete
        options={options}
        renderInput={(params) => <TextField {...params} label="Required" required />}
      />
      <Autocomplete
        options={options}
        renderInput={(params) => <TextField {...params} label="Error" error />}
      />
    </Stack>
  ),
};

export const AllColors: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: 300 }}>
      <Autocomplete
        options={options}
        renderInput={(params) => <TextField {...params} label="Primary" color="primary" />}
      />
      <Autocomplete
        options={options}
        renderInput={(params) => <TextField {...params} label="Secondary" color="secondary" />}
      />
      <Autocomplete
        options={options}
        renderInput={(params) => <TextField {...params} label="Success" color="success" />}
      />
      <Autocomplete
        options={options}
        renderInput={(params) => <TextField {...params} label="Error" color="error" />}
      />
      <Autocomplete
        options={options}
        renderInput={(params) => <TextField {...params} label="Warning" color="warning" />}
      />
      <Autocomplete
        options={options}
        renderInput={(params) => <TextField {...params} label="Info" color="info" />}
      />
    </Stack>
  ),
};
