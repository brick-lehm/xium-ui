import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';

const meta: Meta<typeof ToggleButton> = {
  title: 'Components/Form/Button/ToggleButton',
  component: ToggleButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ToggleButton>;

export const Default: Story = {
  render: () => {
    const [selected, setSelected] = useState(false);
    return (
      <ToggleButton
        value="check"
        selected={selected}
        onChange={() => setSelected(!selected)}
      >
        <FormatBoldIcon />
      </ToggleButton>
    );
  },
};

export const Exclusive: Story = {
  render: () => {
    const [alignment, setAlignment] = useState('left');
    return (
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={(event, newAlignment) => newAlignment && setAlignment(newAlignment)}
      >
        <ToggleButton value="left">
          <FormatAlignLeftIcon />
        </ToggleButton>
        <ToggleButton value="center">
          <FormatAlignCenterIcon />
        </ToggleButton>
        <ToggleButton value="right">
          <FormatAlignRightIcon />
        </ToggleButton>
        <ToggleButton value="justify">
          <FormatAlignJustifyIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    );
  },
};

export const Multiple: Story = {
  render: () => {
    const [formats, setFormats] = useState<string[]>(['bold']);
    const handleFormat = (event: React.MouseEvent<HTMLElement>, newFormats: string[]) => {
      setFormats(newFormats);
    };
    return (
      <ToggleButtonGroup value={formats} onChange={handleFormat}>
        <ToggleButton value="bold">
          <FormatBoldIcon />
        </ToggleButton>
        <ToggleButton value="italic">
          <FormatItalicIcon />
        </ToggleButton>
        <ToggleButton value="underlined">
          <FormatUnderlinedIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    );
  },
};

export const AllSizes: Story = {
  render: () => (
    <Stack spacing={2}>
      <ToggleButtonGroup size="small" value="left">
        <ToggleButton value="left">
          <FormatAlignLeftIcon fontSize="small" />
        </ToggleButton>
        <ToggleButton value="center">
          <FormatAlignCenterIcon fontSize="small" />
        </ToggleButton>
        <ToggleButton value="right">
          <FormatAlignRightIcon fontSize="small" />
        </ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup size="medium" value="left">
        <ToggleButton value="left">
          <FormatAlignLeftIcon />
        </ToggleButton>
        <ToggleButton value="center">
          <FormatAlignCenterIcon />
        </ToggleButton>
        <ToggleButton value="right">
          <FormatAlignRightIcon />
        </ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup size="large" value="left">
        <ToggleButton value="left">
          <FormatAlignLeftIcon fontSize="large" />
        </ToggleButton>
        <ToggleButton value="center">
          <FormatAlignCenterIcon fontSize="large" />
        </ToggleButton>
        <ToggleButton value="right">
          <FormatAlignRightIcon fontSize="large" />
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  ),
};

export const AllColors: Story = {
  render: () => (
    <Stack spacing={2}>
      <ToggleButtonGroup value="bold" color="primary">
        <ToggleButton value="bold">Primary</ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup value="bold" color="secondary">
        <ToggleButton value="bold">Secondary</ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup value="bold" color="success">
        <ToggleButton value="bold">Success</ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup value="bold" color="error">
        <ToggleButton value="bold">Error</ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup value="bold" color="warning">
        <ToggleButton value="bold">Warning</ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup value="bold" color="info">
        <ToggleButton value="bold">Info</ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  ),
};

export const Vertical: Story = {
  render: () => {
    const [alignment, setAlignment] = useState('left');
    return (
      <ToggleButtonGroup
        orientation="vertical"
        value={alignment}
        exclusive
        onChange={(event, newAlignment) => newAlignment && setAlignment(newAlignment)}
      >
        <ToggleButton value="left">
          <FormatAlignLeftIcon />
        </ToggleButton>
        <ToggleButton value="center">
          <FormatAlignCenterIcon />
        </ToggleButton>
        <ToggleButton value="right">
          <FormatAlignRightIcon />
        </ToggleButton>
        <ToggleButton value="justify">
          <FormatAlignJustifyIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    );
  },
};

export const States: Story = {
  render: () => (
    <Stack spacing={2}>
      <ToggleButtonGroup value="left">
        <ToggleButton value="left">Normal</ToggleButton>
        <ToggleButton value="center">Normal</ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup disabled value="left">
        <ToggleButton value="left">Disabled</ToggleButton>
        <ToggleButton value="center">Disabled</ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  ),
};
