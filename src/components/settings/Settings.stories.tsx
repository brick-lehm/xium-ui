import type { Meta, StoryObj } from '@storybook/react';
import Button from '@mui/material/Button';
import { SettingsProvider, useSettingsContext } from './context';
import { SettingsDrawer } from './drawer';

const meta: Meta = {
  title: 'Components/Settings',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <SettingsProvider>
        <Story />
      </SettingsProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj;

const SettingsDemo = () => {
  const settings = useSettingsContext();

  return (
    <>
      <Button variant="contained" onClick={settings.onToggle}>
        Open Settings
      </Button>
      <SettingsDrawer />
    </>
  );
};

export const Default: Story = {
  render: () => <SettingsDemo />,
};
