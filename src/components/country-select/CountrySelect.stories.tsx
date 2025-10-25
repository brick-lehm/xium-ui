import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { CountrySelect } from './country-select';

const meta: Meta<typeof CountrySelect> = {
  title: 'Components/CountrySelect',
  component: CountrySelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CountrySelect>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState(null);
    return (
      <Box sx={{ width: 300 }}>
        <CountrySelect
          label="Country"
          placeholder="Choose a country"
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
        />
      </Box>
    );
  },
};

export const WithDefaultValue: Story = {
  render: () => {
    const [value, setValue] = useState({ code: 'US', label: 'United States', phone: '1' });
    return (
      <Box sx={{ width: 300 }}>
        <CountrySelect
          label="Country"
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
        />
      </Box>
    );
  },
};

export const Required: Story = {
  render: () => {
    const [value, setValue] = useState(null);
    return (
      <Box sx={{ width: 300 }}>
        <CountrySelect
          label="Country"
          placeholder="Choose a country"
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
          helperText="Please select your country"
        />
      </Box>
    );
  },
};
