import type { Meta, StoryObj } from '@storybook/react';
import Button from '@mui/material/Button';
import { EmptyContent } from './empty-content';

const meta: Meta<typeof EmptyContent> = {
  title: 'Components/EmptyContent',
  component: EmptyContent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    filled: {
      control: 'boolean',
      description: 'Show filled background',
    },
  },
};

export default meta;
type Story = StoryObj<typeof EmptyContent>;

export const Default: Story = {
  args: {
    title: 'No Data',
  },
};

export const WithDescription: Story = {
  args: {
    title: 'No Data',
    description: 'There are no items to display at the moment.',
  },
};

export const WithAction: Story = {
  args: {
    title: 'No Items Found',
    description: 'Try adjusting your search or filter to find what you are looking for.',
    action: (
      <Button variant="contained" color="primary">
        Reset Filters
      </Button>
    ),
  },
};

export const Filled: Story = {
  args: {
    filled: true,
    title: 'No Results',
    description: 'We could not find any results matching your criteria.',
  },
};

export const CustomImage: Story = {
  args: {
    title: 'Empty Cart',
    description: 'Your shopping cart is currently empty.',
    imgUrl: '/assets/illustrations/illustration-cart.svg',
    action: (
      <Button variant="contained" color="primary">
        Continue Shopping
      </Button>
    ),
  },
};
