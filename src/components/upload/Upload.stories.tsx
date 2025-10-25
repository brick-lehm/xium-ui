import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import { Upload, UploadBox, UploadAvatar } from './index';

const meta: Meta<typeof Upload> = {
  title: 'Components/Upload',
  component: Upload,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Upload>;

export const SingleFile: Story = {
  render: () => {
    const [file, setFile] = useState<File | string | null>(null);

    return (
      <Stack spacing={2} sx={{ width: 600 }}>
        <Upload
          file={file}
          onDelete={() => setFile(null)}
          onDrop={(acceptedFiles) => setFile(acceptedFiles[0])}
        />
      </Stack>
    );
  },
};

export const MultipleFiles: Story = {
  render: () => {
    const [files, setFiles] = useState<(File | string)[]>([]);

    return (
      <Stack spacing={2} sx={{ width: 600 }}>
        <Upload
          multiple
          files={files}
          onRemove={(file) => setFiles(files.filter((f) => f !== file))}
          onRemoveAll={() => setFiles([])}
          onDrop={(acceptedFiles) => setFiles([...files, ...acceptedFiles])}
        />
      </Stack>
    );
  },
};

export const UploadBoxVariant: Story = {
  render: () => {
    const [file, setFile] = useState<File | string | null>(null);

    return (
      <Stack spacing={2} sx={{ width: 600 }}>
        <UploadBox
          placeholder={
            <Stack spacing={0.5} alignItems="center">
              <span>Drop or Select file</span>
            </Stack>
          }
          onDrop={(acceptedFiles) => setFile(acceptedFiles[0])}
        />
      </Stack>
    );
  },
};

export const AvatarUpload: Story = {
  render: () => {
    const [file, setFile] = useState<File | string | null>(null);

    return (
      <Stack spacing={2} alignItems="center">
        <UploadAvatar
          file={file}
          onDrop={(acceptedFiles) => setFile(acceptedFiles[0])}
          helperText="Allowed *.jpeg, *.jpg, *.png, *.gif max size of 3 MB"
        />
      </Stack>
    );
  },
};
