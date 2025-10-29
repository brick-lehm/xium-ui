

import type { AlertColor } from '@mui/material/Alert';

import Button from '@mui/material/Button';

import { Notifier, useNotifier } from './notifier';

export type NotifierProps = {
  notification: string;
  type: AlertColor;
}
export function NotifierStory({notification, type}: NotifierProps) {

  const {showNotification} = useNotifier();

  return (
    <div>
      <Notifier>
        <Button variant='contained' color='primary'
                onClick={() => showNotification({notification, type})}
        >
          表示する
        </Button>
      </Notifier>
    </div>
  );
}
