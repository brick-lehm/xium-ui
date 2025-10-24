import type { Meta, StoryObj } from '@storybook/react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from 'react';

const meta: Meta<typeof Rating> = {
  title: 'Theme/Components/Rating',
  component: Rating,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<number | null>(2);
    return (
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
      />
    );
  },
};

export const ReadOnly: Story = {
  render: () => (
    <Stack spacing={1}>
      <Rating name="read-only" value={4} readOnly />
      <Rating name="read-only" value={3.5} readOnly />
      <Rating name="read-only" value={2} readOnly />
    </Stack>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Stack spacing={1}>
      <Rating name="disabled" value={4} disabled />
      <Rating name="disabled" value={2} disabled />
    </Stack>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <Stack spacing={2}>
      <Rating name="size-small" defaultValue={2} size="small" />
      <Rating name="size-medium" defaultValue={2} size="medium" />
      <Rating name="size-large" defaultValue={2} size="large" />
    </Stack>
  ),
};

export const HalfRating: Story = {
  render: () => (
    <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
    </Stack>
  ),
};

export const Precision: Story = {
  render: () => (
    <Stack spacing={2}>
      <Box>
        <Typography component="legend">Default (precision: 1)</Typography>
        <Rating name="precision-1" defaultValue={3} />
      </Box>
      <Box>
        <Typography component="legend">Precision: 0.5</Typography>
        <Rating name="precision-0.5" defaultValue={2.5} precision={0.5} />
      </Box>
      <Box>
        <Typography component="legend">Precision: 0.1</Typography>
        <Rating name="precision-0.1" defaultValue={2.3} precision={0.1} />
      </Box>
    </Stack>
  ),
};

export const Hover: Story = {
  render: () => {
    const [value, setValue] = useState<number | null>(2);
    const [hover, setHover] = useState(-1);

    const labels: { [index: string]: string } = {
      0.5: 'Useless',
      1: 'Useless+',
      1.5: 'Poor',
      2: 'Poor+',
      2.5: 'Ok',
      3: 'Ok+',
      3.5: 'Good',
      4: 'Good+',
      4.5: 'Excellent',
      5: 'Excellent+',
    };

    function getLabelText(value: number) {
      return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
    }

    return (
      <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
        <Rating
          name="hover-feedback"
          value={value}
          precision={0.5}
          getLabelText={getLabelText}
          onChange={(event, newValue) => setValue(newValue)}
          onChangeActive={(event, newHover) => setHover(newHover)}
        />
        {value !== null && (
          <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
        )}
      </Box>
    );
  },
};

export const CustomIcon: Story = {
  render: () => {
    const [value, setValue] = useState<number | null>(2);
    return (
      <Rating
        name="customized-color"
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
    );
  },
};

export const CustomIconColors: Story = {
  render: () => (
    <Stack spacing={2}>
      <Rating
        name="customized-color-primary"
        defaultValue={2}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        sx={{
          '& .MuiRating-iconFilled': {
            color: 'primary.main',
          },
        }}
      />
      <Rating
        name="customized-color-secondary"
        defaultValue={2}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        sx={{
          '& .MuiRating-iconFilled': {
            color: 'secondary.main',
          },
        }}
      />
      <Rating
        name="customized-color-error"
        defaultValue={2}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        sx={{
          '& .MuiRating-iconFilled': {
            color: 'error.main',
          },
        }}
      />
    </Stack>
  ),
};

export const HighlightSelected: Story = {
  render: () => (
    <Rating
      name="highlight-selected-only"
      defaultValue={2}
      highlightSelectedOnly
    />
  ),
};

export const MaxRating: Story = {
  render: () => (
    <Stack spacing={2}>
      <Rating name="max-5" defaultValue={2} max={5} />
      <Rating name="max-10" defaultValue={5} max={10} />
      <Rating name="max-3" defaultValue={2} max={3} />
    </Stack>
  ),
};
