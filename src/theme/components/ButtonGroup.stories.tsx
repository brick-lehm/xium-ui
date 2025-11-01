import type { Meta, StoryObj } from '@storybook/react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const meta: Meta<typeof ButtonGroup> = {
  title: 'Theme/Components/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  render: () => (
    <ButtonGroup variant="contained">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <Stack spacing={2} alignItems="center">
      <ButtonGroup variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant="outlined">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant="text">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </Stack>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <Stack spacing={2} alignItems="center">
      <ButtonGroup size="small" variant="contained">
        <Button>Small</Button>
        <Button>Small</Button>
        <Button>Small</Button>
      </ButtonGroup>
      <ButtonGroup size="medium" variant="contained">
        <Button>Medium</Button>
        <Button>Medium</Button>
        <Button>Medium</Button>
      </ButtonGroup>
      <ButtonGroup size="large" variant="contained">
        <Button>Large</Button>
        <Button>Large</Button>
        <Button>Large</Button>
      </ButtonGroup>
    </Stack>
  ),
};

export const AllColors: Story = {
  render: () => (
    <Stack spacing={2} alignItems="center">
      <ButtonGroup variant="contained" color="primary">
        <Button>Primary</Button>
        <Button>Primary</Button>
      </ButtonGroup>
      <ButtonGroup variant="contained" color="secondary">
        <Button>Secondary</Button>
        <Button>Secondary</Button>
      </ButtonGroup>
      <ButtonGroup variant="contained" color="success">
        <Button>Success</Button>
        <Button>Success</Button>
      </ButtonGroup>
      <ButtonGroup variant="contained" color="error">
        <Button>Error</Button>
        <Button>Error</Button>
      </ButtonGroup>
      <ButtonGroup variant="contained" color="warning">
        <Button>Warning</Button>
        <Button>Warning</Button>
      </ButtonGroup>
      <ButtonGroup variant="contained" color="info">
        <Button>Info</Button>
        <Button>Info</Button>
      </ButtonGroup>
    </Stack>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Stack spacing={2} direction="row">
      <ButtonGroup orientation="vertical" variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup orientation="vertical" variant="outlined">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup orientation="vertical" variant="text">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </Stack>
  ),
};

export const States: Story = {
  render: () => (
    <Stack spacing={2} alignItems="center">
      <ButtonGroup variant="contained">
        <Button>Normal</Button>
        <Button>Normal</Button>
        <Button>Normal</Button>
      </ButtonGroup>
      <ButtonGroup variant="contained" disabled>
        <Button>Disabled</Button>
        <Button>Disabled</Button>
        <Button>Disabled</Button>
      </ButtonGroup>
    </Stack>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <Stack spacing={2} sx={{ width: 400 }}>
      <ButtonGroup variant="contained" fullWidth>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant="outlined" fullWidth>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </Stack>
  ),
};
