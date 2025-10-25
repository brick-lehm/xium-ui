import type { Meta, StoryObj } from '@storybook/react';
import { CustomBreadcrumbs } from './custom-breadcrumbs';
import { Iconify } from '../iconify';

const meta: Meta<typeof CustomBreadcrumbs> = {
  title: 'Components/CustomBreadcrumbs',
  component: CustomBreadcrumbs,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CustomBreadcrumbs>;

export const Basic: Story = {
  args: {
    links: [
      { name: 'Home', href: '/' },
      { name: 'Dashboard', href: '/dashboard' },
      { name: 'User', href: '/dashboard/user' },
      { name: 'List' },
    ],
  },
};

export const WithHeading: Story = {
  args: {
    heading: 'User List',
    links: [
      { name: 'Home', href: '/' },
      { name: 'Dashboard', href: '/dashboard' },
      { name: 'User' },
    ],
  },
};

export const WithIcons: Story = {
  args: {
    heading: 'Products',
    links: [
      {
        name: 'Home',
        href: '/',
        icon: <Iconify icon="solar:home-bold-duotone" width={20} />
      },
      {
        name: 'Dashboard',
        href: '/dashboard',
        icon: <Iconify icon="solar:widget-bold-duotone" width={20} />
      },
      { name: 'Products' },
    ],
  },
};

export const WithAction: Story = {
  args: {
    heading: 'Settings',
    links: [
      { name: 'Home', href: '/' },
      { name: 'Settings' },
    ],
    action: (
      <Iconify icon="solar:settings-bold-duotone" width={24} />
    ),
  },
};
