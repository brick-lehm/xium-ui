import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

const meta: Meta<typeof Select> = {
  title: 'Components/Form/Select/Base',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('10');
    return (
      <FormControl sx={{ width: 300 }}>
        <InputLabel>Age</InputLabel>
        <Select value={value} label="Age" onChange={(e) => setValue(e.target.value)}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    );
  },
};

export const AllVariants: Story = {
  render: () => {
    const [value, setValue] = useState('option1');
    return (
      <Stack spacing={3} sx={{ width: 300 }}>
        <FormControl variant="outlined">
          <InputLabel>Outlined</InputLabel>
          <Select value={value} label="Outlined" onChange={(e) => setValue(e.target.value)}>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="filled">
          <InputLabel>Filled</InputLabel>
          <Select value={value} onChange={(e) => setValue(e.target.value)}>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="standard">
          <InputLabel>Standard</InputLabel>
          <Select value={value} onChange={(e) => setValue(e.target.value)}>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    );
  },
};

export const AllSizes: Story = {
  render: () => {
    const [value, setValue] = useState('small');
    return (
      <Stack spacing={3} sx={{ width: 300 }}>
        <FormControl size="small">
          <InputLabel>Small</InputLabel>
          <Select value={value} label="Small" onChange={(e) => setValue(e.target.value)}>
            <MenuItem value="small">Small</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel>Medium</InputLabel>
          <Select value={value} label="Medium" onChange={(e) => setValue(e.target.value)}>
            <MenuItem value="small">Small</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    );
  },
};

export const WithHelperText: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Stack spacing={3} sx={{ width: 300 }}>
        <FormControl>
          <InputLabel>With Helper Text</InputLabel>
          <Select value={value} label="With Helper Text" onChange={(e) => setValue(e.target.value)}>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
          </Select>
          <FormHelperText>Choose an option</FormHelperText>
        </FormControl>

        <FormControl error>
          <InputLabel>Error</InputLabel>
          <Select value={value} label="Error" onChange={(e) => setValue(e.target.value)}>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
          </Select>
          <FormHelperText>This field has an error</FormHelperText>
        </FormControl>
      </Stack>
    );
  },
};

export const States: Story = {
  render: () => {
    const [value, setValue] = useState('option1');
    return (
      <Stack spacing={3} sx={{ width: 300 }}>
        <FormControl>
          <InputLabel>Normal</InputLabel>
          <Select value={value} label="Normal" onChange={(e) => setValue(e.target.value)}>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
          </Select>
        </FormControl>

        <FormControl disabled>
          <InputLabel>Disabled</InputLabel>
          <Select value={value} label="Disabled">
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
          </Select>
        </FormControl>

        <FormControl required>
          <InputLabel>Required</InputLabel>
          <Select value={value} label="Required" onChange={(e) => setValue(e.target.value)}>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
          </Select>
        </FormControl>

        <FormControl error>
          <InputLabel>Error</InputLabel>
          <Select value={value} label="Error" onChange={(e) => setValue(e.target.value)}>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    );
  },
};

export const Multiple: Story = {
  render: () => {
    const [values, setValues] = useState<string[]>(['option1']);
    return (
      <FormControl sx={{ width: 300 }}>
        <InputLabel>Multiple Select</InputLabel>
        <Select
          multiple
          value={values}
          label="Multiple Select"
          onChange={(e) => setValues(typeof e.target.value === 'string' ? e.target.value.split(',') : e.target.value)}
        >
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
          <MenuItem value="option4">Option 4</MenuItem>
        </Select>
      </FormControl>
    );
  },
};

export const AllColors: Story = {
  render: () => {
    const [value, setValue] = useState('option1');
    return (
      <Stack spacing={3} sx={{ width: 300 }}>
        <FormControl color="primary">
          <InputLabel>Primary</InputLabel>
          <Select value={value} label="Primary" onChange={(e) => setValue(e.target.value)}>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
          </Select>
        </FormControl>

        <FormControl color="secondary">
          <InputLabel>Secondary</InputLabel>
          <Select value={value} label="Secondary" onChange={(e) => setValue(e.target.value)}>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
          </Select>
        </FormControl>

        <FormControl color="success">
          <InputLabel>Success</InputLabel>
          <Select value={value} label="Success" onChange={(e) => setValue(e.target.value)}>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    );
  },
};
