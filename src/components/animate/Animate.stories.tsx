import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { MotionViewport } from './motion-viewport';
import { varFade, varZoom, varSlide, varRotate, varBounce, varFlip, varScale } from './variants';

const meta: Meta = {
  title: 'Components/Animate',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

const AnimatedBox = ({ children, ...other }: any) => (
  <Box
    component="div"
    sx={{
      p: 3,
      bgcolor: 'primary.main',
      color: 'primary.contrastText',
      borderRadius: 2,
      textAlign: 'center',
    }}
    {...other}
  >
    {children}
  </Box>
);

export const FadeVariants: Story = {
  render: () => (
    <Stack spacing={2} sx={{ width: 600 }}>
      <Typography variant="h6">Fade Variants</Typography>
      <AnimatedBox {...varFade().inUp}>Fade In Up</AnimatedBox>
      <AnimatedBox {...varFade().inDown}>Fade In Down</AnimatedBox>
      <AnimatedBox {...varFade().inLeft}>Fade In Left</AnimatedBox>
      <AnimatedBox {...varFade().inRight}>Fade In Right</AnimatedBox>
    </Stack>
  ),
};

export const ZoomVariants: Story = {
  render: () => (
    <Stack spacing={2} sx={{ width: 600 }}>
      <Typography variant="h6">Zoom Variants</Typography>
      <AnimatedBox {...varZoom().in}>Zoom In</AnimatedBox>
      <AnimatedBox {...varZoom().inUp}>Zoom In Up</AnimatedBox>
      <AnimatedBox {...varZoom().inDown}>Zoom In Down</AnimatedBox>
    </Stack>
  ),
};

export const SlideVariants: Story = {
  render: () => (
    <Stack spacing={2} sx={{ width: 600 }}>
      <Typography variant="h6">Slide Variants</Typography>
      <AnimatedBox {...varSlide().inUp}>Slide In Up</AnimatedBox>
      <AnimatedBox {...varSlide().inDown}>Slide In Down</AnimatedBox>
      <AnimatedBox {...varSlide().inLeft}>Slide In Left</AnimatedBox>
      <AnimatedBox {...varSlide().inRight}>Slide In Right</AnimatedBox>
    </Stack>
  ),
};

export const WithMotionViewport: Story = {
  render: () => (
    <MotionViewport>
      <Stack spacing={3} sx={{ py: 5 }}>
        {Array.from({ length: 5 }, (_, i) => (
          <AnimatedBox key={i} {...varFade().inUp}>
            Scroll to see animation {i + 1}
          </AnimatedBox>
        ))}
      </Stack>
    </MotionViewport>
  ),
};
