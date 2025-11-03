import { z } from 'zod';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

import { Iconify } from '../../../../../display';
import { schemaUtils } from '../../../../../form';
import { Field } from '../../../../../form/hook-form/client';

export type SignUpSchemaTypeMock = z.infer<typeof SignUpSchemaMock>;

export const SignUpSchemaMock = z.object({
  firstName: z.string().min(1, { error: 'First name is required!' }),
  lastName: z.string().min(1, { error: 'Last name is required!' }),
  email: schemaUtils.email(),
  password: z
    .string()
    .min(1, { error: 'Password is required!' })
    .min(6, { error: 'Password must be at least 6 characters!' }),
});

export const signUpSampleForm = () => (
  <Box sx={{ gap: 3, display: 'flex', flexDirection: 'column' }}>
    <Box
      sx={{ display: 'flex', gap: { xs: 3, sm: 2 }, flexDirection: { xs: 'column', sm: 'row' } }}
    >
      <Field.Text
        name="firstName"
        label="First name"
        slotProps={{ inputLabel: { shrink: true } }}
      />
      <Field.Text
        name="lastName"
        label="Last name"
        slotProps={{ inputLabel: { shrink: true } }}
      />
    </Box>

    <Field.Text name="email" label="Email address" slotProps={{ inputLabel: { shrink: true } }} />

    <Field.Text
      name="password"
      label="Password"
      placeholder="6+ characters"
      type="password"
      slotProps={{
        inputLabel: { shrink: true },
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton  edge="end">
                <Iconify icon='solar:eye-closed-bold' />
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
    />
  </Box>
);
