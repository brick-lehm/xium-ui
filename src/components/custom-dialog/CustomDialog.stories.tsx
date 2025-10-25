import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { ConfirmDialog } from './confirm-dialog';

const meta: Meta<typeof ConfirmDialog> = {
  title: 'Components/CustomDialog',
  component: ConfirmDialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ConfirmDialog>;

export const ConfirmDialogExample: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open Confirm Dialog
        </Button>
        <ConfirmDialog
          open={open}
          onClose={() => setOpen(false)}
          title="Delete Item"
          content="Are you sure you want to delete this item?"
          action={
            <Button variant="contained" color="error" onClick={() => setOpen(false)}>
              Delete
            </Button>
          }
        />
      </>
    );
  },
};

export const WarningDialog: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button variant="contained" color="warning" onClick={() => setOpen(true)}>
          Show Warning
        </Button>
        <ConfirmDialog
          open={open}
          onClose={() => setOpen(false)}
          title="Warning"
          content={
            <Typography>
              This action cannot be undone. Please make sure you want to proceed.
            </Typography>
          }
          action={
            <Stack direction="row" spacing={1}>
              <Button variant="outlined" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button variant="contained" color="warning" onClick={() => setOpen(false)}>
                Proceed
              </Button>
            </Stack>
          }
        />
      </>
    );
  },
};
