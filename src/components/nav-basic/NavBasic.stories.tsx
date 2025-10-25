import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import { NavBasicDesktop } from './desktop';
import { Iconify } from '../iconify';

const meta: Meta<typeof NavBasicDesktop> = {
  title: 'Components/NavBasic',
  component: NavBasicDesktop,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NavBasicDesktop>;

const NAV_ITEMS = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Products',
    path: '/products',
    children: [
      { title: 'All Products', path: '/products/all' },
      { title: 'New Arrivals', path: '/products/new' },
      { title: 'Best Sellers', path: '/products/best' },
    ],
  },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
];

export const Desktop: Story = {
  render: () => (
    <Box sx={{ bgcolor: 'background.paper', p: 2 }}>
      <NavBasicDesktop data={NAV_ITEMS} />
    </Box>
  ),
};
