import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import { SearchNotFound } from './search-not-found';

const meta: Meta<typeof SearchNotFound> = {
  title: 'Components/SearchNotFound',
  component: SearchNotFound,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SearchNotFound>;

export const Default: Story = {
  args: {
    query: 'example search term',
  },
};

export const LongQuery: Story = {
  args: {
    query: 'this is a very long search query that did not return any results',
  },
};

export const InContainer: Story = {
  render: () => (
    <Box sx={{ width: 600, p: 3, border: '1px solid', borderColor: 'divider' }}>
      <SearchNotFound query="product name" />
    </Box>
  ),
};
