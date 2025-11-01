import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import MailIcon from '@mui/icons-material/Mail';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ListItemButton from '@mui/material/ListItemButton';

const meta: Meta<typeof Drawer> = {
  title: 'Theme/Components/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Drawer>;

const DrawerList = () => (
  <Box sx={{ width: 250 }} role="presentation">
    <List>
      {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    <Divider />
    <List>
      {['All mail', 'Trash', 'Spam'].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
);

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open Drawer
        </Button>
        <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
          <DrawerList />
        </Drawer>
      </div>
    );
  },
};

export const TemporaryLeft: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open Left Drawer
        </Button>
        <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
          <DrawerList />
        </Drawer>
      </div>
    );
  },
};

export const TemporaryRight: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open Right Drawer
        </Button>
        <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
          <DrawerList />
        </Drawer>
      </div>
    );
  },
};

export const TemporaryTop: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open Top Drawer
        </Button>
        <Drawer anchor="top" open={open} onClose={() => setOpen(false)}>
          <Box sx={{ width: 'auto', p: 2 }}>
            <DrawerList />
          </Box>
        </Drawer>
      </div>
    );
  },
};

export const TemporaryBottom: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open Bottom Drawer
        </Button>
        <Drawer anchor="bottom" open={open} onClose={() => setOpen(false)}>
          <Box sx={{ width: 'auto', p: 2 }}>
            <DrawerList />
          </Box>
        </Drawer>
      </div>
    );
  },
};

export const AllAnchors: Story = {
  render: () => {
    const [state, setState] = useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });

    type Anchor = 'top' | 'left' | 'bottom' | 'right';

    const toggleDrawer = (anchor: Anchor, open: boolean) => {
      setState({ ...state, [anchor]: open });
    };

    return (
      <Stack spacing={2}>
        {(['left', 'right', 'top', 'bottom'] as const).map((anchor) => (
          <div key={anchor}>
            <Button variant="contained" onClick={() => toggleDrawer(anchor, true)}>
              Open {anchor}
            </Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={() => toggleDrawer(anchor, false)}
            >
              <Box
                sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, p: 2 }}
                role="presentation"
                onClick={() => toggleDrawer(anchor, false)}
                onKeyDown={() => toggleDrawer(anchor, false)}
              >
                <DrawerList />
              </Box>
            </Drawer>
          </div>
        ))}
      </Stack>
    );
  },
};

export const PersistentLeft: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Box sx={{ display: 'flex', width: 600, height: 400, position: 'relative' }}>
        <Button
          variant="contained"
          onClick={() => setOpen(!open)}
          sx={{ position: 'absolute', top: 8, left: 8, zIndex: 1 }}
        >
          {open ? 'Close' : 'Open'} Persistent Drawer
        </Button>
        <Drawer
          sx={{
            width: 240,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: 240,
              position: 'absolute',
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerList />
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            ml: open ? '240px' : 0,
            transition: 'margin 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
          }}
        >
          <Box sx={{ mt: 6 }}>Main content area</Box>
        </Box>
      </Box>
    );
  },
};

export const PersistentRight: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Box sx={{ display: 'flex', width: 600, height: 400, position: 'relative' }}>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            mr: open ? '240px' : 0,
            transition: 'margin 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
          }}
        >
          <Button variant="contained" onClick={() => setOpen(!open)}>
            {open ? 'Close' : 'Open'} Persistent Drawer
          </Button>
          <Box sx={{ mt: 2 }}>Main content area</Box>
        </Box>
        <Drawer
          sx={{
            width: 240,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: 240,
              position: 'absolute',
            },
          }}
          variant="persistent"
          anchor="right"
          open={open}
        >
          <DrawerList />
        </Drawer>
      </Box>
    );
  },
};

export const PermanentLeft: Story = {
  render: () => (
    <Box sx={{ display: 'flex', width: 600, height: 400, position: 'relative' }}>
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            position: 'absolute',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <DrawerList />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, ml: '240px' }}>
        Main content area with permanent drawer
      </Box>
    </Box>
  ),
};

export const PermanentRight: Story = {
  render: () => (
    <Box sx={{ display: 'flex', width: 600, height: 400, position: 'relative' }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3, mr: '240px' }}>
        Main content area with permanent drawer
      </Box>
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            position: 'absolute',
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <DrawerList />
      </Drawer>
    </Box>
  ),
};

export const AllVariants: Story = {
  render: () => {
    const [temporary, setTemporary] = useState(false);
    const [persistent, setPersistent] = useState(false);

    return (
      <Stack spacing={2}>
        <div>
          <Button variant="contained" onClick={() => setTemporary(true)}>
            Open Temporary Drawer
          </Button>
          <Drawer anchor="left" open={temporary} onClose={() => setTemporary(false)}>
            <DrawerList />
          </Drawer>
        </div>
        <Box sx={{ display: 'flex', width: 600, height: 300, position: 'relative', border: '1px solid #ddd' }}>
          <Button
            variant="contained"
            onClick={() => setPersistent(!persistent)}
            sx={{ position: 'absolute', top: 8, left: 8, zIndex: 1 }}
          >
            {persistent ? 'Close' : 'Open'} Persistent
          </Button>
          <Drawer
            sx={{
              width: 200,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: 200,
                position: 'absolute',
              },
            }}
            variant="persistent"
            anchor="left"
            open={persistent}
          >
            <Box sx={{ width: 200 }} role="presentation">
              <List>
                {['Item 1', 'Item 2', 'Item 3'].map((text) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 2,
              ml: persistent ? '200px' : 0,
              transition: 'margin 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
            }}
          >
            <Box sx={{ mt: 6 }}>Persistent content</Box>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', width: 600, height: 300, position: 'relative', border: '1px solid #ddd' }}>
          <Drawer
            sx={{
              width: 200,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: 200,
                position: 'absolute',
              },
            }}
            variant="permanent"
            anchor="left"
          >
            <Box sx={{ width: 200 }} role="presentation">
              <List>
                {['Item 1', 'Item 2', 'Item 3'].map((text) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
          <Box component="main" sx={{ flexGrow: 1, p: 2, ml: '200px' }}>
            Permanent drawer content
          </Box>
        </Box>
      </Stack>
    );
  },
};
