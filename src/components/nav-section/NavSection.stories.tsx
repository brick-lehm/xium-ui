import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import { NavSectionVertical } from './vertical';
import { Iconify } from '../iconify';

const meta: Meta<typeof NavSectionVertical> = {
  title: 'Components/NavSection',
  component: NavSectionVertical,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NavSectionVertical>;

const NAV_ITEMS = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <Iconify icon="solar:widget-bold-duotone" />,
  },
  {
    title: 'User',
    path: '/user',
    icon: <Iconify icon="solar:user-bold-duotone" />,
    children: [
      { title: 'Profile', path: '/user/profile' },
      { title: 'Settings', path: '/user/settings' },
      { title: 'Account', path: '/user/account' },
    ],
  },
  {
    title: 'Products',
    path: '/products',
    icon: <Iconify icon="solar:cart-bold-duotone" />,
    children: [
      { title: 'List', path: '/products/list' },
      { title: 'Create', path: '/products/create' },
    ],
  },
  {
    title: 'Analytics',
    path: '/analytics',
    icon: <Iconify icon="solar:chart-bold-duotone" />,
  },
];

export const Vertical: Story = {
  render: () => (
    <Box sx={{ width: 280, bgcolor: 'background.paper', p: 2 }}>
      <NavSectionVertical data={NAV_ITEMS} />
    </Box>
  ),
};

export const WithSubheader: Story = {
  render: () => (
    <Box sx={{ width: 280, bgcolor: 'background.paper', p: 2 }}>
      <NavSectionVertical
        data={[
          {
            subheader: 'General',
            items: NAV_ITEMS.slice(0, 2),
          },
          {
            subheader: 'Management',
            items: NAV_ITEMS.slice(2),
          },
        ]}
      />
    </Box>
  ),
};
