import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { CustomDateRangePicker } from './custom-date-range-picker';

const meta: Meta<typeof CustomDateRangePicker> = {
  title: 'Components/CustomDateRangePicker',
  component: CustomDateRangePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CustomDateRangePicker>;

export const Default: Story = {
  render: () => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    return (
      <Stack spacing={2} sx={{ width: 400 }}>
        <CustomDateRangePicker
          startDate={startDate}
          endDate={endDate}
          onChangeStartDate={setStartDate}
          onChangeEndDate={setEndDate}
        />
        <Box>
          <Typography variant="body2">
            Start: {startDate?.toLocaleDateString() || 'Not selected'}
          </Typography>
          <Typography variant="body2">
            End: {endDate?.toLocaleDateString() || 'Not selected'}
          </Typography>
        </Box>
      </Stack>
    );
  },
};

export const WithPresets: Story = {
  render: () => {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(new Date());

    return (
      <Stack spacing={2} sx={{ width: 400 }}>
        <CustomDateRangePicker
          startDate={startDate}
          endDate={endDate}
          onChangeStartDate={setStartDate}
          onChangeEndDate={setEndDate}
        />
      </Stack>
    );
  },
};
