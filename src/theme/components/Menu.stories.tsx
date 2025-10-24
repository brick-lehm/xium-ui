import type { Meta, StoryObj } from '@storybook/react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import InboxIcon from '@mui/icons-material/Inbox';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
import Check from '@mui/material/Icon';
import { useState } from 'react';

const meta: Meta<typeof Menu> = {
  title: 'Theme/Components/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <div>
        <Button variant="contained" onClick={handleClick}>
          Open Menu
        </Button>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    );
  },
};

export const WithIcons: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <div>
        <Button variant="contained" onClick={handleClick}>
          Open Menu with Icons
        </Button>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SendIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Sent mail</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <DraftsIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Drafts</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <InboxIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Inbox</ListItemText>
          </MenuItem>
        </Menu>
      </div>
    );
  },
};

export const WithDividers: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <div>
        <Button variant="contained" onClick={handleClick}>
          Open Menu with Dividers
        </Button>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ContentCut fontSize="small" />
            </ListItemIcon>
            <ListItemText>Cut</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ContentCopy fontSize="small" />
            </ListItemIcon>
            <ListItemText>Copy</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ContentPaste fontSize="small" />
            </ListItemIcon>
            <ListItemText>Paste</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Cloud fontSize="small" />
            </ListItemIcon>
            <ListItemText>Web Clipboard</ListItemText>
          </MenuItem>
        </Menu>
      </div>
    );
  },
};

export const WithSelection: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedIndex, setSelectedIndex] = useState(1);
    const open = Boolean(anchorEl);

    const options = ['Show some love to MUI', 'Show all notification content', 'Hide sensitive notification content'];

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (index: number) => {
      setSelectedIndex(index);
      setAnchorEl(null);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <div>
        <Button variant="contained" onClick={handleClick}>
          Selected: {options[selectedIndex]}
        </Button>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          {options.map((option, index) => (
            <MenuItem
              key={option}
              selected={index === selectedIndex}
              onClick={() => handleMenuItemClick(index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  },
};

export const Dense: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <div>
        <Button variant="contained" onClick={handleClick}>
          Dense Menu
        </Button>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={handleClose} dense>
            Profile
          </MenuItem>
          <MenuItem onClick={handleClose} dense>
            My account
          </MenuItem>
          <MenuItem onClick={handleClose} dense>
            Settings
          </MenuItem>
          <MenuItem onClick={handleClose} dense>
            Logout
          </MenuItem>
        </Menu>
      </div>
    );
  },
};

export const NestedMenu: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [nestedAnchorEl, setNestedAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const nestedOpen = Boolean(nestedAnchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleNestedClick = (event: React.MouseEvent<HTMLLIElement>) => {
      setNestedAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
      setNestedAnchorEl(null);
    };

    const handleNestedClose = () => {
      setNestedAnchorEl(null);
    };

    return (
      <div>
        <Button variant="contained" onClick={handleClick}>
          Nested Menu
        </Button>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleNestedClick}>
            Settings
          </MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
        <Menu
          anchorEl={nestedAnchorEl}
          open={nestedOpen}
          onClose={handleNestedClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <MenuItem onClick={handleClose}>General</MenuItem>
          <MenuItem onClick={handleClose}>Privacy</MenuItem>
          <MenuItem onClick={handleClose}>Notifications</MenuItem>
        </Menu>
      </div>
    );
  },
};

export const IconButtonMenu: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <div>
        <IconButton onClick={handleClick}>
          <MoreVertIcon />
        </IconButton>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SendIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Send</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <DraftsIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Draft</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <InboxIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Archive</ListItemText>
          </MenuItem>
        </Menu>
      </div>
    );
  },
};

export const AllVariations: Story = {
  render: () => {
    const [anchorEl1, setAnchorEl1] = useState<null | HTMLElement>(null);
    const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null);
    const [anchorEl3, setAnchorEl3] = useState<null | HTMLElement>(null);

    return (
      <Stack spacing={2}>
        <div>
          <Button variant="contained" onClick={(e) => setAnchorEl1(e.currentTarget)}>
            Basic Menu
          </Button>
          <Menu anchorEl={anchorEl1} open={Boolean(anchorEl1)} onClose={() => setAnchorEl1(null)}>
            <MenuItem onClick={() => setAnchorEl1(null)}>Profile</MenuItem>
            <MenuItem onClick={() => setAnchorEl1(null)}>Settings</MenuItem>
            <MenuItem onClick={() => setAnchorEl1(null)}>Logout</MenuItem>
          </Menu>
        </div>
        <div>
          <Button variant="contained" onClick={(e) => setAnchorEl2(e.currentTarget)}>
            Menu with Icons
          </Button>
          <Menu anchorEl={anchorEl2} open={Boolean(anchorEl2)} onClose={() => setAnchorEl2(null)}>
            <MenuItem onClick={() => setAnchorEl2(null)}>
              <ListItemIcon>
                <SendIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Send</ListItemText>
            </MenuItem>
            <MenuItem onClick={() => setAnchorEl2(null)}>
              <ListItemIcon>
                <DraftsIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Draft</ListItemText>
            </MenuItem>
          </Menu>
        </div>
        <div>
          <Button variant="contained" onClick={(e) => setAnchorEl3(e.currentTarget)}>
            Dense Menu
          </Button>
          <Menu anchorEl={anchorEl3} open={Boolean(anchorEl3)} onClose={() => setAnchorEl3(null)}>
            <MenuItem onClick={() => setAnchorEl3(null)} dense>
              Profile
            </MenuItem>
            <MenuItem onClick={() => setAnchorEl3(null)} dense>
              Settings
            </MenuItem>
            <MenuItem onClick={() => setAnchorEl3(null)} dense>
              Logout
            </MenuItem>
          </Menu>
        </div>
      </Stack>
    );
  },
};
