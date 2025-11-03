'use client';

import type { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';

import { SignUpForm } from './sign-up-form';
import { AuthSplitLayout } from '../layout';
import { Notifier } from '../../../../surface/notifier';
import { signUpSampleForm, SignUpSchemaMock } from './mock/sign-up-form.mock';

const meta: Meta<typeof SignUpForm> = {
  title: 'Usage/SignUpForm',
  component: SignUpForm,
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
          height: '600px',
        }}
      >
        <Story />
      </Box>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof SignUpForm>;

export const Default: Story = {
  args: {
    defaultValues: {
      email: 'torusaejima@gmail.com',
      password: 'Password123!',
      firstName: 'Toru',
      lastName: 'Saejima',
    },
    signUpSchema: SignUpSchemaMock,
    form: signUpSampleForm(),
  },
  render: (args) => (
    <SignUpForm
      {...args}
      signUpSubmitAction={async (v) => console.log(v)}
    />
    ),
};

export const Layout: Story = {
  args: {
    defaultValues: {
      email: 'torusaejima@gmail.com',
      password: 'Password123!',
      firstName: 'Toru',
      lastName: 'Saejima',
    },
    signUpSchema: SignUpSchemaMock,
    form: signUpSampleForm(),
  },
  render: (args) => (
      <AuthSplitLayout
        slotProps={{
          section: {
            title: 'Xium',
            subtitle: 'アカウントを作成する',
          }
        }}
      >
        <Notifier>
          <SignUpForm
            {...args}
            signUpSubmitAction={async (v) => console.log(v)}
          />
        </Notifier>
      </AuthSplitLayout>
    ),
};
