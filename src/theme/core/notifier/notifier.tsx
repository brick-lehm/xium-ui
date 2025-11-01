'use client';

import type { AlertColor } from '@mui/material/Alert';

import { useState, useContext, useCallback, createContext } from 'react';

import Alert from '@mui/material/Alert';
import { Snackbar } from '@mui/material';

// schema ------------------------------------------
export type NotifierSchema = {
  notification: string;
  type: AlertColor;
};

// context ------------------------------------------
const NotifierContext = createContext({
  showNotification: (notification: NotifierSchema) => {},
});

export const useNotifier = () => {
  const context = useContext(NotifierContext);

  if (!context) {
    throw new Error('useNotifier must be used within a NotifierProvider');
  }
  return context;
};

// component ------------------------------------------
type Props = {
  children: React.ReactNode;
};
export const Notifier = ({ children }: Props) => {
  // state
  const [notifier, setNotifier] = useState<NotifierSchema | null>(null);

  // provisioning
  // notifier の state を更新する関数
  const showNotification = useCallback((props: NotifierSchema) => {
    setNotifier(props);
  }, []);

  const context = { showNotification };
  return (
    <NotifierContext.Provider value={context}>
      <Snackbar open={notifier != null} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert
          variant="filled"
          severity={notifier?.type ?? 'info'}
          onClose={() => setNotifier(null)}
          sx={{
            mb: 3,
          }}
        >
          {notifier?.notification ?? ''}
        </Alert>
      </Snackbar>
      {children}
    </NotifierContext.Provider>
  );
}
