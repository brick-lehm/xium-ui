import type { Meta, StoryObj } from '@storybook/react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';

const meta: Meta<typeof Card> = {
  title: 'Theme/Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Card Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is a simple card component with some content.
        </Typography>
      </CardContent>
    </Card>
  ),
};

export const WithActions: Story = {
  render: () => (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Card Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This card includes action buttons at the bottom.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  ),
};

export const WithMedia: Story = {
  render: () => (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  ),
};

export const WithHeader: Story = {
  render: () => (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'primary.main' }}>
            R
          </Avatar>
        }
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2023"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://mui.com/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
        <IconButton>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <Stack spacing={2}>
      <Card variant="elevation" sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography variant="h6">Elevation (Default)</Typography>
          <Typography variant="body2" color="text.secondary">
            This card uses elevation variant.
          </Typography>
        </CardContent>
      </Card>
      <Card variant="outlined" sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography variant="h6">Outlined</Typography>
          <Typography variant="body2" color="text.secondary">
            This card uses outlined variant.
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  ),
};

export const AllElevations: Story = {
  render: () => (
    <Stack spacing={2}>
      <Card elevation={0} sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography variant="h6">Elevation 0</Typography>
        </CardContent>
      </Card>
      <Card elevation={1} sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography variant="h6">Elevation 1</Typography>
        </CardContent>
      </Card>
      <Card elevation={3} sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography variant="h6">Elevation 3</Typography>
        </CardContent>
      </Card>
      <Card elevation={8} sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography variant="h6">Elevation 8</Typography>
        </CardContent>
      </Card>
      <Card elevation={16} sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography variant="h6">Elevation 16</Typography>
        </CardContent>
      </Card>
    </Stack>
  ),
};

export const Raised: Story = {
  render: () => (
    <Card raised sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Raised Card
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This card has the raised prop enabled, giving it elevation 8.
        </Typography>
      </CardContent>
    </Card>
  ),
};
