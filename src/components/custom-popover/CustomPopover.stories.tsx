import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import { CustomPopover, usePopover } from './index';
import { Iconify } from '../iconify';

const meta: Meta<typeof CustomPopover> = {
  title: 'Components/CustomPopover',
  component: CustomPopover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CustomPopover>;

export const Default: Story = {
  render: () => {
    const popover = usePopover();

    return (
      <>
        <Button variant="contained" onClick={popover.onOpen}>
          Open Popover
        </Button>
        <CustomPopover open={popover.open} anchorEl={popover.anchorEl} onClose={popover.onClose}>
          <MenuItem onClick={popover.onClose}>
            <Iconify icon="solar:pen-bold" sx={{ mr: 1 }} />
            Edit
          </MenuItem>
          <MenuItem onClick={popover.onClose}>
            <Iconify icon="solar:copy-bold" sx={{ mr: 1 }} />
            Copy
          </MenuItem>
          <MenuItem onClick={popover.onClose} sx={{ color: 'error.main' }}>
            <Iconify icon="solar:trash-bin-trash-bold" sx={{ mr: 1 }} />
            Delete
          </MenuItem>
        </CustomPopover>
      </>
    );
  },
};

export const WithArrow: Story = {
  render: () => {
    const popover = usePopover();

    return (
      <>
        <Button variant="contained" onClick={popover.onOpen}>
          Open Popover with Arrow
        </Button>
        <CustomPopover
          open={popover.open}
          anchorEl={popover.anchorEl}
          onClose={popover.onClose}
          arrow="top-right"
        >
          <MenuItem onClick={popover.onClose}>Option 1</MenuItem>
          <MenuItem onClick={popover.onClose}>Option 2</MenuItem>
          <MenuItem onClick={popover.onClose}>Option 3</MenuItem>
        </CustomPopover>
      </>
    );
  },
};
