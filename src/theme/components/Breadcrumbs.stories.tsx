import type { Meta, StoryObj } from '@storybook/react';
import type { MouseEvent as ReactMouseEvent } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Theme/Components/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

function handleClick(event: ReactMouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export const Default: Story = {
  render: () => (
    <Breadcrumbs>
      <Link underline="hover" color="inherit" href="/" onClick={handleClick}>
        Home
      </Link>
      <Link underline="hover" color="inherit" href="/catalog" onClick={handleClick}>
        Catalog
      </Link>
      <Typography color="text.primary">Products</Typography>
    </Breadcrumbs>
  ),
};

export const CustomSeparator: Story = {
  render: () => (
    <Stack spacing={2}>
      <Breadcrumbs separator="›">
        <Link underline="hover" color="inherit" href="/" onClick={handleClick}>
          Home
        </Link>
        <Link underline="hover" color="inherit" href="/catalog" onClick={handleClick}>
          Catalog
        </Link>
        <Typography color="text.primary">Products</Typography>
      </Breadcrumbs>

      <Breadcrumbs separator="-">
        <Link underline="hover" color="inherit" href="/" onClick={handleClick}>
          Home
        </Link>
        <Link underline="hover" color="inherit" href="/catalog" onClick={handleClick}>
          Catalog
        </Link>
        <Typography color="text.primary">Products</Typography>
      </Breadcrumbs>

      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
        <Link underline="hover" color="inherit" href="/" onClick={handleClick}>
          Home
        </Link>
        <Link underline="hover" color="inherit" href="/catalog" onClick={handleClick}>
          Catalog
        </Link>
        <Typography color="text.primary">Products</Typography>
      </Breadcrumbs>
    </Stack>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Breadcrumbs>
      <Link
        underline="hover"
        sx={{ display: 'flex', alignItems: 'center' }}
        color="inherit"
        href="/"
        onClick={handleClick}
      >
        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        Home
      </Link>
      <Link
        underline="hover"
        sx={{ display: 'flex', alignItems: 'center' }}
        color="inherit"
        href="/catalog"
        onClick={handleClick}
      >
        <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        Catalog
      </Link>
      <Typography
        sx={{ display: 'flex', alignItems: 'center' }}
        color="text.primary"
      >
        <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        Products
      </Typography>
    </Breadcrumbs>
  ),
};

export const Collapsed: Story = {
  render: () => (
    <Breadcrumbs maxItems={2}>
      <Link underline="hover" color="inherit" href="/" onClick={handleClick}>
        Home
      </Link>
      <Link underline="hover" color="inherit" href="/catalog" onClick={handleClick}>
        Catalog
      </Link>
      <Link underline="hover" color="inherit" href="/category" onClick={handleClick}>
        Category
      </Link>
      <Link underline="hover" color="inherit" href="/subcategory" onClick={handleClick}>
        Subcategory
      </Link>
      <Typography color="text.primary">Products</Typography>
    </Breadcrumbs>
  ),
};

export const ExpandedCollapse: Story = {
  render: () => (
    <Stack spacing={2}>
      <Breadcrumbs maxItems={2} itemsBeforeCollapse={1}>
        <Link underline="hover" color="inherit" href="/" onClick={handleClick}>
          Home
        </Link>
        <Link underline="hover" color="inherit" href="/catalog" onClick={handleClick}>
          Catalog
        </Link>
        <Link underline="hover" color="inherit" href="/category" onClick={handleClick}>
          Category
        </Link>
        <Link underline="hover" color="inherit" href="/subcategory" onClick={handleClick}>
          Subcategory
        </Link>
        <Typography color="text.primary">Products</Typography>
      </Breadcrumbs>

      <Breadcrumbs maxItems={2} itemsAfterCollapse={2}>
        <Link underline="hover" color="inherit" href="/" onClick={handleClick}>
          Home
        </Link>
        <Link underline="hover" color="inherit" href="/catalog" onClick={handleClick}>
          Catalog
        </Link>
        <Link underline="hover" color="inherit" href="/category" onClick={handleClick}>
          Category
        </Link>
        <Link underline="hover" color="inherit" href="/subcategory" onClick={handleClick}>
          Subcategory
        </Link>
        <Typography color="text.primary">Products</Typography>
      </Breadcrumbs>
    </Stack>
  ),
};
