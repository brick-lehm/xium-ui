import type { Meta, StoryObj } from '@storybook/react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Stack from '@mui/material/Stack';

const meta: Meta<typeof Switch> = {
  title: 'Theme/Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: () => <Switch defaultChecked />,
};

export const WithLabels: Story = {
  render: () => (
    <FormGroup>
      <FormControlLabel control={<Switch defaultChecked />} label="Checked" />
      <FormControlLabel control={<Switch />} label="Unchecked" />
      <FormControlLabel control={<Switch disabled />} label="Disabled" />
      <FormControlLabel control={<Switch disabled checked />} label="Disabled Checked" />
    </FormGroup>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <FormControlLabel control={<Switch size="small" defaultChecked />} label="Small" />
      <FormControlLabel control={<Switch size="medium" defaultChecked />} label="Medium" />
    </Stack>
  ),
};

export const AllColors: Story = {
  render: () => (
    <Stack spacing={1}>
      <FormControlLabel control={<Switch defaultChecked color="primary" />} label="Primary" />
      <FormControlLabel control={<Switch defaultChecked color="secondary" />} label="Secondary" />
      <FormControlLabel control={<Switch defaultChecked color="success" />} label="Success" />
      <FormControlLabel control={<Switch defaultChecked color="error" />} label="Error" />
      <FormControlLabel control={<Switch defaultChecked color="warning" />} label="Warning" />
      <FormControlLabel control={<Switch defaultChecked color="info" />} label="Info" />
      <FormControlLabel control={<Switch defaultChecked color="default" />} label="Default" />
    </Stack>
  ),
};

export const LabelPlacement: Story = {
  render: () => (
    <FormGroup>
      <FormControlLabel
        control={<Switch defaultChecked />}
        label="End (default)"
        labelPlacement="end"
      />
      <FormControlLabel
        control={<Switch defaultChecked />}
        label="Start"
        labelPlacement="start"
      />
      <FormControlLabel
        control={<Switch defaultChecked />}
        label="Top"
        labelPlacement="top"
      />
      <FormControlLabel
        control={<Switch defaultChecked />}
        label="Bottom"
        labelPlacement="bottom"
      />
    </FormGroup>
  ),
};
