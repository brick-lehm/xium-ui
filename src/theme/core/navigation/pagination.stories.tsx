import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const meta: Meta<typeof Pagination> = {
  title: 'Navigation/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    count: 10,
  },
};

export const AllSizes: Story = {
  render: () => (
    <Stack spacing={2}>
      <Pagination count={10} size="small" />
      <Pagination count={10} size="medium" />
      <Pagination count={10} size="large" />
    </Stack>
  ),
};

export const AllShapes: Story = {
  render: () => (
    <Stack spacing={2}>
      <Pagination count={10} shape="circular" />
      <Pagination count={10} shape="rounded" />
    </Stack>
  ),
};

export const AllColors: Story = {
  render: () => (
    <Stack spacing={2}>
      <Pagination count={10} color="primary" />
      <Pagination count={10} color="secondary" />
      <Pagination count={10} color="standard" />
    </Stack>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <Stack spacing={2}>
      <Pagination count={10} variant="text" />
      <Pagination count={10} variant="outlined" />
    </Stack>
  ),
};

export const Outlined: Story = {
  render: () => (
    <Stack spacing={2}>
      <Pagination count={10} variant="outlined" color="primary" />
      <Pagination count={10} variant="outlined" color="secondary" />
      <Pagination count={10} variant="outlined" shape="rounded" />
    </Stack>
  ),
};

export const WithBoundaries: Story = {
  render: () => (
    <Stack spacing={2}>
      <Pagination count={10} boundaryCount={0} />
      <Pagination count={10} boundaryCount={1} />
      <Pagination count={10} boundaryCount={2} />
    </Stack>
  ),
};

export const WithSiblings: Story = {
  render: () => (
    <Stack spacing={2}>
      <Pagination count={11} siblingCount={0} />
      <Pagination count={11} siblingCount={1} />
      <Pagination count={11} siblingCount={2} />
    </Stack>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Stack spacing={2}>
      <Pagination count={10} disabled />
      <Pagination count={10} variant="outlined" disabled />
    </Stack>
  ),
};

export const HideButtons: Story = {
  render: () => (
    <Stack spacing={2}>
      <Pagination count={10} hidePrevButton />
      <Pagination count={10} hideNextButton />
      <Pagination count={10} hidePrevButton hideNextButton />
    </Stack>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
    };

    return (
      <Stack spacing={2}>
        <Pagination count={10} page={page} onChange={handleChange} />
        <p>Current page: {page}</p>
      </Stack>
    );
  },
};

export const WithCustomIcons: Story = {
  render: () => (
    <Pagination
      count={10}
      renderItem={(item) => (
        <PaginationItem
          slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
          {...item}
        />
      )}
    />
  ),
};

export const AllCombinations: Story = {
  render: () => (
    <Stack spacing={2}>
      <Pagination count={10} size="small" shape="rounded" color="primary" />
      <Pagination count={10} size="medium" shape="circular" color="secondary" />
      <Pagination count={10} size="large" shape="rounded" color="primary" variant="outlined" />
      <Pagination count={10} size="small" shape="circular" color="secondary" variant="outlined" />
    </Stack>
  ),
};

export const DifferentCounts: Story = {
  render: () => (
    <Stack spacing={2}>
      <Pagination count={5} />
      <Pagination count={10} />
      <Pagination count={15} />
      <Pagination count={20} />
    </Stack>
  ),
};

export const WithBoundariesAndSiblings: Story = {
  render: () => (
    <Stack spacing={2}>
      <Pagination count={20} defaultPage={10} boundaryCount={2} siblingCount={0} />
      <Pagination count={20} defaultPage={10} boundaryCount={1} siblingCount={1} />
      <Pagination count={20} defaultPage={10} boundaryCount={0} siblingCount={2} />
    </Stack>
  ),
};

export const ColorVariants: Story = {
  render: () => (
    <Stack spacing={2}>
      <Pagination count={10} color="primary" variant="text" />
      <Pagination count={10} color="primary" variant="outlined" />
      <Pagination count={10} color="secondary" variant="text" />
      <Pagination count={10} color="secondary" variant="outlined" />
      <Pagination count={10} color="standard" variant="text" />
      <Pagination count={10} color="standard" variant="outlined" />
    </Stack>
  ),
};

export const SizeShapeColor: Story = {
  render: () => (
    <Stack spacing={3}>
      <Stack spacing={2}>
        <Pagination count={10} size="small" shape="rounded" color="primary" />
        <Pagination count={10} size="small" shape="rounded" color="secondary" />
      </Stack>
      <Stack spacing={2}>
        <Pagination count={10} size="medium" shape="circular" color="primary" />
        <Pagination count={10} size="medium" shape="circular" color="secondary" />
      </Stack>
      <Stack spacing={2}>
        <Pagination count={10} size="large" shape="rounded" color="primary" />
        <Pagination count={10} size="large" shape="rounded" color="secondary" />
      </Stack>
    </Stack>
  ),
};

export const AllFeatures: Story = {
  render: () => {
    const [page, setPage] = useState(6);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
    };

    return (
      <Stack spacing={3} alignItems="center">
        <Stack spacing={2} alignItems="center">
          <Pagination
            count={20}
            page={page}
            onChange={handleChange}
            color="primary"
            size="large"
            shape="rounded"
            boundaryCount={2}
            siblingCount={1}
          />
          <p>Large, Rounded, Primary - Page: {page}</p>
        </Stack>
        <Stack spacing={2} alignItems="center">
          <Pagination
            count={15}
            color="secondary"
            size="medium"
            shape="circular"
            variant="outlined"
            boundaryCount={1}
            siblingCount={1}
          />
          <p>Medium, Circular, Outlined Secondary</p>
        </Stack>
        <Stack spacing={2} alignItems="center">
          <Pagination
            count={10}
            color="primary"
            size="small"
            shape="rounded"
            renderItem={(item) => (
              <PaginationItem
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
          />
          <p>Small, Rounded, Custom Icons</p>
        </Stack>
      </Stack>
    );
  },
};
