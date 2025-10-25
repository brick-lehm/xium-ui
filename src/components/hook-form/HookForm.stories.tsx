import type { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { FormProvider, RHFTextField, RHFSelect, RHFCheckbox, RHFSwitch } from './index';

const meta: Meta = {
  title: 'Components/HookForm',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const TextField: Story = {
  render: () => {
    const methods = useForm({
      defaultValues: {
        name: '',
        email: '',
      },
    });

    const onSubmit = (data: any) => {
      console.log(data);
      alert(JSON.stringify(data, null, 2));
    };

    return (
      <FormProvider methods={methods} onSubmit={methods.handleSubmit(onSubmit)}>
        <Stack spacing={3} sx={{ width: 400 }}>
          <RHFTextField name="name" label="Name" />
          <RHFTextField name="email" label="Email" type="email" />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Stack>
      </FormProvider>
    );
  },
};

export const Select: Story = {
  render: () => {
    const methods = useForm({
      defaultValues: {
        country: '',
        role: '',
      },
    });

    const onSubmit = (data: any) => {
      console.log(data);
      alert(JSON.stringify(data, null, 2));
    };

    return (
      <FormProvider methods={methods} onSubmit={methods.handleSubmit(onSubmit)}>
        <Stack spacing={3} sx={{ width: 400 }}>
          <RHFSelect name="country" label="Country">
            <MenuItem value="us">United States</MenuItem>
            <MenuItem value="uk">United Kingdom</MenuItem>
            <MenuItem value="jp">Japan</MenuItem>
          </RHFSelect>
          <RHFSelect name="role" label="Role">
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="user">User</MenuItem>
            <MenuItem value="manager">Manager</MenuItem>
          </RHFSelect>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Stack>
      </FormProvider>
    );
  },
};

export const CheckboxAndSwitch: Story = {
  render: () => {
    const methods = useForm({
      defaultValues: {
        terms: false,
        newsletter: false,
        notifications: true,
      },
    });

    const onSubmit = (data: any) => {
      console.log(data);
      alert(JSON.stringify(data, null, 2));
    };

    return (
      <FormProvider methods={methods} onSubmit={methods.handleSubmit(onSubmit)}>
        <Stack spacing={3} sx={{ width: 400 }}>
          <RHFCheckbox name="terms" label="I agree to the terms and conditions" />
          <RHFCheckbox name="newsletter" label="Subscribe to newsletter" />
          <RHFSwitch name="notifications" label="Enable notifications" />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Stack>
      </FormProvider>
    );
  },
};
