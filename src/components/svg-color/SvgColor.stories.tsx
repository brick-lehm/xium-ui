import type { Meta, StoryObj } from '@storybook/react';
import Stack from '@mui/material/Stack';
import { SvgColor } from './svg-color';

const meta: Meta<typeof SvgColor> = {
  title: 'Components/SvgColor',
  component: SvgColor,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: 'SVG file path',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SvgColor>;

export const Default: Story = {
  args: {
    src: '/assets/icons/navbar/ic-dashboard.svg',
  },
};

export const WithColor: Story = {
  args: {
    src: '/assets/icons/navbar/ic-dashboard.svg',
    sx: { color: 'primary.main' },
  },
};

export const DifferentSizes: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <SvgColor src="/assets/icons/navbar/ic-dashboard.svg" sx={{ width: 20, height: 20 }} />
      <SvgColor src="/assets/icons/navbar/ic-dashboard.svg" sx={{ width: 32, height: 32 }} />
      <SvgColor src="/assets/icons/navbar/ic-dashboard.svg" sx={{ width: 48, height: 48 }} />
    </Stack>
  ),
};

export const MultipleColors: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <SvgColor src="/assets/icons/navbar/ic-dashboard.svg" sx={{ color: 'primary.main' }} />
      <SvgColor src="/assets/icons/navbar/ic-dashboard.svg" sx={{ color: 'secondary.main' }} />
      <SvgColor src="/assets/icons/navbar/ic-dashboard.svg" sx={{ color: 'error.main' }} />
      <SvgColor src="/assets/icons/navbar/ic-dashboard.svg" sx={{ color: 'warning.main' }} />
      <SvgColor src="/assets/icons/navbar/ic-dashboard.svg" sx={{ color: 'success.main' }} />
    </Stack>
  ),
};
