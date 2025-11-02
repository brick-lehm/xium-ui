import type { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { Notifier, useNotifier } from './notifier';

// ボタンコンポーネント（Notifierの内側で使用）
const NotificationButton = ({ message, type }: { message: string; type: 'success' | 'error' | 'warning' | 'info' }) => {
  const { showNotification } = useNotifier();

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => {
        showNotification({
          notification: message,
          type,
        });
      }}
    >
      {type}通知を表示
    </Button>
  );
};

const meta: Meta<typeof Notifier> = {
  title: 'Surface/Notifier',
  component: Notifier,
  parameters: {
    layout: 'fullwidth',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box
        sx={{
          bgcolor: 'background.light',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '400px',
          paddingY: 10,
        }}
      >
        <Story />
      </Box>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Notifier>;

export const Success: Story = {
  render: () => (
    <Notifier>
      <NotificationButton message="成功しました！" type="success" />
    </Notifier>
  ),
};

export const Error: Story = {
  render: () => (
    <Notifier>
      <NotificationButton message="エラーが発生しました" type="error" />
    </Notifier>
  ),
};

export const Warning: Story = {
  render: () => (
    <Notifier>
      <NotificationButton message="警告メッセージです" type="warning" />
    </Notifier>
  ),
};

export const Info: Story = {
  render: () => (
    <Notifier>
      <NotificationButton message="情報を表示します" type="info" />
    </Notifier>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Notifier>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <NotificationButton message="成功しました！" type="success" />
        <NotificationButton message="エラーが発生しました" type="error" />
        <NotificationButton message="警告メッセージです" type="warning" />
        <NotificationButton message="情報を表示します" type="info" />
      </Box>
    </Notifier>
  ),
};
