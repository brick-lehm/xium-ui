import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import Radio from '@mui/material/Radio';
import Stack from '@mui/material/Stack';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';

const meta: Meta<typeof Radio> = {
  title: 'Theme/Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  render: () => <Radio defaultChecked />,
};

export const BasicRadioGroup: Story = {
  render: () => {
    const [value, setValue] = useState('option1');
    return (
      <FormControl>
        <FormLabel>Basic Radio Group</FormLabel>
        <RadioGroup value={value} onChange={(e) => setValue(e.target.value)}>
          <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
          <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
          <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
          <FormControlLabel value="option4" control={<Radio />} label="Option 4" />
        </RadioGroup>
      </FormControl>
    );
  },
};

export const AllSizes: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <Radio size="small" defaultChecked />
      <Radio size="medium" defaultChecked />
      <Radio sx={{ fontSize: 40 }} defaultChecked />
    </Stack>
  ),
};

export const AllColors: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <Radio defaultChecked color="primary" />
      <Radio defaultChecked color="secondary" />
      <Radio defaultChecked color="success" />
      <Radio defaultChecked color="error" />
      <Radio defaultChecked color="warning" />
      <Radio defaultChecked color="info" />
      <Radio defaultChecked color="default" />
    </Stack>
  ),
};

export const States: Story = {
  render: () => (
    <Stack spacing={1}>
      <FormControlLabel control={<Radio />} label="Unchecked" />
      <FormControlLabel control={<Radio checked />} label="Checked" />
      <FormControlLabel control={<Radio disabled />} label="Disabled" />
      <FormControlLabel control={<Radio disabled checked />} label="Disabled Checked" />
    </Stack>
  ),
};

export const RowDirection: Story = {
  render: () => {
    const [value, setValue] = useState('row1');
    return (
      <FormControl>
        <FormLabel>Row Direction</FormLabel>
        <RadioGroup row value={value} onChange={(e) => setValue(e.target.value)}>
          <FormControlLabel value="row1" control={<Radio />} label="Option 1" />
          <FormControlLabel value="row2" control={<Radio />} label="Option 2" />
          <FormControlLabel value="row3" control={<Radio />} label="Option 3" />
        </RadioGroup>
      </FormControl>
    );
  },
};
