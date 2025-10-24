import type { Meta, StoryObj } from '@storybook/react';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import { useState } from 'react';

const meta: Meta<typeof Slider> = {
  title: 'Theme/Components/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  render: () => (
    <Box sx={{ width: 300 }}>
      <Slider defaultValue={30} />
    </Box>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <Stack spacing={4} sx={{ width: 300 }}>
      <Slider size="small" defaultValue={30} />
      <Slider size="medium" defaultValue={30} />
    </Stack>
  ),
};

export const AllColors: Story = {
  render: () => (
    <Stack spacing={4} sx={{ width: 300 }}>
      <Slider defaultValue={30} color="primary" />
      <Slider defaultValue={30} color="secondary" />
      <Slider defaultValue={30} color="success" />
      <Slider defaultValue={30} color="error" />
      <Slider defaultValue={30} color="warning" />
      <Slider defaultValue={30} color="info" />
    </Stack>
  ),
};

export const Discrete: Story = {
  render: () => (
    <Box sx={{ width: 300 }}>
      <Slider
        defaultValue={30}
        step={10}
        marks
        min={0}
        max={100}
        valueLabelDisplay="auto"
      />
    </Box>
  ),
};

export const WithMarks: Story = {
  render: () => {
    const marks = [
      { value: 0, label: '0°C' },
      { value: 20, label: '20°C' },
      { value: 37, label: '37°C' },
      { value: 100, label: '100°C' },
    ];

    return (
      <Box sx={{ width: 300 }}>
        <Slider
          defaultValue={20}
          step={10}
          marks={marks}
          valueLabelDisplay="auto"
        />
      </Box>
    );
  },
};

export const SmallSteps: Story = {
  render: () => (
    <Box sx={{ width: 300 }}>
      <Slider
        defaultValue={0.00000005}
        step={0.00000001}
        marks
        min={0}
        max={0.0000001}
        valueLabelDisplay="auto"
      />
    </Box>
  ),
};

export const Range: Story = {
  render: () => {
    const [value, setValue] = useState<number[]>([20, 37]);
    return (
      <Box sx={{ width: 300 }}>
        <Slider
          value={value}
          onChange={(event, newValue) => setValue(newValue as number[])}
          valueLabelDisplay="auto"
        />
      </Box>
    );
  },
};

export const RangeWithMarks: Story = {
  render: () => {
    const marks = [
      { value: 0, label: '0°C' },
      { value: 20, label: '20°C' },
      { value: 37, label: '37°C' },
      { value: 100, label: '100°C' },
    ];

    return (
      <Box sx={{ width: 300 }}>
        <Slider
          defaultValue={[20, 37]}
          marks={marks}
          valueLabelDisplay="auto"
        />
      </Box>
    );
  },
};

export const WithIcons: Story = {
  render: () => {
    const [value, setValue] = useState<number>(30);
    return (
      <Box sx={{ width: 300 }}>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <VolumeDown />
          <Slider
            value={value}
            onChange={(event, newValue) => setValue(newValue as number)}
          />
          <VolumeUp />
        </Stack>
      </Box>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <Stack spacing={4} sx={{ width: 300 }}>
      <Slider defaultValue={30} />
      <Slider defaultValue={30} disabled />
    </Stack>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Stack spacing={2} direction="row" sx={{ height: 300 }} alignItems="center">
      <Slider
        orientation="vertical"
        defaultValue={30}
        valueLabelDisplay="auto"
      />
      <Slider
        orientation="vertical"
        defaultValue={30}
        disabled
      />
      <Slider
        orientation="vertical"
        defaultValue={[20, 37]}
        valueLabelDisplay="auto"
      />
      <Slider
        orientation="vertical"
        defaultValue={30}
        marks
        step={10}
        valueLabelDisplay="auto"
      />
    </Stack>
  ),
};

export const ValueLabel: Story = {
  render: () => (
    <Stack spacing={4} sx={{ width: 300 }}>
      <Slider defaultValue={30} valueLabelDisplay="auto" />
      <Slider defaultValue={30} valueLabelDisplay="on" />
      <Slider defaultValue={30} valueLabelDisplay="off" />
    </Stack>
  ),
};

export const CustomValueLabel: Story = {
  render: () => {
    function valueLabelFormat(value: number) {
      return `${value}°C`;
    }

    return (
      <Box sx={{ width: 300 }}>
        <Slider
          defaultValue={37}
          valueLabelDisplay="auto"
          valueLabelFormat={valueLabelFormat}
        />
      </Box>
    );
  },
};
