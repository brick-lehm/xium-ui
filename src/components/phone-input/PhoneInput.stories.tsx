import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { PhoneInput } from './phone-input';

const meta: Meta<typeof PhoneInput> = {
  title: 'Components/PhoneInput',
  component: PhoneInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PhoneInput>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <Box sx={{ width: 300 }}>
        <PhoneInput value={value} onChange={setValue} label="Phone Number" />
      </Box>
    );
  },
};

export const WithDefaultValue: Story = {
  render: () => {
    const [value, setValue] = useState('+1234567890');

    return (
      <Box sx={{ width: 300 }}>
        <PhoneInput value={value} onChange={setValue} label="Phone Number" />
      </Box>
    );
  },
};

export const Required: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <Box sx={{ width: 300 }}>
        <PhoneInput
          value={value}
          onChange={setValue}
          label="Phone Number"
          helperText="Please enter your phone number"
        />
      </Box>
    );
  },
};
