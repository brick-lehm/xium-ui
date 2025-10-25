import type { Meta, StoryObj } from '@storybook/react';
import Stack from '@mui/material/Stack';
import { FileThumbnail } from './file-thumbnail';

const meta: Meta<typeof FileThumbnail> = {
  title: 'Components/FileThumbnail',
  component: FileThumbnail,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FileThumbnail>;

export const ImageFile: Story = {
  args: {
    file: 'image.jpg',
    sx: { width: 120, height: 120 },
  },
};

export const PdfFile: Story = {
  args: {
    file: 'document.pdf',
    sx: { width: 120, height: 120 },
  },
};

export const WordFile: Story = {
  args: {
    file: 'document.docx',
    sx: { width: 120, height: 120 },
  },
};

export const ExcelFile: Story = {
  args: {
    file: 'spreadsheet.xlsx',
    sx: { width: 120, height: 120 },
  },
};

export const MultipleFileTypes: Story = {
  render: () => (
    <Stack direction="row" spacing={2} flexWrap="wrap">
      <FileThumbnail file="image.jpg" sx={{ width: 80, height: 80 }} />
      <FileThumbnail file="document.pdf" sx={{ width: 80, height: 80 }} />
      <FileThumbnail file="document.docx" sx={{ width: 80, height: 80 }} />
      <FileThumbnail file="spreadsheet.xlsx" sx={{ width: 80, height: 80 }} />
      <FileThumbnail file="presentation.pptx" sx={{ width: 80, height: 80 }} />
      <FileThumbnail file="archive.zip" sx={{ width: 80, height: 80 }} />
      <FileThumbnail file="video.mp4" sx={{ width: 80, height: 80 }} />
      <FileThumbnail file="audio.mp3" sx={{ width: 80, height: 80 }} />
    </Stack>
  ),
};
