import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { FiltersResult } from './filters-result';

const meta: Meta<typeof FiltersResult> = {
  title: 'Components/FiltersResult',
  component: FiltersResult,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FiltersResult>;

export const Default: Story = {
  render: () => {
    const [filters, setFilters] = useState({
      category: 'Electronics',
      price: '$100-$500',
      rating: '4 stars',
    });

    const handleRemoveFilter = (key: string) => {
      const newFilters = { ...filters };
      delete newFilters[key as keyof typeof filters];
      setFilters(newFilters);
    };

    const handleClearAll = () => {
      setFilters({});
    };

    return (
      <Box sx={{ width: 600 }}>
        <FiltersResult
          totalResults={42}
          filters={filters}
          onRemoveFilter={handleRemoveFilter}
          onResetFilters={handleClearAll}
        />
      </Box>
    );
  },
};

export const NoResults: Story = {
  render: () => (
    <Box sx={{ width: 600 }}>
      <FiltersResult
        totalResults={0}
        filters={{
          category: 'Books',
          author: 'John Doe',
        }}
        onRemoveFilter={() => {}}
        onResetFilters={() => {}}
      />
    </Box>
  ),
};
