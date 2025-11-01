import type { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';

import { SignUpForm } from './sign-up-form';
import { signUpSampleForm, SignUpSchemaMock } from './mock/sign-up-form.mock';

const meta: Meta<typeof SignUpForm> = {
  title: 'Theme/Page/SignUpForm',
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
    defaultValues: {},
    signUpSchema: SignUpSchemaMock,
    form: signUpSampleForm(),
  },
};
