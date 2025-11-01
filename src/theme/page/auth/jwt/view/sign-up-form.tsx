'use client';

import type * as z from 'zod';
import type * as core from 'zod/v4/core';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { Form } from 'src/theme/core/form/hook-form/client';

// ----------------------------------------------------------------------

export type JwtSignUpViewProps<
  T extends core.$ZodLooseShape = Partial<Record<never, core.SomeType>>,
> = {
  defaultValues: T;
  signUpSchema: z.ZodObject<T>;
  showErrorAction?: (message?: string) => void;
  signUpSubmitAction?: (e?: React.BaseSyntheticEvent) => Promise<void>;
  header?: React.ReactNode;
  form: React.ReactNode;
  signupTerms?: React.ReactNode;
};

export function SignUpForm({ signUpSchema, defaultValues,
                                signUpSubmitAction, header, form, signupTerms }: JwtSignUpViewProps) {

  // values
  const methods = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues,
  });

  const {
    formState: { isSubmitting },
  } = methods;

  return (
    <>

      {(header) && (header)}

      <Form
        methods={methods}
        onSubmit={() => isSubmitting ? undefined : signUpSubmitAction}
      >

        <Box sx={{ gap: 3, display: 'flex', flexDirection: 'column' }}>
          {form}

          <Button
            fullWidth
            color="inherit"
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
            loadingIndicator="アカウントを作成中..."
          >
            アカウントを作成する
          </Button>
        </Box>

      </Form>

      {signupTerms && (signupTerms)}
    </>
  );
}
