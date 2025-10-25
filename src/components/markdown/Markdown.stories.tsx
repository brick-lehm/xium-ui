import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import { Markdown } from './markdown';

const meta: Meta<typeof Markdown> = {
  title: 'Components/Markdown',
  component: Markdown,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Markdown>;

const sampleMarkdown = `
# Heading 1
## Heading 2
### Heading 3

This is a paragraph with **bold text** and *italic text*.

- List item 1
- List item 2
- List item 3

1. Numbered item 1
2. Numbered item 2
3. Numbered item 3

> This is a blockquote

\`\`\`javascript
const hello = () => {
  console.log("Hello, World!");
};
\`\`\`

[Link to Google](https://google.com)

![Image](https://picsum.photos/400/300)
`;

export const Default: Story = {
  args: {
    children: sampleMarkdown,
  },
};

export const Simple: Story = {
  args: {
    children: `
# Simple Example

This is a simple markdown example with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3
    `,
  },
};

export const WithTable: Story = {
  args: {
    children: `
# Table Example

| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
| Cell 7   | Cell 8   | Cell 9   |
    `,
  },
};
