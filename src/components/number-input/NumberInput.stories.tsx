import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { NumberInput } from './number-input';

const meta: Meta<typeof NumberInput> = {
  title: 'Components/NumberInput',
  component: NumberInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NumberInput>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState(0);

    return (
      <Box sx={{ width: 300 }}>
        <NumberInput value={value} onChange={setValue} label="Amount" />
      </Box>
    );
  },
};

export const WithMinMax: Story = {
  render: () => {
    const [value, setValue] = useState(5);

    return (
      <Box sx={{ width: 300 }}>
        <NumberInput
          value={value}
          onChange={setValue}
          label="Quantity"
          min={1}
          max={10}
          helperText="Min: 1, Max: 10"
        />
      </Box>
    );
  },
};

export const WithStep: Story = {
  render: () => {
    const [value, setValue] = useState(0);

    return (
      <Box sx={{ width: 300 }}>
        <NumberInput
          value={value}
          onChange={setValue}
          label="Price"
          step={0.5}
          helperText="Increment by 0.5"
        />
      </Box>
    );
  },
};
