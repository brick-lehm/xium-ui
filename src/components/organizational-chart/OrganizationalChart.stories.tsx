import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { OrganizationalChart } from './organizational-chart';

const meta: Meta<typeof OrganizationalChart> = {
  title: 'Components/OrganizationalChart',
  component: OrganizationalChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof OrganizationalChart>;

const PersonNode = ({ name, role }: { name: string; role: string }) => (
  <Card sx={{ p: 2, textAlign: 'center', minWidth: 150 }}>
    <Avatar sx={{ mx: 'auto', mb: 1 }}>{name.charAt(0)}</Avatar>
    <Typography variant="subtitle2">{name}</Typography>
    <Typography variant="caption" color="text.secondary">
      {role}
    </Typography>
  </Card>
);

export const Default: Story = {
  render: () => (
    <Box sx={{ overflow: 'auto', maxWidth: 800 }}>
      <OrganizationalChart
        data={{
          name: <PersonNode name="John Doe" role="CEO" />,
          children: [
            {
              name: <PersonNode name="Jane Smith" role="CTO" />,
              children: [
                { name: <PersonNode name="Bob Johnson" role="Dev Lead" /> },
                { name: <PersonNode name="Alice Brown" role="Designer" /> },
              ],
            },
            {
              name: <PersonNode name="Charlie Wilson" role="CFO" />,
              children: [
                { name: <PersonNode name="David Lee" role="Accountant" /> },
              ],
            },
          ],
        }}
      />
    </Box>
  ),
};

export const SimpleHierarchy: Story = {
  render: () => (
    <Box sx={{ overflow: 'auto', maxWidth: 600 }}>
      <OrganizationalChart
        data={{
          name: <PersonNode name="CEO" role="Chief Executive Officer" />,
          children: [
            { name: <PersonNode name="CTO" role="Chief Technology Officer" /> },
            { name: <PersonNode name="CFO" role="Chief Financial Officer" /> },
            { name: <PersonNode name="COO" role="Chief Operating Officer" /> },
          ],
        }}
      />
    </Box>
  ),
};
