import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ColorPicker, ColorPreview } from './index';
import { useState } from 'react';

const meta: Meta = {
  title: 'Components/ColorUtils',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const ColorPickerExample: Story = {
  render: () => {
    const [color, setColor] = useState('#1976d2');

    return (
      <Stack spacing={2} sx={{ width: 300 }}>
        <Typography>Selected Color: {color}</Typography>
        <ColorPicker value={color} onChange={setColor} />
      </Stack>
    );
  },
};

export const ColorPreviewExample: Story = {
  render: () => (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2} alignItems="center">
        <ColorPreview colors={['#FF4842']} />
        <Typography>Single Color</Typography>
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center">
        <ColorPreview colors={['#FF4842', '#1890FF', '#54D62C', '#FFC107']} />
        <Typography>Multiple Colors</Typography>
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center">
        <ColorPreview colors={['#FF4842', '#1890FF', '#54D62C', '#FFC107', '#FF9800']} limit={3} />
        <Typography>With Limit</Typography>
      </Stack>
    </Stack>
  ),
};
