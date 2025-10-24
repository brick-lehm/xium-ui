import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Stack from '@mui/material/Stack';

const meta: Meta<typeof Checkbox> = {
  title: 'Theme/Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: () => <Checkbox defaultChecked />,
};

export const WithLabels: Story = {
  render: () => (
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Checked" />
      <FormControlLabel control={<Checkbox />} label="Unchecked" />
      <FormControlLabel control={<Checkbox disabled />} label="Disabled" />
      <FormControlLabel control={<Checkbox disabled checked />} label="Disabled Checked" />
    </FormGroup>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <Checkbox size="small" defaultChecked />
      <Checkbox size="medium" defaultChecked />
      <Checkbox sx={{ fontSize: 40 }} defaultChecked />
    </Stack>
  ),
};

export const AllColors: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <Checkbox defaultChecked color="primary" />
      <Checkbox defaultChecked color="secondary" />
      <Checkbox defaultChecked color="success" />
      <Checkbox defaultChecked color="error" />
      <Checkbox defaultChecked color="warning" />
      <Checkbox defaultChecked color="info" />
      <Checkbox defaultChecked color="default" />
    </Stack>
  ),
};

export const Indeterminate: Story = {
  render: () => (
    <Stack spacing={1}>
      <FormControlLabel control={<Checkbox indeterminate />} label="Indeterminate" />
      <FormControlLabel control={<Checkbox indeterminate disabled />} label="Indeterminate Disabled" />
    </Stack>
  ),
};
