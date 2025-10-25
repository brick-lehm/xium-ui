import type { Meta, StoryObj } from '@storybook/react';
import Stack from '@mui/material/Stack';
import { Image } from './image';

const meta: Meta<typeof Image> = {
  title: 'Components/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    ratio: {
      control: 'text',
      description: 'Aspect ratio (e.g., 16/9, 4/3, 1/1)',
    },
    disabledEffect: {
      control: 'boolean',
      description: 'Disable hover effect',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    src: 'https://picsum.photos/400/300',
    alt: 'Sample Image',
  },
};

export const WithRatio: Story = {
  args: {
    src: 'https://picsum.photos/400/300',
    alt: 'Sample Image',
    ratio: '16/9',
  },
};

export const Square: Story = {
  args: {
    src: 'https://picsum.photos/400/400',
    alt: 'Square Image',
    ratio: '1/1',
  },
};

export const DisabledEffect: Story = {
  args: {
    src: 'https://picsum.photos/400/300',
    alt: 'No Effect',
    disabledEffect: true,
  },
};

export const MultipleRatios: Story = {
  render: () => (
    <Stack spacing={2} sx={{ width: 400 }}>
      <Image src="https://picsum.photos/400/300" ratio="16/9" alt="16:9" />
      <Image src="https://picsum.photos/400/300" ratio="4/3" alt="4:3" />
      <Image src="https://picsum.photos/400/400" ratio="1/1" alt="1:1" />
    </Stack>
  ),
};
