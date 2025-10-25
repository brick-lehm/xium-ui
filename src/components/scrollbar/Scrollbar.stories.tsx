import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Scrollbar } from './scrollbar';

const meta: Meta<typeof Scrollbar> = {
  title: 'Components/Scrollbar',
  component: Scrollbar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    fillContent: {
      control: 'boolean',
      description: 'Fill content height',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Scrollbar>;

const LongContent = () => (
  <Box p={2}>
    {Array.from({ length: 50 }, (_, i) => (
      <Typography key={i} paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Line {i + 1}
      </Typography>
    ))}
  </Box>
);

export const Vertical: Story = {
  render: () => (
    <Box sx={{ width: 400, height: 300, border: '1px solid', borderColor: 'divider' }}>
      <Scrollbar>
        <LongContent />
      </Scrollbar>
    </Box>
  ),
};

export const FillContent: Story = {
  render: () => (
    <Box sx={{ width: 400, height: 300, border: '1px solid', borderColor: 'divider' }}>
      <Scrollbar fillContent>
        <LongContent />
      </Scrollbar>
    </Box>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <Box sx={{ width: 400, height: 200, border: '1px solid', borderColor: 'divider' }}>
      <Scrollbar>
        <Box sx={{ width: 1000, p: 2 }}>
          <Typography>
            This is a very long line of text that will trigger horizontal scrolling when the content exceeds the container width.
          </Typography>
        </Box>
      </Scrollbar>
    </Box>
  ),
};
