import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import { MegaMenuVertical } from './vertical';
import { Iconify } from '../iconify';

const meta: Meta<typeof MegaMenuVertical> = {
  title: 'Components/MegaMenu',
  component: MegaMenuVertical,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MegaMenuVertical>;

const MEGA_MENU_DATA = [
  {
    title: 'Products',
    path: '/products',
    icon: <Iconify icon="solar:widget-bold-duotone" />,
    children: [
      {
        subheader: 'Categories',
        items: [
          { title: 'Electronics', path: '/products/electronics' },
          { title: 'Clothing', path: '/products/clothing' },
          { title: 'Home & Garden', path: '/products/home' },
        ],
      },
      {
        subheader: 'Featured',
        items: [
          { title: 'New Arrivals', path: '/products/new' },
          { title: 'Best Sellers', path: '/products/best' },
          { title: 'Sale', path: '/products/sale' },
        ],
      },
    ],
  },
];

export const Vertical: Story = {
  render: () => (
    <Box sx={{ width: 280, bgcolor: 'background.paper', p: 2 }}>
      <MegaMenuVertical data={MEGA_MENU_DATA} />
    </Box>
  ),
};
