import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Lightbox, useLightBox } from './index';

const meta: Meta<typeof Lightbox> = {
  title: 'Components/Lightbox',
  component: Lightbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Lightbox>;

const IMAGES = [
  'https://picsum.photos/800/600?random=1',
  'https://picsum.photos/800/600?random=2',
  'https://picsum.photos/800/600?random=3',
  'https://picsum.photos/800/600?random=4',
  'https://picsum.photos/800/600?random=5',
];

const slides = IMAGES.map((src) => ({ src }));

export const Default: Story = {
  render: () => {
    const lightbox = useLightBox(slides);

    return (
      <Stack spacing={2}>
        <Button variant="contained" onClick={() => lightbox.onOpen(IMAGES[0])}>
          Open Lightbox
        </Button>
        <Lightbox
          index={lightbox.selected}
          slides={slides}
          open={lightbox.open}
          close={lightbox.onClose}
        />
      </Stack>
    );
  },
};

export const WithThumbnails: Story = {
  render: () => {
    const lightbox = useLightBox(slides);

    return (
      <Stack spacing={2}>
        <Stack direction="row" spacing={1} flexWrap="wrap">
          {IMAGES.map((img, index) => (
            <Box
              key={index}
              component="img"
              src={img}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => lightbox.onOpen(img)}
              sx={{
                width: 100,
                height: 100,
                objectFit: 'cover',
                cursor: 'pointer',
                borderRadius: 1,
                '&:hover': { opacity: 0.8 },
              }}
            />
          ))}
        </Stack>
        <Lightbox
          index={lightbox.selected}
          slides={slides}
          open={lightbox.open}
          close={lightbox.onClose}
        />
      </Stack>
    );
  },
};
