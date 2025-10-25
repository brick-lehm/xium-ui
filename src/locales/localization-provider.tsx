'use client';

import 'dayjs/locale/en.js';
import 'dayjs/locale/vi.js';
import 'dayjs/locale/fr.js';
import 'dayjs/locale/zh-cn.js';
import 'dayjs/locale/ar-sa.js';

import dayjs from 'dayjs';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider as Provider } from '@mui/x-date-pickers/LocalizationProvider';

import { useTranslate } from './use-locales';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export function LocalizationProvider({ children }: Props) {
  const { currentLang } = useTranslate();

  dayjs.locale(currentLang.adapterLocale);

  return (
    <Provider dateAdapter={AdapterDayjs} adapterLocale={currentLang.adapterLocale}>
      {children}
    </Provider>
  );
}
