import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { ProgressBar } from './progress-bar';
import { useRouter } from './use-router';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  render: () => {
    const [loading, setLoading] = useState(false);

    const handleStart = () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 3000);
    };

    return (
      <Stack spacing={2} p={3}>
        {loading && <ProgressBar />}
        <Button variant="contained" onClick={handleStart}>
          Start Progress
        </Button>
      </Stack>
    );
  },
};

export const AlwaysVisible: Story = {
  render: () => (
    <Stack spacing={2} p={3}>
      <ProgressBar />
    </Stack>
  ),
};
