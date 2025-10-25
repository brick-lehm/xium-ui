import type { Meta, StoryObj } from '@storybook/react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { toast, Toaster } from 'sonner';

const meta: Meta = {
  title: 'Components/Snackbar',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <>
        <Toaster position="top-right" />
        <Story />
      </>
    ),
  ],
};

export default meta;
type Story = StoryObj;

const SnackbarDemo = () => {
  return (
    <Stack spacing={2}>
      <Button
        variant="contained"
        onClick={() => toast.success('This is a success message!')}
      >
        Success
      </Button>
      <Button
        variant="contained"
        color="error"
        onClick={() => toast.error('This is an error message!')}
      >
        Error
      </Button>
      <Button
        variant="contained"
        color="warning"
        onClick={() => toast.warning('This is a warning message!')}
      >
        Warning
      </Button>
      <Button
        variant="contained"
        color="info"
        onClick={() => toast.info('This is an info message!')}
      >
        Info
      </Button>
      <Button
        variant="outlined"
        onClick={() => toast('This is a default message!')}
      >
        Default
      </Button>
    </Stack>
  );
};

export const Default: Story = {
  render: () => <SnackbarDemo />,
};
