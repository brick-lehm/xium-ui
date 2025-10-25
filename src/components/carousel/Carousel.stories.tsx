import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import { Carousel, CarouselDotButtons, CarouselArrowFloatButtons, useCarousel } from './index';

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Carousel>;

const IMAGES = [
  'https://picsum.photos/800/450?random=1',
  'https://picsum.photos/800/450?random=2',
  'https://picsum.photos/800/450?random=3',
  'https://picsum.photos/800/450?random=4',
  'https://picsum.photos/800/450?random=5',
];

export const Basic: Story = {
  render: () => {
    const carousel = useCarousel();

    return (
      <Box sx={{ position: 'relative', width: 800 }}>
        <Carousel carousel={carousel}>
          {IMAGES.map((img, index) => (
            <Box
              key={index}
              component="img"
              src={img}
              alt={`Slide ${index + 1}`}
              sx={{ width: '100%', height: 450, objectFit: 'cover' }}
            />
          ))}
        </Carousel>
        <CarouselArrowFloatButtons {...carousel} />
        <CarouselDotButtons
          scrollSnaps={carousel.dots.scrollSnaps}
          selectedIndex={carousel.dots.selectedIndex}
          onClickDot={carousel.dots.onClickDot}
        />
      </Box>
    );
  },
};

export const Autoplay: Story = {
  render: () => {
    const carousel = useCarousel({ loop: true }, []);

    return (
      <Box sx={{ position: 'relative', width: 800 }}>
        <Carousel carousel={carousel}>
          {IMAGES.map((img, index) => (
            <Box
              key={index}
              component="img"
              src={img}
              alt={`Slide ${index + 1}`}
              sx={{ width: '100%', height: 450, objectFit: 'cover' }}
            />
          ))}
        </Carousel>
        <CarouselDotButtons
          scrollSnaps={carousel.dots.scrollSnaps}
          selectedIndex={carousel.dots.selectedIndex}
          onClickDot={carousel.dots.onClickDot}
        />
      </Box>
    );
  },
};
