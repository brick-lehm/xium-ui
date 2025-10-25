import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import { Chart, useChart } from './index';

const meta: Meta<typeof Chart> = {
  title: 'Components/Chart',
  component: Chart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Chart>;

export const LineChart: Story = {
  render: () => {
    const chartOptions = useChart({
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      },
    });

    return (
      <Box sx={{ width: 600, height: 400 }}>
        <Chart
          type="line"
          series={[
            {
              name: 'Sales',
              data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
            },
          ]}
          options={chartOptions}
          height="100%"
        />
      </Box>
    );
  },
};

export const BarChart: Story = {
  render: () => {
    const chartOptions = useChart({
      xaxis: {
        categories: ['Q1', 'Q2', 'Q3', 'Q4'],
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
        },
      },
    });

    return (
      <Box sx={{ width: 600, height: 400 }}>
        <Chart
          type="bar"
          series={[
            {
              name: 'Revenue',
              data: [44, 55, 57, 56],
            },
            {
              name: 'Profit',
              data: [35, 41, 36, 26],
            },
          ]}
          options={chartOptions}
          height="100%"
        />
      </Box>
    );
  },
};

export const PieChart: Story = {
  render: () => {
    const chartOptions = useChart({
      labels: ['Team A', 'Team B', 'Team C', 'Team D'],
      legend: {
        position: 'bottom',
      },
    });

    return (
      <Box sx={{ width: 400, height: 400 }}>
        <Chart
          type="pie"
          series={[44, 55, 13, 43]}
          options={chartOptions}
          height="100%"
        />
      </Box>
    );
  },
};

export const DonutChart: Story = {
  render: () => {
    const chartOptions = useChart({
      labels: ['Product A', 'Product B', 'Product C', 'Product D'],
      legend: {
        position: 'bottom',
      },
      plotOptions: {
        pie: {
          donut: {
            size: '65%',
          },
        },
      },
    });

    return (
      <Box sx={{ width: 400, height: 400 }}>
        <Chart
          type="donut"
          series={[44, 55, 13, 43]}
          options={chartOptions}
          height="100%"
        />
      </Box>
    );
  },
};
