import type { Meta, StoryObj } from '@storybook/react';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const meta: Meta<typeof Typography> = {
  title: 'Theme/Components/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Headings: Story = {
  render: () => (
    <Stack spacing={2}>
      <Typography variant="h1">h1. Heading</Typography>
      <Typography variant="h2">h2. Heading</Typography>
      <Typography variant="h3">h3. Heading</Typography>
      <Typography variant="h4">h4. Heading</Typography>
      <Typography variant="h5">h5. Heading</Typography>
      <Typography variant="h6">h6. Heading</Typography>
    </Stack>
  ),
};

export const Body: Story = {
  render: () => (
    <Stack spacing={2}>
      <Typography variant="body1">
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2">
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
    </Stack>
  ),
};

export const Subtitles: Story = {
  render: () => (
    <Stack spacing={2}>
      <Typography variant="subtitle1">
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Typography>
      <Typography variant="subtitle2">
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Typography>
    </Stack>
  ),
};

export const Caption: Story = {
  render: () => (
    <Stack spacing={2}>
      <Typography variant="caption">
        caption. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Typography>
      <Typography variant="overline">
        overline. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Typography>
    </Stack>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <Stack spacing={2}>
      <Typography variant="h1">h1. Heading</Typography>
      <Typography variant="h2">h2. Heading</Typography>
      <Typography variant="h3">h3. Heading</Typography>
      <Typography variant="h4">h4. Heading</Typography>
      <Typography variant="h5">h5. Heading</Typography>
      <Typography variant="h6">h6. Heading</Typography>
      <Typography variant="subtitle1">
        subtitle1. Lorem ipsum dolor sit amet
      </Typography>
      <Typography variant="subtitle2">
        subtitle2. Lorem ipsum dolor sit amet
      </Typography>
      <Typography variant="body1">
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Typography>
      <Typography variant="body2">
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Typography>
      <Typography variant="caption">
        caption. Lorem ipsum dolor sit amet
      </Typography>
      <Typography variant="overline">
        overline. Lorem ipsum dolor sit amet
      </Typography>
    </Stack>
  ),
};
