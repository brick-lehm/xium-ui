import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Stack from '@mui/material/Stack';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';

const meta: Meta<typeof Tabs> = {
  title: 'Theme/Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState(0);
    return (
      <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    );
  },
};

export const AllColors: Story = {
  render: () => {
    const [value, setValue] = useState(0);
    return (
      <Stack spacing={2}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)} textColor="primary" indicatorColor="primary">
          <Tab label="Primary" />
          <Tab label="Primary" />
          <Tab label="Primary" />
        </Tabs>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)} textColor="secondary" indicatorColor="secondary">
          <Tab label="Secondary" />
          <Tab label="Secondary" />
          <Tab label="Secondary" />
        </Tabs>
      </Stack>
    );
  },
};

export const AllVariants: Story = {
  render: () => {
    const [value, setValue] = useState(0);
    return (
      <Stack spacing={2}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)} variant="standard">
          <Tab label="Standard" />
          <Tab label="Standard" />
          <Tab label="Standard" />
        </Tabs>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)} variant="scrollable" scrollButtons="auto">
          <Tab label="Scrollable" />
          <Tab label="Scrollable" />
          <Tab label="Scrollable" />
        </Tabs>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)} variant="fullWidth">
          <Tab label="Full Width" />
          <Tab label="Full Width" />
          <Tab label="Full Width" />
        </Tabs>
      </Stack>
    );
  },
};

export const WithIcons: Story = {
  render: () => {
    const [value, setValue] = useState(0);
    return (
      <Stack spacing={2}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
          <Tab icon={<PhoneIcon />} label="Recents" />
          <Tab icon={<FavoriteIcon />} label="Favorites" />
          <Tab icon={<PersonPinIcon />} label="Nearby" />
        </Tabs>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
          <Tab icon={<PhoneIcon />} />
          <Tab icon={<FavoriteIcon />} />
          <Tab icon={<PersonPinIcon />} />
        </Tabs>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
          <Tab iconPosition="start" icon={<PhoneIcon />} label="Recents" />
          <Tab iconPosition="start" icon={<FavoriteIcon />} label="Favorites" />
          <Tab iconPosition="start" icon={<PersonPinIcon />} label="Nearby" />
        </Tabs>
      </Stack>
    );
  },
};

export const Vertical: Story = {
  render: () => {
    const [value, setValue] = useState(0);
    return (
      <Box sx={{ display: 'flex', height: 224 }}>
        <Tabs
          orientation="vertical"
          value={value}
          onChange={(e, newValue) => setValue(newValue)}
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
          <Tab label="Item Four" />
          <Tab label="Item Five" />
        </Tabs>
        <Box sx={{ p: 3 }}>
          {value === 0 && <div>Item One Content</div>}
          {value === 1 && <div>Item Two Content</div>}
          {value === 2 && <div>Item Three Content</div>}
          {value === 3 && <div>Item Four Content</div>}
          {value === 4 && <div>Item Five Content</div>}
        </Box>
      </Box>
    );
  },
};

export const Centered: Story = {
  render: () => {
    const [value, setValue] = useState(0);
    return (
      <Tabs value={value} onChange={(e, newValue) => setValue(newValue)} centered>
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    );
  },
};

export const Scrollable: Story = {
  render: () => {
    const [value, setValue] = useState(0);
    return (
      <Box sx={{ maxWidth: 400 }}>
        <Tabs
          value={value}
          onChange={(e, newValue) => setValue(newValue)}
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
          <Tab label="Item Four" />
          <Tab label="Item Five" />
          <Tab label="Item Six" />
          <Tab label="Item Seven" />
        </Tabs>
      </Box>
    );
  },
};

export const States: Story = {
  render: () => {
    const [value, setValue] = useState(0);
    return (
      <Stack spacing={2}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
          <Tab label="Active" />
          <Tab label="Normal" />
          <Tab label="Normal" />
        </Tabs>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
          <Tab label="Active" />
          <Tab label="Disabled" disabled />
          <Tab label="Normal" />
        </Tabs>
      </Stack>
    );
  },
};
